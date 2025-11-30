import { useEffect, useState } from "react";
import { getPrognosis } from "../../api/Api";
import { DailyCard } from "../DailyCard/DailyCard";
import Title from "../Title/Title";
import type { DailyEnergyAverage } from "../../types/DailyEnergyAverage";
import "./DailyCards.css";

export default function DailyCards() {
  const [data, setData] = useState<DailyEnergyAverage[] | null>(null);

  useEffect(() => { 
    async function fetchData() {
      const result = await getPrognosis();
      setData(result);
    }
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Title title="Energy Mix Forecast" />
      <div className="daily-cards-grid">
        {data?.map((day) => (
          <DailyCard key={day.date.toISOString()} data={day} />
        ))}
      </div>
    </>
  );
}
