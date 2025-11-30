import { useEffect, useState } from "react";
import { getPrognosis } from "../../api/Api";
import { DailyCard } from "../DailyCard/DailyCard";
import Title from "../Title/Title";
import type { DailyEnergyAverage } from "../../types/DailyEnergyAverage";
import "./DailyCards.css";

export default function DailyCards() {
  const [data, setData] = useState<DailyEnergyAverage[] | null>(null);

  function placeholderData(): DailyEnergyAverage[] {
    const placeholders: DailyEnergyAverage[] = [];
    for (let i = 0; i < 3; i++) {
      placeholders.push({
        date: new Date(Date.now() + i * 24 * 60 * 60 * 1000),
        averages: [
          { fuel: "biomass", perc: "Loading..." },
          { fuel: "coal", perc: "Loading..." },
          { fuel: "gas", perc: "Loading..." },
          { fuel: "hydro", perc: "Loading..." },
          { fuel: "imports", perc: "Loading..." },
          { fuel: "nuclear", perc: "Loading..." },
          { fuel: "other", perc: "Loading..." },
          { fuel: "solar", perc: "Loading..." },
          { fuel: "wind", perc: "Loading..." },
        ],
        totalCleanPerc: "Loading...",
      });
    }
    return placeholders;
  }

  useEffect(() => {
    async function fetchData() {
      if (!data) setData(placeholderData());
      const result = await getPrognosis();
      const finalData: DailyEnergyAverage[] = [];

      for (let i = 0; i < 3; i++) {
        if (result[i]) {
          finalData.push(result[i]);
        } else {
          finalData.push({
            date: new Date(result[i - 1]?.date.getTime() + 24 * 60 * 60 * 1000 || Date.now()),
            averages: [
              { fuel: "biomass", perc: "No data yet" },
              { fuel: "coal", perc: "No data yet" },
              { fuel: "gas", perc: "No data yet" },
              { fuel: "hydro", perc: "No data yet" },
              { fuel: "imports", perc: "No data yet" },
              { fuel: "nuclear", perc: "No data yet" },
              { fuel: "other", perc: "No data yet" },
              { fuel: "solar", perc: "No data yet" },
              { fuel: "wind", perc: "No data yet" },
            ],
            totalCleanPerc: "No data yet",
          });
        }
      }
      setData(finalData);
    }
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <section className="daily-cards-section">
      <Title title="Energy Mix Forecast" />
      <div className="daily-cards-grid">
        {(data || placeholderData()).map((day) => (
          <DailyCard key={day.date.toISOString()} data={day} />
        ))}
      </div>
      <p className="daily-cards__subtitle">
        Forecasts for today and the next two days on the daily energy mix based on the data from National Energy System Operator (NESO).
      </p>
    </section>
  );
}
