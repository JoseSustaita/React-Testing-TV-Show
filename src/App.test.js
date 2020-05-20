import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Dropdown from "react-dropdown";

test("App renders correctly", () => {
  const { getByText } = render(<App />);
  getByText(/fetching data/i);
});
test("Dropdown renders correctly", () => {
  const { getByText } = render(<Dropdown />);
  getByText("Select...");
});
