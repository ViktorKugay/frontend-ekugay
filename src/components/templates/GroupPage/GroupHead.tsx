import {PageHead} from '../../atoms/PageHead/PageHead';

import c from './config.json';

interface Props {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export function GroupHead({image, title, description, slug}: Props): JSX.Element {
  return (
    <PageHead 
    {...c.GroupHead} 
    image={image}
    title={title}
    description={description}
    url={`https://ekugay.ru/groups/${slug}`}
    />
    );
}
