import styled from 'styled-components';

export const StyledRefreshButton = styled.button`
  border: 1px solid #2b2b36;
  border-radius: 4px;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  transition: box-shadow 0.3s ease;

  &:active {
    background-color: steelblue;
    color: white;
    border-color: steelblue;
  }

  &:hover {
    box-shadow: 0px 0px 8px 1px rgba(70, 130, 180, 0.6);
  }
`;
