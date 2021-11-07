import {MainHead} from '@atomic/templates/MainPage/MainHead';
import {MainBody} from '@atomic/templates/MainPage/MainBody';
import {StyledEngineProvider} from '@mui/material/styles';
import {MuiThemeProvider} from '@context/MuiThemeProvider';

export default function MainRoute(): JSX.Element {
  return (
    <MuiThemeProvider>
      <StyledEngineProvider>
        <MainHead />
        <MainBody />
      </StyledEngineProvider>
    </MuiThemeProvider>
  );
}
