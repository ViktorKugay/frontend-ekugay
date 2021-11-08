import s from './GroupTitle.module.scss';

import {Typography} from '@mui/material';

import c from './config.json';

interface Props {
  description: string;
}

export function GroupTitle({description}: Props): JSX.Element {
  return (
    <div className={s.root}>
      <Typography variant="h3" textAlign="center" className={s.title}>
        {c.GroupTitle.title}
      </Typography>
      <Typography variant="subtitle1" textAlign="center">
        {description}
      </Typography>
    </div>
  );
}
