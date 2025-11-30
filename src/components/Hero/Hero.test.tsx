import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the title", () => {
    render(<Hero />);
    expect(screen.getByText(/Arrowhead/i)).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Get the UK's energy mix forecast/i)
    ).toBeInTheDocument();
  });
});
