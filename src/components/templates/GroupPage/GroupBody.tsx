import {Header} from '@atomic/organisms/Header/Header';
import {Footer} from '@atomic/organisms/Footer/Footer';
import {GroupTitle} from '@atomic/molecules/GroupTitle/GroupTitle';
import {LessonsList} from '@atomic/organisms/LessonsList/LessonsList';

import {Grid} from '@mui/material';

interface Props {
  lessons: Lesson[];
  group: Group;
}

export function GroupBody({group, lessons}: Props): JSX.Element {
  return (
    <>
      <Header />
      <Grid container px={12}>
        <GroupTitle {...group} />
        <LessonsList items={lessons} />
      </Grid>
      <Footer />
    </>
  );
}
