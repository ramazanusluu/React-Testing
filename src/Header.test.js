import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Tests", () => {
  let text;

  beforeEach(() => {
    render(<Header />);
    text = screen.getByText(/Emoji Search/i);
  });
  
  test("Başlık kısmı render edildi mi", () => {
    expect(text).toBeInTheDocument();
  });
});
