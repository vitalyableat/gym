import { FC } from 'react';
import * as S from './edit-icon.styles';
import { EditIconProps } from './edit-icon.types';

export const EditIcon: FC<EditIconProps> = ({ onClick }) => {
  return (
    <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 34" onClick={onClick}>
      <path d="M16.5955 2.20085H5.64888C3.63366 2.20085 2 3.68324 2 5.51187V28.689C2 30.5177 3.63366 32 5.64888 32H31.191C33.2063 32 34.8399 30.5177 34.8399 28.689V18.7559" />
      <path d="M13.8589 16.2727L28.4544 3.0286C29.9657 1.65713 32.4163 1.65713 33.9277 3.0286C35.4391 4.40008 35.4391 6.62366 33.9277 7.99513L19.3322 21.2392L11.1222 23.7225L13.8589 16.2727Z" />
    </S.Svg>
  );
};
