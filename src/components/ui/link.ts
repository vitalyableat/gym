import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: #dadada;
  transition: 0.5s ease-in-out color;

  :hover {
    color: #fff;
    cursor: pointer;
  }
`;
