import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("renders the given title text", () => {
    render(<Title title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
