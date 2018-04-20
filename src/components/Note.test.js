import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import Note from "./Note";

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
});

describe("Note", () => {
  it("renders the note title", () => {
    const note = { title: "Title" };
    const wrapper = mount(<Note note={note} />);
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toBe(note.title);
  });

  it("renders the note date", () => {
    const note = { date: new Date("2018/04/20") };
    const wrapper = mount(<Note note={note} />);
    expect(wrapper.find("h3").length).toBe(1);
    expect(wrapper.find("h3").text()).toBe("20-04-2018");
  });
});
