import React from "react";
import Note from "./Note";
import styled from "styled-components";

const NoteList = ({ notes }) => {
  return (
    <List>
      {notes.map(note => {
        return (
          <Item key={note.id}>
            <Note key={note.id} note={note} />
          </Item>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  margin: 16px 0;
  &:first-child {
    margin: 0;
  }
`;

export default NoteList;
