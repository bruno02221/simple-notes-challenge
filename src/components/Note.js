import React from "react";
import moment from "moment";
import styled from "styled-components";

const Note = ({ note }) => {
  return (
    <Root>
      <Title>{note.title}</Title>
      <Date>{moment(note.date).format("DD-MM-YYYY")}</Date>
    </Root>
  );
};

const Root = styled.div`
  background: var(--color-white);
  color: var(--color-gray);
  padding: 16px 32px;
  border-radius: var(--border-radius);
`;

const Title = styled.h1`
  color: var(--color-gray);
  font-size: calc(var(--font-size) * 1.35);
  font-weight: 400;
`;

const Date = styled.h3`
  color: var(--color-gray-light);
  font-size: calc(var(--font-size) * 1.15);
  font-weight: 400;
  margin-top: 4px;
`;

export default Note;
