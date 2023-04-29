import { FC, forwardRef } from 'react';
import * as S from './select.styles';
import { SelectProps } from './select.types';

export const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, ...props }, ref) => {
    return (
      <S.Wrap>
        <S.Select {...props} ref={ref} id={label} />
        <S.Label htmlFor={label}>{label}</S.Label>
      </S.Wrap>
    );
  }
);

Select.displayName = 'Select';
