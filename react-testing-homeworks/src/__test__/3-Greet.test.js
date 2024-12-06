import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greet from "../components/3-Greet/Greet";
describe("test Greet component", () => {
  test("testing with no prop", () => {
    render(<Greet />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
  test("testing with prop",()=>{
    render(<Greet name={"hadiseh"}/>)
    expect(screen.getByText("hello hadiseh")).toBeInTheDocument();
  })
});
