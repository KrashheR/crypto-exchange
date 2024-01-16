import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  background-color: ${(props) => (props.$active ? 'steelblue' : 'white')};
  color: ${(props) => (props.$active ? 'white' : '#2B2B36')};
  border: 1px solid #2b2b36;
  border-color: ${(props) => (props.$active ? 'steelblue' : '#2B2B36')};
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  transition:
    background-color,
    box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 8px 1px rgba(70, 130, 180, 0.6);
  }
`;

export const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
