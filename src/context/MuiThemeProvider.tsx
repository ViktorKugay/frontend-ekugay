import {createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material';
import {PropsWithChildren} from 'react';
import {StyledEngineProvider} from '@mui/material/styles';

interface Props {}

let muiTheme = createTheme({
  typography: {
    fontFamily: [
      '"Montserrat"',
      '"Segoe UI"',
      '-apple-system',
      '"Roboto"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif',
    ].join(','),
  },
});

muiTheme = responsiveFontSizes(muiTheme);

export function MuiThemeProvider({
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
