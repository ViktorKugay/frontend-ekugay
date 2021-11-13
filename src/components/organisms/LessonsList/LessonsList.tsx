import s from './LessonsList.module.scss';

import {Paper, Typography} from '@mui/material';
import {Image} from '@atomic/atoms/Image/Image';
import {Link} from '@atomic/atoms/Link/Link';

export interface Props {
  items: Lesson[];
}

export function LessonsList({items}: Props): JSX.Element {
  const renderLessonCard = ({description, title, image, slug}: Lesson) => (
    <Link
      key={slug}
      type="internal"
      href={`/lessons/${slug}`}
      className={s.link}
    >
      <Paper className={s.paper}>
        <Image type="internal" src={image} className={s.image} />
        <div className={s.typography}>
          <Typography variant="h4" className={s.title}>
            {title}
          </Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </div>
      </Paper>
    </Link>
  );

  return <div className={s.root}>{items.map(renderLessonCard)}</div>;
}
