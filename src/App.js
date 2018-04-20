import React from "react";
import Header from "./components/Header";
import TextField from "./components/TextField";
import NoteList from "./components/NoteList";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "./actions";
import * as selectors from "./selectors";

const App = ({ notes, filter, updateFilter }) => {
  const handleFilterChange = e => {
    updateFilter(e.target.value);
  };
  return (
    <Root>
      <Header title="Notes" />
      <Content>
        <TextField
          value={filter || ""}
          onChange={handleFilterChange}
          placeholder="Pesquise por uma nota"
        />
        <NotesTitle>Notas</NotesTitle>
        <NoteList notes={selectors.filteredNotes(notes, filter)} />
      </Content>
    </Root>
  );
};

const Root = styled.div``;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 540px;
  margin: 0 auto;
  padding: 16px;
  & > * {
    margin: 16px;
  }
`;

const NotesTitle = styled.h1`
  color: var(--color-gray-light);
  font-size: calc(var(--font-size) * 1.25);
  font-weight: 500;
`;

const mapStateToProps = state => ({
  notes: state.notes,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  updateFilter: filter => dispatch(actions.updateFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
