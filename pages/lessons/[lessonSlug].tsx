import {LessonHead} from '@atomic/templates/LessonPage/LessonHead';
import {LessonBody} from '@atomic/templates/LessonPage/LessonBody';
import {StyledEngineProvider} from '@mui/material/styles';
import {MuiThemeProvider} from '@context/MuiThemeProvider';
import {NextPageContext} from 'next';
import ErrorPageNext from 'next/error';

import lessons from '../../lessons.json';

interface Props {
  slug: string;
  title: string;
  description: string;
  image: string;
  html: string;
}

export default function LessonRoute(props?: Props): JSX.Element {
  if (!props) {
    return <ErrorPageNext statusCode={404} />;
  }

  return (
    <MuiThemeProvider>
      <StyledEngineProvider>
        <LessonHead {...props} />
        <LessonBody {...props} />
      </StyledEngineProvider>
    </MuiThemeProvider>
  );
}

LessonRoute.getInitialProps = ({query}: NextPageContext): Props | undefined => {
  const lessongSlug = query.lessonSlug as string;

  const lesson = lessons.find(({slug}) => slug === lessongSlug);

  return lesson;
};
