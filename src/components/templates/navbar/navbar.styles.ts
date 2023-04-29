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

  div:first-child {
    flex-grow: 1;
  }
`;

export const StyledLink = styled(Link)<{ selected: boolean }>`
  text-decoration: none;
  line-height: 20px;
  color: ${({ selected }) => (selected ? '#6666ee' : '#4242aa')};
  white-space: nowrap;

  :hover {
    text-decoration: underline;
  }
`;
