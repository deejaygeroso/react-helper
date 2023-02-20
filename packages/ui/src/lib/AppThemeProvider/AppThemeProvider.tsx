import { FunctionComponent } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '../../constants/theme';
import { ThemeProviderProps } from './AppThemeProvider.types';

const AppThemeProvider: FunctionComponent<ThemeProviderProps> = (props: ThemeProviderProps): JSX.Element => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
