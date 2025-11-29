import { useState } from "react";
import { getOptimalChargingTime } from "../../api/Api";
import { formatDateTime } from "../../util/util";
import type { ChargingTime } from "../../types/ChargingTime";

export default function OptimalTimeCard() {
  const [data, setData] = useState<ChargingTime | null>(null);
  const [value, setValue] = useState<string>("1");

  async function calculateOptimalTime() {
    const result = await getOptimalChargingTime(Number(value));
    setData(result);
  }

  return (
    <div>
      <h3>Optimal charging time bracket</h3>
      <input
        type="number"
        defaultValue={1}
        min="1"
        max="6"
        value={value}
        onChange={val => setValue(val.target.value)}
      />
      <button onClick={calculateOptimalTime}>Find the best time</button>
      {data !== null && (
        <div>
          <p>From: {formatDateTime(data?.from)}</p>
          <p>To: {formatDateTime(data?.to)}</p>
          <p>Clean energy percentage: {data?.perc.toFixed(0)}%</p>
        </div>
      )}
    </div>
  );
}