import { fireEvent, render, screen } from "@testing-library/react";
import TodoContainer from "../components/6-TodoApp/TodoContainer";
import "@testing-library/jest-dom";
describe("test TodoApp", () => {
  it("test When the form is submitted once with a todo item, a single `<li>` element with the todo text is rendered.", () => {
    render(<TodoContainer />);
    fireEvent.change(screen.getByPlaceholderText("write a todo"), {
      target: { value: "doing laundry" },
    });
    fireEvent.submit(screen.getByTestId("todo-form"));
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
  it("tests When the form is submitted multiple times with different todo items, all the todo items are rendered as `<li>` elements in the list.", () => {
    render(<TodoContainer />);
    const input = screen.getByPlaceholderText("write a todo");
    fireEvent.change(input, { target: { value: "doing laundry" } });
    fireEvent.submit(screen.getByTestId("todo-form"));

    fireEvent.change(input, { target: { value: "doing the dishes" } });
    fireEvent.submit(screen.getByTestId("todo-form"));

    fireEvent.change(input, { target: { value: "doing homeworks" } });
    fireEvent.submit(screen.getByTestId("todo-form"));
    
    const list = screen.getAllByRole("listitem");
    expect(list.length).toBe(3);
  });
});
