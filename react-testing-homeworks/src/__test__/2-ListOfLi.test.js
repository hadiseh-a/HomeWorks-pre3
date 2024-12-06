import { render, screen } from "@testing-library/react";
import ListOfLi from "../components/2-ListOfLi/ListOfLi";
import "@testing-library/jest-dom";
test("testing length of array", () => {
  render(<ListOfLi usernames={["john", "sam", "jasem", "tom"]} />);
  const elements = screen.getAllByRole("listitem");
  expect(elements).toHaveLength(4);
});
