import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
