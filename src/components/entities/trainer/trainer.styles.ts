import styled from 'styled-components';

export const Trainer = styled.div`
  width: 500px;
  background-color: #bbddff;
  outline: 2px solid #434343;
  padding: 15px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const InfoIconWrap = styled.div`
  display: flex;
  justify-content: right;
  cursor: pointer;
`;

export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 80px);
  gap: 15px;
  margin: 10px 0 20px;
`;

export const Time = styled.div`
  outline: 2px solid #434343;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
