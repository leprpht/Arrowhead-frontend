import { useEffect, useState } from "react";
import { getPrognosis } from "../../api/Api";
import { DailyCard } from "../DailyCard/DailyCard";
import type { DailyEnergyAverage } from "../../types/DailyEnergyAverage";

export default function DailyCards() {
  const [data, setData] = useState<DailyEnergyAverage[] | null>(null);

  useEffect(() => { 
    async function fetchData() {
      const result = await getPrognosis();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <>
      {data?.map((day) => (
        <DailyCard key={day.date.toISOString()} data={day} />
      ))}
    </>
  );
}
