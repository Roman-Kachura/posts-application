'use client'

import { FC } from 'react';
import styles from '@/styles/app.module.scss';

interface TitleProps {
  title: string
}

export const Title: FC<TitleProps> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>
}