import s from './Lesson.module.scss';

interface Props {
  title: string;
  html: string;
}

export function Lesson({title, html}: Props) {
  return (
    <div className={s.root}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
}
