import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 10px;
  margin: 0;
`;

export const StyledLabel = styled.label`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ active }) =>
    active &&
    `
    background-color: steelblue;
    border-color: steelblue;
    color: white;
  `}
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
