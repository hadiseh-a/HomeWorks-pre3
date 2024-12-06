import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LiveInput from "../components/5-LiveInput/LiveInput";
describe("test LiveInput component", () => {
  it('tests The component renders an input element with the placeholder "Enter a text". ', () => {
    render(<LiveInput />);
    expect(screen.getByPlaceholderText("Enter a text")).toBeInTheDocument();
  });
  it("tests The component renders an h2 element.", () => {
    render(<LiveInput />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  it("tests When a user types into the input element, the h2 element displays the entered text.", () => {
    render(<LiveInput />);
    fireEvent.change(screen.getByPlaceholderText("Enter a text"), {
      target: { value: "hey you" },
    });
    expect(screen.getByRole("heading").textContent).toBe("hey you");
  });
});
