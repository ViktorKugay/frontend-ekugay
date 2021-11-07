import {PageHead} from '../../atoms/PageHead/PageHead';

import c from './config.json';

export function MainHead(): JSX.Element {
  return <PageHead {...c.MainHead} />;
}
