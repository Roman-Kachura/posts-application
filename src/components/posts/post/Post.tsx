'use client';

import { FC } from 'react';
import { CommentDTO } from '@/types/types';
import { Comments } from '@/components/comments/Comments';
import styles from '@/styles/posts.module.scss';
import { PostContent } from '@/components/posts/post/PostContent';
import Link from 'next/link';

interface PostProps {
  title: string
  body: string
  username: string
  comments: CommentDTO[]
}

export const Post: FC<PostProps> = ({ title, body, username, comments }) => {
  return (
    <main className={styles.post}>
      <Link href="/posts" className={styles.postsLink}>Back to posts</Link>
      <PostContent username={username} body={body} title={title}/>
      <Comments comments={comments}/>
    </main>
  )
}