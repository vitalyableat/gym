import { FC, PropsWithChildren, useEffect } from 'react';
import { GrFormClose } from 'react-icons/gr';
import * as S from './error-item.styles';
import { errorService } from '../../../../services/error';
import { ErrorItemProps } from './error-item.types';

export const ErrorItem: FC<PropsWithChildren<ErrorItemProps>> = ({ children, id }) => {
  useEffect(() => {
    const timeout = setTimeout(() => errorService.removeError(id), 5000);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <S.Wrap>
      <S.IconWrap onClick={() => errorService.removeError(id)}>
        <GrFormClose />
      </S.IconWrap>
      {children}
    </S.Wrap>
  );
};
