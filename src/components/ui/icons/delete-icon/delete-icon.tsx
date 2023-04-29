import { FC } from 'react';
import * as S from './delete-icon.styles';
import { DeleteIconProps } from './delete-icon.types';

export const DeleteIcon: FC<DeleteIconProps> = ({ onClick, marginTop, width = '20px' }) => {
  return (
    <S.Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 54"
      width={width}
      marginTop={marginTop}
      onClick={onClick}
    >
      <path d="M2 12H51M7.44444 12V47C7.44444 49.7615 9.882 52 12.8889 52H40.1111C43.1181 52 45.5556 49.7615 45.5556 47V12M15.6111 12V7C15.6111 4.23857 18.0487 2 21.0556 2H31.9444C34.9514 2 37.3889 4.23857 37.3889 7V12" />
      <path d="M31.9444 24.5V39.5" />
      <path d="M21.0556 24.5V39.5" />
    </S.Svg>
  );
};
