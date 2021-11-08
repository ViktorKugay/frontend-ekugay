import s from './Lesson.module.scss';

import {Image} from '@atomic/atoms/Image/Image';

interface Props {
  title: string;
  image: string;
  html: string;
}

export function Lesson({title, html, image}: Props) {
  return (
    <div className={s.root}>
      <h1>{title}</h1>
      <Image type="internal" src={image} />
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
}
