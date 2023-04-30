import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import * as S from './navbar.styles';
import { GUEST_LINKS, NAVBAR_LINKS } from './navbar.constants';
import { userService } from '../../../services/user';
import { Loader, Text } from '../../ui';
import { authService } from '../../../services/auth';

export const Navbar: FC = observer(() => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userService.getUser().finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <S.Navbar>
        <Text type="title" bold color="#336699">
          {'IL<KA>GYM'}
        </Text>
        {(userService.user$ ? NAVBAR_LINKS[userService.user$.role] : GUEST_LINKS).map(
          ({ name, link }) => (
            <S.StyledLink
              key={name}
              to={link}
              selected={pathname === link}
              onClick={() => name === 'Выйти' && authService.logout()}
            >
              {name}
            </S.StyledLink>
          )
        )}
      </S.Navbar>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
});
