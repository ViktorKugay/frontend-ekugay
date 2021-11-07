import {IconButton} from '@mui/material';
import {LogoutOutlined} from '@mui/icons-material';
import {Link} from '@atomic/atoms/Link/Link';
import {AppPath} from '@constants/AppConfig';

export function AuthButton(): JSX.Element {
  return (
    <Link type="internal" href={AppPath.Auth}>
      <IconButton>
        <LogoutOutlined />
      </IconButton>
    </Link>
  );
}
