import {GroupsListHead} from '@atomic/templates/GroupsListPage/GroupsListHead';
import {GroupsListBody} from '@atomic/templates/GroupsListPage/GroupsListBody';
import {StyledEngineProvider} from '@mui/material/styles';
import {MuiThemeProvider} from '@context/MuiThemeProvider';

import groups from '../../groups.json';

export default function MainRoute(): JSX.Element {
  return (
    <MuiThemeProvider>
      <StyledEngineProvider>
        <GroupsListHead />
        <GroupsListBody groups={groups} />
      </StyledEngineProvider>
    </MuiThemeProvider>
  );
}
