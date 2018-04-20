import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
});

describe("Header", () => {
  it("renders a title", () => {
    const title = "Notes";
    const wrapper = mount(<Header title={title} />);
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toBe(title);
  });
});
