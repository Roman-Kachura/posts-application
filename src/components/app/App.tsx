'use client'

import { Title } from '@/components/Title';
import styles from '@/styles/app.module.scss';
import Link from 'next/link';
import { useStore } from '@nanostores/react';
import { $user } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const App = () => {
  const isAuth = useStore($user).isAuth;
  const router = useRouter();

  useEffect(() => {
    if (isAuth) router.push('/posts');
  }, [isAuth])

  return (
    <main className={styles.app}>
      <Title title={'Start page'}/>
      <Link className={styles.appLink} href={'/auth'}>login</Link>
    </main>
  )
}