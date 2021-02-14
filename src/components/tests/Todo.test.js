import React from "react";
import { shallow } from "enzyme";
import Todo from "../Todo";

describe("Todo component", () => {
  let container;

  beforeEach(() => {
    container = shallow(<Todo />);
  });

  it("should render a <div /> without crashing", () => {
    expect(container.find("div").length).toEqual(1);
  });
});
