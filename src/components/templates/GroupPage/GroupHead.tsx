import {PageHead} from '../../atoms/PageHead/PageHead';

import c from './config.json';

export function GroupHead(): JSX.Element {
  return <PageHead {...c.GroupHead} />;
}
