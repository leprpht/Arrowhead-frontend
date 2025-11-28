import type { DailyEnergyAverage } from "../../types/DailyEnergyAverage";

type Props = {
  data: DailyEnergyAverage;
};

export function DailyCard({ data }: Props) {
  return (
    <div>
      <h3>{data.date.toDateString()}</h3>
      <ul>
        {data.averages.map((mix, index) => (
          <li key={index}>
            {mix.fuel}: {mix.perc.toFixed(0)}%
          </li>
        ))}
      </ul>
    </div>
  );
}
