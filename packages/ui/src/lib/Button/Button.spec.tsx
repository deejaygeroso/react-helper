import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const onClick = vi.fn();
  const renderButton = (label: string) => {
    return render(<Button onClick={onClick}>{label}</Button>);
  };

  it('should render successfully', () => {
    const { baseElement } = renderButton('Submit');
    expect(baseElement).toBeTruthy();
  });
});
