'use client';

import { FC } from 'react';
import styles from '@/styles/posts.module.scss';
import Link from 'next/link';

interface PostsListItemProps {
  id: number
  title: string
  body: string
}

export const PostsListItem: FC<PostsListItemProps> = ({ title, body, id }) => {
  return (
    <li className={styles.postsListItem}>
      <Link href={`/posts/${id}`}>
        <h4 className={styles.postsListItemTitle}>{title}</h4>
        <p>{body}</p>
      </Link>
    </li>
  )
}
