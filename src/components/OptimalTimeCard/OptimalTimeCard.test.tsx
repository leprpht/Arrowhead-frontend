import { render, screen } from "@testing-library/react";
import OptimalTimeCard from "./OptimalTimeCard";

describe("OptimalTimeCard", () => {
  it("renders the title", () => {
    render(<OptimalTimeCard />);
    expect(screen.getByText(/Optimal Charging Time/i)).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<OptimalTimeCard />);
    expect(
      screen.getByText(/Enter the charging duration in hours/i)
    ).toBeInTheDocument();
  });

  it("renders the input and button", () => {
    render(<OptimalTimeCard />);
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
