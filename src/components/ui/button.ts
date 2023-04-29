import styled from 'styled-components';

export const Button = styled.button`
  background: #0071e3;
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  width: 300px;
  max-width: 100%;
  min-width: 150px;
  position: relative;
  min-height: 36px;

  :hover {
    cursor: pointer;
    background: #0080e3;
    box-shadow: inset 0 0 20px #0071e3;
  }
`;
