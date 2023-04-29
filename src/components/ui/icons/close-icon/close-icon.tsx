import { FC } from 'react';
import * as S from './close-icon.styles';
import { CloseIconProps } from './close-icon.types';

export const CloseIcon: FC<CloseIconProps> = ({ width, onClick }) => {
  return (
    <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={width} onClick={onClick}>
      <line x1="7" x2="25" y1="7" y2="25" />
      <line x1="7" x2="25" y1="25" y2="7" />
    </S.Svg>
  );
};
