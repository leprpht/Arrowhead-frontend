import { useState, useEffect } from 'react'
import { getPrognosis, getOptimalChargingTime } from './api/Api'
import type { ChargingTime } from './types/ChargingTime';
import type { DailyEnergyAverage } from './types/DailyEnergyAverage';
import './App.css'

function App() {
  const [chargingTime, setChargingTime] = useState<ChargingTime | null>(null);
  const [prognosis, setPrognosis] = useState<DailyEnergyAverage[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const chargingTime = await getOptimalChargingTime(3);
      setChargingTime(chargingTime);

      const prognosisData = await getPrognosis();
      setPrognosis(prognosisData);
    }
    fetchData();
  }, []);

  if (!chargingTime) return <div>Loading...</div>;

  return (
    <>
      <div>
        <p>{chargingTime?.from.toLocaleString()}</p>
        <p>{chargingTime?.to.toLocaleString()}</p>
        <p>{chargingTime?.perc}%</p>
      </div>
      <div>
        {prognosis?.map(day => (
          <div>
            <p>{day.date.toDateString()}</p>
            <ul>
              {day.averages.map(mix => (
                <li>{mix.fuel}: {mix.perc}%</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
