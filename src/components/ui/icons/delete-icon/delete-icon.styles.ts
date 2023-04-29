import styled from 'styled-components';

export const Svg = styled.svg<{ width: string; marginTop?: string }>`
  fill: none;
  stroke: #434344;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: pointer;
  height: ${({ marginTop, width }) => marginTop && width};
  width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  margin-top: ${({ marginTop }) => marginTop};
`;
