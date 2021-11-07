import s from './Welcome.module.scss';

import {Image} from '@atomic/atoms/Image/Image';

import c from './config.json';

export function Welcome(): JSX.Element {
  return <Image type="internal" className={s.image} src={c.Welcome.src} />;
}
