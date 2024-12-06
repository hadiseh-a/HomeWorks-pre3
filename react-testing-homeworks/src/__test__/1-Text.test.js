/* eslint-disable no-undef */

import { screen, render } from "@testing-library/react";
import Text from "../components/1-Text/Text";
import "@testing-library/jest-dom";
describe("testing Text component", () => {
  test("test render p", () => {
    render(<Text />);
    expect(screen.getByText("Welcome To APS")).toBeInTheDocument();
  });
  test("test prop", () => {
    render(<Text headingText={"hey"} />);
    expect(screen.getByRole("heading").textContent).toBe("hey");
  });
});
