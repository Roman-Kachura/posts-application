'use client'

import { FC } from 'react';
import { CommentDTO } from '@/types/types';
import styles from '@/styles/comments.module.scss';

interface CommentsListItemProps {
  comment:CommentDTO
}

export const CommentsListItem:FC<CommentsListItemProps> = ({comment}) => {
  return(
    <li className={styles.commentsListItem}>
      <h5 className={styles.commentsListItemTitle}>{comment.name}</h5>
      <p className={styles.commentsListItemBody}>{comment.body}</p>
      <strong className={styles.commentsListItemEmail}>{comment.email}</strong>
    </li>
  )
}