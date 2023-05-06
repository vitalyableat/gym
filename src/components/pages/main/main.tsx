import { FC } from 'react';
import { PageWrap, Button } from '../../ui';
import * as S from './main.styles';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';

export const Main: FC = () => {
  const navigate = useNavigate();
  const videoId = 'Yko3GMseY40';
  return (
    <PageWrap padding="0">
      <S.Wrap>
        <iframe
          onClick={(e) => e.preventDefault()}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}`}
        />
      </S.Wrap>
      <S.FakeWrap />
      <S.Logo>{'IL<KA>GUM'}</S.Logo>
      <S.ButtonWrap>
        <Button onClick={() => navigate(RouteNames.WORKOUTS)}>Записаться на тренировку</Button>
      </S.ButtonWrap>
    </PageWrap>
  );
};
