import styled from 'styled-components';

export const Wrap = styled.div`
  width: 300px;
  border-radius: 5px;
  padding: 20px;
  outline: 1px solid #dadada;
  position: relative;
  text-align: center;
  background-color: #fff;

  :hover {
    outline: 1px solid #1d1d1f;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
