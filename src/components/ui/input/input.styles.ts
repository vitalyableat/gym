import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  min-width: 150px;
  position: relative;
`;

export const Label = styled.label<{ isError: boolean; isEmpty: boolean }>`
  color: ${({ isError }) => (isError ? 'darkred' : '#434344')};
  border-radius: 5px;
  position: absolute;
  background-color: #fff;
  padding: 0 5px;
  transition: 0.2s ease-in-out all;

  font-size: ${({ isEmpty }) => isEmpty && '12px'};
  top: ${({ isEmpty }) => (isEmpty ? '-10px' : '10px')};
  left: ${({ isEmpty }) => (isEmpty ? '10px' : '12px')};
`;

export const Input = styled.input<{ isError: boolean }>`
  padding: 10px;
  border-radius: 5px;
  outline: ${({ isError }) => `1px solid ${isError ? 'darkred' : '#dadada'}`};
  height: 39.2px;

  :hover,
  :focus {
    outline: ${({ isError }) => `1px solid ${isError ? 'darkred' : '#434344'}`};
  }

  &:focus ~ ${Label} {
    top: -10px;
    font-size: 12px;
    padding: 0 5px;
    left: 10px;
  }
`;

export const Error = styled.div`
  text-align: left;
  padding: 0 5px;
  color: darkred;
  font-size: 12px;
`;
