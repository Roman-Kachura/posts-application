'use client'

import { FC } from 'react';
import { PostDTO } from '@/types/types';
import styles from '@/styles/posts.module.scss';
import { PostsListItem } from '@/components/posts/PostsListItem';

interface PostsListProps {
  posts: PostDTO[]
}

export const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <ul className={styles.postsList}>
      {posts.map(p => <PostsListItem key={p.id} id={p.id} title={p.title} body={p.body}/>)}
    </ul>
  )
}