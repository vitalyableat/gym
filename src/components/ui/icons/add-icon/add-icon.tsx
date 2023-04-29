import { FC } from 'react';
import * as S from './add-icon.styles';
import { AddIconProps } from './add-icon.types';

export const AddIcon: FC<AddIconProps> = ({ onClick, color, width, margin }) => {
  return (
    <S.Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      onClick={onClick}
      color={color}
      width={width}
      margin={margin}
    >
      <path d="M17 2V32M2 17H32" />
    </S.Svg>
  );
};
