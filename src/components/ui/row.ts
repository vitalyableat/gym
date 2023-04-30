import styled from 'styled-components';

export const Row = styled.div<{ gap?: string }>`
  display: flex;
  width: 100%;
  gap: ${({ gap }) => gap};
`;
