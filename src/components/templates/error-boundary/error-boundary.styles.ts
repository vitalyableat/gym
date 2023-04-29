import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const ErrorContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  z-index: 2;
`;
