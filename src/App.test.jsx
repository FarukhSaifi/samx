import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders SamX app", () => {
  render(<App />);
  // Check if the header navigation is present
  const headerElement = screen.getByRole("banner");
  expect(headerElement).toBeInTheDocument();

  // Check if the main content area is present
  const mainContent = screen.getByText(/Home/i);
  expect(mainContent).toBeInTheDocument();
});
