import React from "react";
import { shallow } from "enzyme";
import TodoList from "../TodoList";
import Todo from "../Todo";

describe("TodoList component", () => {
  let container;
  const todos = [
    {
      id: "1",
      task: "write unit test",
      done: false,
    },
  ];
  const mockFunction = jest.fn();

  beforeEach(() => {
    container = shallow(
      <TodoList
        todos={todos}
        removeTodo={mockFunction}
        toggleComplete={mockFunction}
      />
    );
  });

  it("should render a <ul /> without crashing", () => {
    expect(container.find("ul").length).toEqual(1);
  });

  it("should render the Todo Component", () => {
    expect(container.containsMatchingElement(<Todo />)).toEqual(true);
  });
});
