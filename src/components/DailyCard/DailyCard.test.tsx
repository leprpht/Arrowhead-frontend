import { render, screen } from "@testing-library/react";
import { DailyCard } from "./DailyCard";
import type { DailyEnergyAverage } from "../../types/DailyEnergyAverage";

const mockData: DailyEnergyAverage = {
  date: new Date(),
  averages: [
    { fuel: "biomass", perc: "10" },
    { fuel: "coal", perc: "20" },
    { fuel: "gas", perc: "30" },
    { fuel: "hydro", perc: "40.44" },
    { fuel: "imports", perc: "50.55" },
    { fuel: "nuclear", perc: "60" },
    { fuel: "other", perc: "70" },
    { fuel: "solar", perc: "80" },
    { fuel: "wind", perc: "90" },
  ],
  totalCleanPerc: "100",
};

describe("DailyCard", () => {
  it("renders the date", () => {
    render(<DailyCard data={mockData} />);
    expect(screen.getByText(mockData.date.toDateString())).toBeInTheDocument();
  });

  it("renders fuel names capitalized", () => {
    render(<DailyCard data={mockData} />);
    expect(screen.getByText("Biomass")).toBeInTheDocument();
    expect(screen.getByText("Coal")).toBeInTheDocument();
    expect(screen.getByText("Gas")).toBeInTheDocument();
    expect(screen.getByText("Hydro")).toBeInTheDocument();
    expect(screen.getByText("Imports")).toBeInTheDocument();
    expect(screen.getByText("Nuclear")).toBeInTheDocument();
    expect(screen.getByText("Other")).toBeInTheDocument();
    expect(screen.getByText("Solar")).toBeInTheDocument();
    expect(screen.getByText("Wind")).toBeInTheDocument();
  });

  it("renders formatted percentages", () => {
    render(<DailyCard data={mockData} />);
    expect(screen.getByText("10%")).toBeInTheDocument();
    expect(screen.getByText("20%")).toBeInTheDocument();
    expect(screen.getByText("30%")).toBeInTheDocument();
    expect(screen.getByText("40.4%")).toBeInTheDocument();
    expect(screen.getByText("50.6%")).toBeInTheDocument();
    expect(screen.getByText("60%")).toBeInTheDocument();
    expect(screen.getByText("70%")).toBeInTheDocument();
    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("90%")).toBeInTheDocument();
  });

  it("renders total clean energy", () => {
    render(<DailyCard data={mockData} />);
    expect(
      screen.getByText(/Total clean energy: 100%/i)
    ).toBeInTheDocument();
  });
});
