import styled from 'styled-components';
import { Button as BaseButton } from '@mui/base/Button';

import { ButtonProps } from './Button.types';

export const Button = styled(BaseButton)<ButtonProps>`
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
