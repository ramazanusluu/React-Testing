import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Emoji Lists Test", () => {
  let items;

  beforeEach(() => {
    render(<App />);
    items = screen.getAllByText(/Click to copy emoji/i)
  });
  test("Emoji listesi render edildimi", () => {
    expect(items.length).toEqual(20);
  })
});
