import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

test("App renders correctly before fetching data", () => {
  const { getByText } = render(<App />);
  getByText(/fetching data/i);
});
