import approximatelyMatch from "./approximatelyMatch";

export function filteredNotes(notes, filter) {
  if (filter) {
    return notes.filter(note =>
      approximatelyMatch(note.title.toLowerCase(), filter.toLowerCase())
    );
  }
  return notes;
}
