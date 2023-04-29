import styled from 'styled-components';

export const Svg = styled.svg<{ width?: string }>`
  fill: #dadada;
  stroke: #1d1d1f;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: ${({ width }) => width || '20px'};
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 5px;
`;
