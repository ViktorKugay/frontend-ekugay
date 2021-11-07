import {PageHead} from '../../atoms/PageHead/PageHead';

import c from './config.json';

export function LessonHead(): JSX.Element {
  return <PageHead {...c.LessonHead} />;
}
