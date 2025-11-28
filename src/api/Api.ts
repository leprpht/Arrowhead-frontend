import type { ChargingTime } from '../types/ChargingTime';

export async function getChargingTime(hours: number): Promise<ChargingTime> {
  const response = await fetch(`http://localhost:8080/api/chargingTime?hours=${hours}`);
  const data = await response.json();
  return { from: new Date(data.from), to: new Date(data.to), perc: data.perc };
}
