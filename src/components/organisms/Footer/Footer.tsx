import s from './Footer.module.scss';

import {Link} from '@atomic/atoms/Link/Link';
import {Image} from '@atomic/atoms/Image/Image';
import {AppPath} from '@constants/AppConfig';

import {Typography} from '@mui/material';

import c from './config.json';

interface Props {
  href: string;
  title: string;
}

const renderLink = ({href, title}: Props, index: number) => (
  <div key={index} className={s.link}>
    <Link type="external" href={href}>
      <Typography>{title}</Typography>
    </Link>
  </div>
);

export function Footer(): JSX.Element {
  return (
    <footer className={s.root}>
      <Link type="internal" href={AppPath.Main} className={s.link}>
        <Image type="internal" className={s.logo} src={c.Logo.src} />
      </Link>
      <Typography className={s.link}>{buildLicense()}</Typography>
      {c.Footer.links.map(renderLink)}
    </footer>
  );
}

function buildLicense() {
  return `${c.Footer.license.title} ${new Date().getFullYear()}`;
}
