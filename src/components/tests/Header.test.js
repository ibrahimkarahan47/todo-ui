import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header component", () => {
  let container;
  let text = "test";

  beforeEach(() => {
    container = shallow(<Header text={text} />);
  });

  it("should render a <div /> without crashing", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render text in <h1>", () => {
    expect(container.find("h1").text()).toEqual(text);
  });
});
