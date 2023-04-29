import { FC, forwardRef, useId } from 'react';
import * as S from './input.styles';
import { InputProps } from './input.types';

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ error, Icon, ...props }, ref) => {
    const id = useId();
    return (
      <S.Wrap>
        <S.Input {...props} ref={ref} isError={!!error} id={id} hasIcon={!!Icon} />
        <S.IconWrap>{Icon}</S.IconWrap>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrap>
    );
  }
);

Input.displayName = 'Input';
