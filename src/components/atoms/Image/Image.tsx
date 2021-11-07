import s from './Image.module.scss';

import ImageNext from 'next/image';
import cn from 'classnames';

import c from './config.json';

export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  type: 'internal' | 'external';
}

export function Image({
  src,
  className,
  type,
  alt = c.Image.defaultProps.alt,
}: ImageProps): JSX.Element {
  return (
    <>
      <div className={cn(s.root, className)}>
        {type === 'internal' ? (
          <ImageNext
            src={src}
            alt={alt}
            layout="fill"
            className={cn(s.image, className)}
            // placeholder="blur"
            // blurDataURL={c.Image.blurDataURL}
          />
        ) : (
          <img src={src} alt={alt} className={className} />
        )}
      </div>
    </>
  );
}
