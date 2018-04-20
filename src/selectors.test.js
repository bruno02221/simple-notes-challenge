import * as selectors from "./selectors";

describe("selectors", () => {
  describe("filteredNotes", () => {
    it("returns the full notes list when filter is undefined", () => {
      const notes = [
        { title: "One" },
        { title: "Two" },
        { title: "Three" },
        { title: "Four" }
      ];
      const filter = null;
      expect(selectors.filteredNotes(notes, filter)).toEqual(notes);
    });

    it("returns the full notes list when filter is empty", () => {
      const notes = [
        { title: "One" },
        { title: "Two" },
        { title: "Three" },
        { title: "Four" }
      ];
      const filter = null;
      expect(selectors.filteredNotes(notes, filter)).toEqual(notes);
    });

    it("returns the filtered list", () => {
      const notes = [
        { title: "One" },
        { title: "Two" },
        { title: "Three" },
        { title: "Four" }
      ];
      const filter = "T";
      expect(selectors.filteredNotes(notes, filter)).toEqual([
        { title: "Two" },
        { title: "Three" }
      ]);
    });

    it("ignores case", () => {
      const notes = [
        { title: "One" },
        { title: "Two" },
        { title: "Three" },
        { title: "Four" }
      ];
      const filter = "o";
      expect(selectors.filteredNotes(notes, filter)).toEqual([
        { title: "One" },
        { title: "Two" },
        { title: "Four" }
      ]);
    });
  });
});
