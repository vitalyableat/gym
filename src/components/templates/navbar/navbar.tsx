import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import * as S from './navbar.styles';
import { NAVBAR_LINKS } from './navbar.constants';
import { userService } from '../../../services/user';
import { observer } from 'mobx-react-lite';
import { Loader } from '../../ui';
import { Logo } from './navbar.styles';

export const Navbar: FC = observer(() => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userService.getUser().finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <S.Navbar>
        <S.Logo>{'IL<KA>GYM'}</S.Logo>
        {NAVBAR_LINKS.map(({ name, link }) => (
          <S.StyledLink key={name} to={link} selected={pathname === link}>
            {name}
          </S.StyledLink>
        ))}
      </S.Navbar>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
});
