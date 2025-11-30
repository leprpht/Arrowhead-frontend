import { render, screen } from "@testing-library/react";
import DailyCards from "./DailyCards";
import * as Api from "../../api/Api";
import type { DailyEnergyAverage } from "../../types/DailyEnergyAverage";

jest.mock("../DailyCard/DailyCard", () => ({
  DailyCard: ({ data }: { data: DailyEnergyAverage }) => (
    <div data-testid="daily-card">{data.totalCleanPerc}</div>
  ),
}));

jest.spyOn(Api, "getPrognosis").mockResolvedValue([
  {
    date: new Date(),
    averages: [
      { fuel: "biomass", perc: "10%" },
      { fuel: "coal", perc: "20%" },
      { fuel: "gas", perc: "30%" },
      { fuel: "hydro", perc: "40%" },
      { fuel: "imports", perc: "50%" },
      { fuel: "nuclear", perc: "60%" },
      { fuel: "other", perc: "70%" },
      { fuel: "solar", perc: "80%" },
      { fuel: "wind", perc: "90%" },
    ],
    totalCleanPerc: "100%",
  },
]);

describe("DailyCards", () => {
  it("renders the title", () => {
    render(<DailyCards />);
    expect(screen.getByText(/Energy Mix Forecast/i)).toBeInTheDocument();
  });

  it("renders 3 daily cards (placeholder or fetched)", async () => {
    render(<DailyCards />);
    const cards = await screen.findAllByTestId("daily-card");
    expect(cards.length).toBe(3);
  });
});
