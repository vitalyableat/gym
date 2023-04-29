import styled from 'styled-components';

export const Svg = styled.svg<{ width?: string }>`
  fill: none;
  stroke: #1d1d1f;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: ${({ width }) => width || '20px'};
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;
