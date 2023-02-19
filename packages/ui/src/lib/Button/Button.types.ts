import { PropsWithChildren } from 'react';

export type ButtonTypes = 'Primary' | 'Secondary' | 'Success' | 'Warning' | 'Danger';

export interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  buttonType?: ButtonTypes;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonStyledProps {
  $buttonType: ButtonTypes;
}
