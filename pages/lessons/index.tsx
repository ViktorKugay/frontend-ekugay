import { localStorageGet } from '@utils/localStorage';

import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function MainRoute() {
  const router = useRouter();

  useEffect(() => {
    const groupPath = localStorageGet('group');

    if (groupPath) {
      router.push(groupPath);
    } else {
      router.push('/groups');
    }
  }, [router])

  return null;
}
