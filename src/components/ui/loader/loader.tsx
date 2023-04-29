import { FC } from 'react';
import * as S from './loader.styles';

export const Loader: FC = () => {
  return (
    <S.Wrap>
      <S.Loader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </S.Loader>
    </S.Wrap>
  );
};
