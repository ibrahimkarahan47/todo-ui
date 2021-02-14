import React from "react";
import { shallow } from "enzyme";
import TodoList from "../TodoList";

describe("TodoList component", () => {
  let container;

  beforeEach(() => {
    container = shallow(<TodoList />);
  });

  it("should render a <ul /> without crashing", () => {
    expect(container.find("ul").length).toEqual(1);
  });
});
