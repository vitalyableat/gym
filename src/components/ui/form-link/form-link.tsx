import { FC } from 'react';
import * as S from './form-link.styles';
import { FormLinkProps } from './form-link.types';
import { useNavigate } from 'react-router-dom';

export const FormLink: FC<FormLinkProps> = ({ to, text, link }) => {
  const navigate = useNavigate();

  return (
    <S.Wrap>
      {text}
      <b onClick={() => navigate(to)}>{link}</b>
    </S.Wrap>
  );
};
