import React from "react";
import { shallow } from "enzyme";
import Todo from "../Todo";

describe("Todo component", () => {
  let container;
  const todo = {
    id: "1",
    task: "write unit test",
    done: false,
  };
  const buttonText = "X";
  const mockFunction = jest.fn();

  beforeEach(() => {
    container = shallow(
      <Todo todo={todo} removeTodo={mockFunction} toggleDone={mockFunction} />
    );
  });

  it("should render a <div /> without crashing", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should return <input> with type checkbox", () => {
    expect(container.find("input").length).toEqual(1);
  });

  it("should return <li> with todo task text", () => {
    expect(container.find("li").text()).toBe(todo.task);
  });

  it("should render <button> with required text", () => {
    expect(container.find("button").text()).toBe(buttonText);
  });

  it("should button clicked", () => {
    container.find("button").simulate("click");
    expect(mockFunction.mock.calls.length).toBe(1);
  });

  it("should checkbox clicked", () => {
    container.find("input").simulate("click");
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
