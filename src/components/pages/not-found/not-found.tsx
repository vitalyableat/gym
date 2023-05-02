import { FC } from 'react';
import * as S from './not-found.styles';
import notfound from '../../../assets/403_forbd.jpg';

export const NotFound: FC = () => {
  return (
    <S.Wrap>
      <S.Image src={notfound} />
    </S.Wrap>
  );
};
