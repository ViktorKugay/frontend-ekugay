import s from './JoinUs.module.scss';

import {Link} from '@atomic/atoms/Link/Link';
import {Image} from '@atomic/atoms/Image/Image';
import {AppPath} from '@constants/AppConfig';

import c from './config.json';
import {Button, Typography} from '@mui/material';

export function JoinUs(): JSX.Element {
  return (
    <div className={s.root}>
      <Typography variant="h3" textAlign="center" mb={4} fontWeight="500">
        {c.JoinUs.title}
      </Typography>
      <div className={s.join}>
        <Image
          type="internal"
          src={c.JoinUs.image.src}
          className={s.leftSideImage}
        />
        <div className={s.rightSideText}>
          <Typography variant="h5" fontWeight="400" className={s.text1}>
            {c.JoinUs.join.title}
          </Typography>
          <Typography className={s.text2}>
            {c.JoinUs.join.description}
          </Typography>
          <Link type="internal" href="/groups" className={s.button}>
            <Button variant="outlined">{c.JoinUs.button.title}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
