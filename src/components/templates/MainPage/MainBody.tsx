import {Header} from '@atomic/organisms/Header/Header';
import {Welcome} from '@atomic/molecules/Welcome/Welcome';
import {Benefits} from '@atomic/organisms/Benefits/Benefits';
import {Footer} from '@atomic/organisms/Footer/Footer';
import {JoinUs} from '@atomic/organisms/JoinUs/JoinUs';

import {Grid} from '@mui/material';

export function MainBody(): JSX.Element {
  return (
    <>
      <Header />
      <Welcome />
      <Grid container justifyContent="center" px={4}>
        <Benefits />
        <JoinUs />
      </Grid>
      <Footer />
    </>
  );
}
