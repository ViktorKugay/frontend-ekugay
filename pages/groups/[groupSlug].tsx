import {GroupHead} from '@atomic/templates/GroupPage/GroupHead';
import {GroupBody} from '@atomic/templates/GroupPage/GroupBody';
import {StyledEngineProvider} from '@mui/material/styles';
import {MuiThemeProvider} from '@context/MuiThemeProvider';
import {NextPageContext} from 'next';
import ErrorPageNext from 'next/error';

import lessons from '../../lessons.json';
import groups from '../../groups.json';

interface Props {
  lessons: Lesson[];
  group: Group;
}

export default function LessonRoute(props?: Props): JSX.Element {
  if (!props) {
    return <ErrorPageNext statusCode={404} />;
  }

  return (
    <MuiThemeProvider>
      <StyledEngineProvider>
        <GroupHead />
        <GroupBody {...props} />
      </StyledEngineProvider>
    </MuiThemeProvider>
  );
}

LessonRoute.getInitialProps = ({query}: NextPageContext): Props | undefined => {
  const groupSlug = query.groupSlug as string;

  const group = groups.find(({slug}) => slug === groupSlug);
  if (!group) {
    return undefined;
  }

  const groupLessons = lessons.filter(({slug}) => group.lessons.includes(slug));

  return {group, lessons: groupLessons};
};
