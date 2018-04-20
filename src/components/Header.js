import React from "react";
import styled from "styled-components";

const Header = ({ title }) => (
  <Root>
    <Title>{title}</Title>
  </Root>
);

const Root = styled.header`
  background: var(--color-black);
  color: var(--color-white);
  font-size: calc(var(--font-size) * 1.6);
  font-weight: 400;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1``;

export default Header;
