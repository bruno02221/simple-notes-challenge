import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import NoteList from "./NoteList";
import Note from "./Note";

Enzyme.configure({
  adapter: new EnzymeReactAdapter()
});

describe("NoteList", () => {
  it("renders the list of notes", () => {
    const notes = [
      { id: 1, title: "One", date: new Date("1988/02/20") },
      { id: 2, title: "Two", date: new Date("1988/02/22") },
      { id: 3, title: "Three", date: new Date("2018/04/20") }
    ];
    const wrapper = shallow(<NoteList notes={notes} />);
    expect(wrapper.find(Note).length).toBe(notes.length);

    wrapper.find(Note).forEach((noteElement, i) => {
      expect(noteElement.prop("note")).toEqual(notes[i]);
    });
  });
});
