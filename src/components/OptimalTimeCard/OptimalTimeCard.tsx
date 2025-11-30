import { useState } from "react";
import { getOptimalChargingTime } from "../../api/Api";
import { formatDateTime, formatPercentage } from "../../util/util";
import type { ChargingTime } from "../../types/ChargingTime";
import "./OptimalTimeCard.css";
import Title from "../Title/Title";

export default function OptimalTimeCard() {
  const [data, setData] = useState<ChargingTime | null>(null);
  const [value, setValue] = useState<string>("1");
  const [loading, setLoading] = useState(false);

  async function calculateOptimalTime() {
    setLoading(true);
    try {
      const result = await getOptimalChargingTime(Number(value));
      setData(result);
    } catch (err) {
      console.error(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  const renderData = (value?: string) =>
    loading ? "Loading..." : value ?? "";

  return (
    <section className="optimal-time-section">
      <Title title="Optimal Charging Time" />
      <div className="optimal-card">
        <h3 className="optimal-card__title">
          Enter the charging duration in hours to find the optimal time window.
        </h3>

        <div className="optimal-card__controls">
          <input
            type="number"
            min="1"
            max="6"
            value={value}
            className="optimal-card__input"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="optimal-card__button" onClick={calculateOptimalTime}>
            <p className="optimal-card__button-text">Enter</p>
          </button>
        </div>

        <div className="optimal-card__results">
          <p><strong>From:</strong> {renderData(data ? formatDateTime(data.from) : undefined)}</p>
          <p><strong>To:</strong> {renderData(data ? formatDateTime(data.to) : undefined)}</p>
          <p><strong>Clean energy:</strong> {renderData(data ? formatPercentage(data.perc) : undefined)}</p>
        </div>
      </div>
    </section>
  );
}
