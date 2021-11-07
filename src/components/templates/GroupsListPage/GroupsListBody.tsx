import {Header} from '@atomic/organisms/Header/Header';
import {Footer} from '@atomic/organisms/Footer/Footer';
import {GroupsList} from '@atomic/organisms/GroupsList/GroupsList';

import {Grid} from '@mui/material';

interface Props {
  groups: Group[];
}

export function GroupsListBody({groups}: Props): JSX.Element {
  return (
    <>
      <Header />
      <Grid container px={2}>
        <GroupsList items={groups} />
      </Grid>
      <Footer />
    </>
  );
}
