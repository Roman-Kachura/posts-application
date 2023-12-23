'use client'

import { Title } from '@/components/Title';
import { FC } from 'react';
import { CommentDTO } from '@/types/types';
import { CommentsList } from '@/components/comments/CommentsList';
import styles from '@/styles/comments.module.scss';

interface CommentsProps {
  comments:CommentDTO[]
}

export const Comments:FC<CommentsProps> = ({comments}) => {
  return(
    <section className={styles.comments}>
      <Title title={'Comments'}/>
      <CommentsList comments={comments}/>
    </section>
  )
}