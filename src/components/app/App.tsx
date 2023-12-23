'use client'

import { Title } from '@/components/Title';
import styles from '@/styles/app.module.scss';
import Link from 'next/link';

export const App = () => {
  return (
    <main className={styles.app}>
      <Title title={'Start page'}/>
      <Link className={styles.appLink} href={'/auth'}>login</Link>
    </main>
  )
}