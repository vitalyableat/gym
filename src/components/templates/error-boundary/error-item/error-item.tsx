import { FC, PropsWithChildren, useEffect } from 'react';
import * as S from './error-item.styles';
import { CloseIcon } from '../../../ui/icons';
import { errorService } from '../../../../services/error';
import { ErrorItemProps } from './error-item.types';

export const ErrorItem: FC<PropsWithChildren<ErrorItemProps>> = ({ children, id }) => {
  useEffect(() => {
    const timeout = setTimeout(() => errorService.removeError(id), 5000);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <S.Wrap>
      <CloseIcon width="15px" onClick={() => errorService.removeError(id)} />
      {children}
    </S.Wrap>
  );
};
