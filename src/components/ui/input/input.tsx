import { FC, forwardRef, KeyboardEventHandler, useId } from 'react';
import * as S from './input.styles';
import { InputProps } from './input.types';
import { englishLetterValidator, integerValidator, letterValidator, priceValidator } from './utils';

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ error, Icon, validator, ...props }, ref) => {
    const id = useId();

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      switch (validator) {
        case 'price':
          return priceValidator(event);
        case 'integer':
          return integerValidator(event);
        case 'text':
          return letterValidator(event);
        case 'english':
          return englishLetterValidator(event);
        default:
          return undefined;
      }
    };

    return (
      <S.Wrap>
        <S.Input
          {...props}
          ref={ref}
          isError={!!error}
          id={id}
          hasIcon={!!Icon}
          onKeyDown={onKeyDown}
        />
        <S.IconWrap>{Icon}</S.IconWrap>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrap>
    );
  }
);

Input.displayName = 'Input';
