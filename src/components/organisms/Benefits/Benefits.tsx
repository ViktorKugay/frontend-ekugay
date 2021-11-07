import s from './Benefits.module.scss';

import {Typography} from '@mui/material';
import {Image} from '@atomic/atoms/Image/Image';

import c from './config.json';

export function Benefits(): JSX.Element {
  const renderCard = ({title, description, image}: any, index: number) => {
    return (
      <div className={s.card} key={index}>
        <Image type="internal" src={image} className={s.image} />
        <Typography
          color="white"
          variant="h5"
          fontWeight="500"
          mb={2}
          mt={6}
          align="center"
          className={s.text}
        >
          {title}
        </Typography>
        <Typography
          color="white"
          align="center"
          mb={4}
          className={s.description}
        >
          {description}
        </Typography>
      </div>
    );
  };

  return (
    <div className={s.root}>
      <Typography variant="h2" textAlign="center" mb={4} fontWeight="500">
        {c.Benefits.title}
      </Typography>
      <div className={s.cards}>{c.Benefits.cards.map(renderCard)}</div>
    </div>
  );
}
