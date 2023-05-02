import styled from 'styled-components';

export const Row = styled.div<{ gap?: string; center?: boolean }>`
  display: flex;
  width: 100%;
  gap: ${({ gap }) => gap};
  justify-content: ${({ center }) => center && 'center'};
`;
