import { useEffect, useState } from "react";
import { getPrognosis } from "../../api/Api";
import { DailyCard } from "../DailyCard/DailyCard";
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
    <div className="daily-cards-grid">
      {data?.map((day) => (
        <DailyCard key={day.date.toISOString()} data={day} />
      ))}
    </div>
  );
}
