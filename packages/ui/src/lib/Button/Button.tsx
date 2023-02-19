import { ReactElement } from 'react';
import * as Styled from './Button.styled';
import { ButtonProps } from './Button.types';

function Button({ disabled, children, buttonType = 'Primary', onClick }: ButtonProps): ReactElement {
  return (
    <Styled.Button disabled={disabled} onClick={onClick} $buttonType={buttonType}>
      {children}
    </Styled.Button>
  );
}

export default Button;
