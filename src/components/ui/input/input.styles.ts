import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 150px;
  position: relative;
`;

export const Input = styled.input<{ isError: boolean; hasIcon?: boolean }>`
  padding: ${({ hasIcon }) => `10px 10px 10px ${hasIcon ? 40 : 10}px`};
  outline: ${({ isError }) => `1px solid ${isError ? 'darkred' : '#dadada'}`};
  height: 40px;

  :hover,
  :focus {
    outline: ${({ isError }) => `1px solid ${isError ? 'darkred' : '#434344'}`};
  }
`;

export const Error = styled.div`
  text-align: left;
  padding: 0 5px;
  color: darkred;
  font-size: 12px;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`;
