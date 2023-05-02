import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loader, PageWrap, Text } from '../../ui';
import { userService } from '../../../services/user';
import { User } from '../../entities/user';

export const Clients: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userService.getUsers().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" bold center color="#4242aa">
        Клиенты
      </Text>
      {userService.users$.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </PageWrap>
  );
});
