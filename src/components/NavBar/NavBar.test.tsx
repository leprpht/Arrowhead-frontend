import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders the logo image", () => {
    render(<NavBar />);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });

  it("renders the brand title", () => {
    render(<NavBar />);
    expect(screen.getByText(/Arrowhead/i)).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<NavBar />);
    
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Charging/i })).toBeInTheDocument();
  });

  it("has correct link hrefs", () => {
    render(<NavBar />);

    expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute("href", "#home");
    expect(screen.getByRole("link", { name: /Dashboard/i })).toHaveAttribute("href", "#dashboard");
    expect(screen.getByRole("link", { name: /Charging/i })).toHaveAttribute("href", "#charging");
  });
});
