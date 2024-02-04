import { ReactElement } from 'react';

import { ButtonProps } from './Button.types';

function Button(props: Readonly<ButtonProps>): ReactElement {
  const { variant = 'contained', ...otherProps } = props;
  if (variant === 'outlined') {
    return (
      <button
        type='button'
        className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
        {...otherProps}
      />
    );
  }

  return (
    <button
      type='button'
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      {...otherProps}
    />
  );
}

export default Button;
