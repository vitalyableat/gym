import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(29, 29, 31, 0.5);
  z-index: 1;
`;

export const Content = styled.div`
  background-color: #bbddff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 10px;
`;
