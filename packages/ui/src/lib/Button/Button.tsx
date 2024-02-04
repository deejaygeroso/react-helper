import { ReactElement } from 'react';

import * as Styled from './Button.styled';
import { ButtonProps } from './Button.types';


function Button(props: ButtonProps): ReactElement {
  return (
    <Styled.Button {...props} />
  );
}

export default Button;
