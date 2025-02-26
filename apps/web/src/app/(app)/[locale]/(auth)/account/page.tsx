'use client';

import AuthStateBoundary from '@mono/web/components/Auth/StateBoundary';
import { PAYLOAD_USER_TYPE_COOKIE_NAME } from '@mono/web/lib/constants';
import { useCookieValue } from '@mono/web/lib/useCookieValue';
import { LoaderIcon } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { usePayloadSession } from 'payload-authjs/client';
import { Suspense, useEffect, useState } from 'react';
import styles from './Account.module.css';

async function loadUserData() {
  const meUserReq = await fetch('/api/users/me');
  let { user } = await meUserReq.json();

  if (!user) {
    const { session } = usePayloadSession();
    user = session?.user;
  }

  return user;
}

function StateAlert() {
  const searchParams = useSearchParams();
  const state = searchParams.get('state');

  return <AuthStateBoundary state={state || ''} />;
}

function AccountPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const userType = useCookieValue(PAYLOAD_USER_TYPE_COOKIE_NAME);
  const authUserType = useCookieValue('auth-provider');
  const hasUserType = userType || authUserType;

  useEffect(() => {
    if (hasUserType) {
      (async () => {
        const nextUser = await loadUserData();
        setUser(nextUser);
        setLoading(false);
      })();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [hasUserType]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <LoaderIcon size="1.5rem" className="animate-spin" />
      </div>
    );
  }

  return (
    <div className={styles.account}>
      <Suspense>
        <StateAlert />
      </Suspense>

      <h1 className={styles.h1}>Account</h1>
      <pre>{JSON.stringify(user, null, '\t')}</pre>
      <Link href="/forgot-password" className="underline text-foreground">
        Reset password
      </Link>
    </div>
  );
}

export default AccountPage;
