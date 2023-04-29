import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  min-width: 150px;
  position: relative;
`;

export const Label = styled.label`
  color: #434344;
  border-radius: 5px;
  position: absolute;
  background-color: #fff;
  padding: 0 5px;
  font-size: 12px;
  top: -10px;
  left: 10px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  outline: 1px solid #dadada;

  :hover,
  :focus {
    outline: 1px solid #434344;
  }
`;
