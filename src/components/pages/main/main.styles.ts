import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
`;

export const FakeWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 200px;
`;

export const Logo = styled.div`
  font-size: 60px;
  text-align: center;
  top: 100px;
  font-weight: bold;
  color: #aabbee;
  position: absolute;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  bottom: 30px;
`;
