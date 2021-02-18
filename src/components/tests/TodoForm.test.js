import React from "react";
import { shallow } from "enzyme";

import TodoForm from "../TodoForm";

describe("TodoForm component", () => {
  let container;
  const mockFunction = jest.fn();

  beforeEach(() => {
    container = shallow(<TodoForm addTodo={mockFunction} />);
  });

  it("should render a <form /> without crashing", () => {
    expect(container.find("form").length).toEqual(1);
  });

  it("should render <input/> and <buton/>", () => {
    expect(container.find("input").length).toEqual(1);
    expect(container.find("button").text()).toEqual("Add");
  });

  it("should change value of todo task when input changes", () => {
    let taskInput = container.find("input");
    taskInput.simulate("change", {
      target: {
        value: "write unit test",
      },
    });
    taskInput = container.find("input");
    expect(taskInput.props().value).toBe("write unit test");
    container.find("form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
