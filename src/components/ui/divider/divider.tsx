import { FC, PropsWithChildren } from 'react';
import * as S from './divider.styles';

export const Divider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.Wrap>
      {children ? (
        <>
          <S.Divider />
          {children}
          <S.Divider />
        </>
      ) : (
        <S.Divider />
      )}
    </S.Wrap>
  );
};
