import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileLink = styled(Link)`
  font-size: 32px;
  color: #4242aa;
  text-align: center;
  font-weight: bold;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
