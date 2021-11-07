import {Header} from '@atomic/organisms/Header/Header';
import {Footer} from '@atomic/organisms/Footer/Footer';
import {Lesson} from '@atomic/organisms/Lesson/Lesson';

import {Grid} from '@mui/material';

interface Props {
  title: string;
  html: string;
}

export function LessonBody(props: Props): JSX.Element {
  return (
    <>
      <Header />
      <Grid container px={2}>
        <Lesson {...props} />
      </Grid>
      <Footer />
    </>
  );
}
