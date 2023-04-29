import { FC, PropsWithChildren } from 'react';
import * as S from './error-boundary.styles';
import { ErrorItem } from './error-item';
import { errorService } from '../../../services/error';
import { observer } from 'mobx-react-lite';

export const ErrorBoundary: FC<PropsWithChildren> = observer(({ children }) => {
  return (
    <S.Wrap>
      <S.ErrorContainer>
        {errorService.errors$.map(({ id, message }) => (
          <ErrorItem key={id} id={id}>
            {message}
          </ErrorItem>
        ))}
      </S.ErrorContainer>
      {children}
    </S.Wrap>
  );
});
