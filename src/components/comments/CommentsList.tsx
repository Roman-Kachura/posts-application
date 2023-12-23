'use client'

import { FC } from 'react';
import { CommentDTO } from '@/types/types';
import { CommentsListItem } from '@/components/comments/CommentsListItem';
import styles from '@/styles/comments.module.scss';

interface CommentsListProps {
  comments: CommentDTO[]
}

export const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  return (
    <ul className={styles.commentsList}>
      {comments.map(c => <CommentsListItem key={c.id} comment={c}/>)}
    </ul>
  )
}