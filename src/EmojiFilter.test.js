import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Emoji Filter Tests", () => {
  let input;
  beforeEach(() => {
    render(<App />);
    input = screen.getByText("100");
  });

  test("Filreleme işlemi sırasında filtreye uygun render", () => {
    expect(input).toBeInTheDocument("100");
  });
});
