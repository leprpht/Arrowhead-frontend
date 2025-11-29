import type { DailyEnergyAverage } from "../../types/DailyEnergyAverage";
import { capitalize } from "../../util/util";
import "./DailyCard.css";
import leaf from "../../assets/leaf.svg"

type Props = {
  data: DailyEnergyAverage;
};

export function DailyCard({ data }: Props) {
  return (
    <div className="daily-card">
      <h3 className="daily-card__date">{data.date.toDateString()}</h3>
      <ul className="daily-card__list">
        {data.averages.map((mix, index) => (
        <li key={index} className="daily-card__item">
          <span className="daily-card__fuel">{capitalize(mix.fuel)}</span>
          <span className="daily-card__perc">{mix.perc.toFixed(0)}%</span>
        </li>
      ))}
      </ul>
      <div className="daily-card__footer">
        <img src={leaf} height={25} />
        <h4 className="daily-card__clean">Total clean energy: {data.totalCleanPerc.toFixed(0)}%</h4>
      </div>
    </div>
  );
}
