import styled from 'styled-components';

export const Grid = styled.div<{ gap?: string; gridTemplateColumns?: string }>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  gap: ${({ gap }) => gap};
  justify-content: center;
`;
