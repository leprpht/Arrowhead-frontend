/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ChargingTime } from '../types/ChargingTime';
import type { DailyEnergyAverage } from '../types/DailyEnergyAverage';

export async function getPrognosis(): Promise<DailyEnergyAverage[]> {
  const response = await fetch('http://localhost:8080/api/prognosis');
  const data = await response.json();
  return data.map((item: any) => ({
    date: new Date(item.date),
    averages: item.averages,
  }));
}

export async function getOptimalChargingTime(hours: number): Promise<ChargingTime> {
  const response = await fetch(`http://localhost:8080/api/chargingTime?hours=${hours}`);
  const data = await response.json();
  return { from: new Date(data.from), to: new Date(data.to), perc: data.perc };
}
