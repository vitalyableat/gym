import styled from 'styled-components';

interface TextProps {
  type?: 'title' | 'header' | 'info';
  bold?: boolean;
  color?: string;
}

export const Text = styled.div<TextProps>`
  font-size: ${({ type }) => (type === 'title' ? '32px' : type === 'header' ? '24px' : '16px')};
  font-weight: ${({ bold }) => bold && 'bold'};
  color: ${({ color }) => color};
`;
