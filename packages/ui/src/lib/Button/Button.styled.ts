import styled from 'styled-components';

import { ButtonStyledProps } from './Button.types';

export const Button = styled.button<ButtonStyledProps>`
  font-weight: 600;
  font-size: 14px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  background: #007bff;
  color: white;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background: #007bffc2;
  }
`;
