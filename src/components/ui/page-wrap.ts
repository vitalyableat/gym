import styled from 'styled-components';

export const PageWrap = styled.div<{ alignItems?: string; padding?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding || '30px 80px'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  gap: 20px;
  min-width: 900px;
`;
