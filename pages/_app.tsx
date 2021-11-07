import {AppProps} from 'next/dist/shared/lib/router/router';

import '../src/styles/media.css';
import '../src/styles/reboot.scss';
import '../src/styles/variables.scss';

// @See https://nextjs.org/docs/advanced-features/custom-apphttps://nextjs.org/docs/advanced-features/custom-app
export default function CustomApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
