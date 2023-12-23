'use client'

import { Title } from '@/components/Title';
import styles from '@/styles/posts.module.scss';
import { FC } from 'react';

interface PostContentProps {
  title: string
  body: string
  username: string
}

export const PostContent: FC<PostContentProps> = ({ username, title, body }) => {
  return (
    <section className={styles.postContent}>
      <Title title={title}/>
      <div className={styles.postContentBody}>
        <p>{body}</p>
        <strong className={styles.postContentAuthor}>@Author: {username}</strong>
      </div>
    </section>
  )
}