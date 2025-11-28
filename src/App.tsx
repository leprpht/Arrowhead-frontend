import { useState, useEffect } from 'react'
import { getChargingTime } from './api/Api'
import type { ChargingTime } from './types/ChargingTime';
import './App.css'

function App() {
  const [chargingTime, setChargingTime] = useState<ChargingTime | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getChargingTime(3);
      setChargingTime(data);
    }
    fetchData();
  }, []);

  if (!chargingTime) return <div>Loading...</div>;

  return (
    <>
      <p>{chargingTime?.from.toLocaleString()}</p>
      <p>{chargingTime?.to.toLocaleString()}</p>
      <p>{chargingTime?.perc}%</p>
    </>
  )
}

export default App
