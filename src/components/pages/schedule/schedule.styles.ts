import styled from 'styled-components';

export const Schedule = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: calc(100vw - 17px);
  left: 0;
  top: 200px;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dadada;
    border-radius: 5px;

    :hover {
      background-color: #434344;
    }
  }
`;

export const TimeLine = styled.div`
  margin-top: 50px;
  min-width: 50px;
  display: flex;
  flex-direction: column;
`;

export const Time = styled.div`
  max-width: 50px;
  min-height: 120px;
  display: flex;
  align-items: center;
  background-color: #bbddff;
  border: 1px solid #434343;
  padding: 30px 15px 15px;

  > div {
    transform: rotate(-90deg);
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
`;

export const DayDate = styled.div`
  width: 300px;
  text-align: center;
  padding: 15px;
  font-weight: bold;
  height: 50px;
  background-color: #bbddff;
  border: 1px solid #434343;
`;

export const DayColumn = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #434343;
`;

export const ScheduleWorkout = styled.div<{ time: number }>`
  width: 100%;
  background-color: #bbddff;
  padding: 15px 20px;
  border-top: 1px solid #434343;
  border-bottom: 1px solid #434343;
  gap: 10px;
  display: flex;
  flex-direction: column;
  height: 120px;
  position: absolute;
  top: ${({ time }) => `calc(50px + 120px * ${time - 9})`};
`;
