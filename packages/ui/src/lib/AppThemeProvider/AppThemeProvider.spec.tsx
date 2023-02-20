import { render } from '@testing-library/react';

import AppThemeProvider from './AppThemeProvider';

describe('ThemeProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppThemeProvider>
        <div></div>
      </AppThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
