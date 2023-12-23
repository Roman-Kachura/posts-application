'use client'

import { FC, useEffect } from 'react';
import { Title } from '@/components/Title';
import styles from '@/styles/auth.module.scss';
import { LoginForm } from '@/components/auth/LoginForm';
import { useRouter } from 'next/navigation';
import { useStore } from '@nanostores/react';
import { $user } from '@/store/store';

export const Auth: FC = () => {
  const isAuth = useStore($user).isAuth;
  const router = useRouter();

  useEffect(() => {
    if (isAuth) router.push('/posts');
  }, [isAuth])

  return (
    <main className={styles.auth}>
      <div className={styles.authWrapper}>
        <Title title={'Login'}/>
        <LoginForm/>
      </div>
    </main>
  )
}