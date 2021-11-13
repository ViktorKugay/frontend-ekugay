import {
  createTheme,
  Theme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material';
import {PropsWithChildren, useEffect, useState} from 'react';
// import {grey, deepPurple} from '@mui/material/colors';
import {StyledEngineProvider} from '@mui/material/styles';

interface Props {}

let muiTheme = createTheme({
  // palette: {
  //   common: {
  //     black: grey[900],
  //     white: grey[50],
  //   },
  //   primary: {
  //     light: grey[300],
  //     main: grey[600],
  //     dark: grey[900],
  //   },
  //   secondary: {
  //     light: deepPurple[50],
  //     main: deepPurple[500],
  //     dark: deepPurple[900],
  //   },
  // },
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
  const [theme, setTheme] = useState<Theme>();

  // useEffect(() => {
  //   setTheme(muiTheme);
  // }, []);

  // if (!theme) {
  //   return <>{children}</>;
  // }

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
