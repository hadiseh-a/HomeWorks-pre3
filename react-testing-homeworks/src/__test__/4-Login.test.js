import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../components/4-Login/Login";
describe("test Login component", () => {
  it("testing render a button", () => {
    render(<Login />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("tests The button displays login as its initial text.",()=>{
    render(<Login/>)
    expect(screen.getByRole("button").textContent).toBe("login")
  })
  it("tests The button text changes to logout when clicked.",()=>{
    render(<Login/>)
    fireEvent.click(screen.getByRole("button"))
    expect(screen.getByRole("button").textContent).toBe("logout")
  })
});
