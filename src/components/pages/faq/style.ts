import styled from 'styled-components';

export const Style = styled.div`
  height: 180px;
  min-width: 300px;
  background-color: #bbddff;
  outline: 2px solid #1d1d1f;
  position: relative;
  color: #000;
  cursor: pointer;
  user-select: none;
  transition: 100ms ease-in-out transform;

  :hover {
    transform: scale(103%);
  }
`;

export const Number = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 70px;
`;

export const Owner = styled.div`
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

export const ValidThru = styled.div`
  font-size: 10px;
  position: absolute;
  top: 110px;
  right: 70px;
  width: 40px;
`;

export const Date = styled.div`
  font-size: 20px;
  position: absolute;
  top: 110px;
  right: 20px;
`;
