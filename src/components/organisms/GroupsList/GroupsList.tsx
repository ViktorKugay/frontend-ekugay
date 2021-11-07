import s from './GroupsList.module.scss';

import { Paper, Typography } from '@mui/material';

import {Link} from '@atomic/atoms/Link/Link';
import {Image} from '@atomic/atoms/Image/Image';
import {localStorageSet} from '@utils/localStorage';

import c from './config.json';

interface Props {
    items: Group[];
}

export function GroupsList({items}: Props): JSX.Element {
  const handleClick = (href: string) => {
    localStorageSet('group', href);
  }

  const renderGroupCard = ({image, description, slug, title}: Group) => {
      return (
        <Link key={slug} onClick={handleClick} type="internal" href={`/groups/${slug}`}>
          <Paper className={s.paper}>
            <Image type="internal" src={image} className={s.image} />
            <Typography variant="h4" className={s.title}>{title}</Typography>
            <Typography variant="subtitle1">{description}</Typography>
          </Paper>
        </Link>
      );
  }

  return (
    <div className={s.root}>
        <Typography textAlign="center" variant="h3">{c.GroupsList.title}</Typography>
        {items.map(renderGroupCard)}
    </div>
  );
}