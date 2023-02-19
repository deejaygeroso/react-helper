import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../../constants/theme';

const ThemeProvider: FunctionComponent = (props: PropsWithChildren) => {
  return <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>;
};

export default ThemeProvider;
