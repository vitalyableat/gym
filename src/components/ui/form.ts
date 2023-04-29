import styled from 'styled-components';

export const Form = styled.form<{ width?: string }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  align-items: center;
  min-width: 300px;
  width: ${({ width }) => (width ? width : '500px')};
  padding: 80px 30px;
  background-color: #f2f8ff;
`;
