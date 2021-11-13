import s from './Link.module.scss';

import NextLink from 'next/link';
import {PropsWithChildren} from 'react';
import {scrollToElement} from '@utils/scroll';
import cn from 'classnames';

export type LinkProps = LinkPropsInternal | LinkPropsExternal;

interface LinkPropsInternal {
  href: string;
  className?: string;
  onClick?(href: string): void;
  type: 'internal';
  as?: string;
}

interface LinkPropsExternal {
  href: string;
  className?: string;
  onClick?(href: string): void;
  type: 'external';
}

const regExp = /(.+)#(\w+)/;

export function Link(props: PropsWithChildren<LinkProps>): JSX.Element {
  const {type, className, children, href, onClick} = props;

  const handleClick = (event: any) => {
    const parsedHref = href.match(regExp);

    if (needScrollToElement(parsedHref)) {
      event.preventDefault();
      scrollToElement(parsedHref[2]);
    }

    onClick && onClick(href);
  };

  if (type === 'internal') {
    return (
      <NextLink href={href} as={props.as}>
        <a role="link" onClick={handleClick} className={cn(className, s.root)}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(s.root, className)}
    >
      {children}
    </a>
  );
}

function needScrollToElement(
  parsedHref: RegExpMatchArray | null,
): parsedHref is RegExpMatchArray {
  const {pathname} = window.location;

  return Boolean(parsedHref && pathname === parsedHref[1]);
}
