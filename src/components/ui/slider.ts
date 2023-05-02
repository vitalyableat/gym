import styled from 'styled-components';

export const Slider = styled.div`
  width: auto;
  max-width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  overflow-x: scroll;
  background-color: #f2f8ff;

  ::-webkit-scrollbar {
    display: none;
  }
`;
