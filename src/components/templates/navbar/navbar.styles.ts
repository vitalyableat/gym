import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 0 5px 2px #cccccc;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 20px 80px;
  gap: 20px;
`;

export const StyledLink = styled(Link)<{ selected: boolean }>`
  text-decoration: none;
  line-height: 20px;
  color: ${({ selected }) => (selected ? '#5083be' : '#41418d')};

  :hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  font-size: 32px;
  color: #1e5082;
  flex-grow: 1;
`;
