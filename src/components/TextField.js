import styled from "styled-components";

const TextField = styled.input`
  height: 48px;
  line-height: 48px;
  padding: 0 16px;
  border: 0;
  font-weight: 400;
  font-size: calc(var(--font-size) * 1.5);
  &::placeholder {
    color: var(--color-gray-lighter);
  }
`;

export default TextField;
