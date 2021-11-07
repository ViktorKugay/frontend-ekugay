import s from './Header.module.scss';

import {Button} from '@mui/material';
import {Link} from '@atomic/atoms/Link/Link';
import {AppPath} from '@constants/AppConfig';
import {Image} from '@atomic/atoms/Image/Image';
import {AuthButton} from '@atomic/molecules/AuthButton/AuthButton';

import c from './config.json';

export interface HeaderProps {}

export function Header(): JSX.Element {
  return (
    <div className={s.root}>
      <div className={s.leftSide}>
        <div>
          <Link type="internal" href={AppPath.Main}>
            <Image type="internal" className={s.logo} src={c.Logo.src} />
          </Link>
        </div>
        <nav className={s.nav}>
          {c.Routes.map(({href, title}, index) => (
            <Link key={index} type="internal" href={href}>
              <Button variant="text">{title}</Button>
            </Link>
          ))}
        </nav>
      </div>
      {/* <div className={s.rightSide}>
        <AuthButton />
      </div> */}
    </div>
  );
}
