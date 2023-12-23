'use client'

import { FC } from 'react';
import styles from '@/styles/app.module.scss';
import { createPaginatonNumbers } from '@/helpers/heplers';

interface PaginationProps {
  currentPage: number
  totalPage: number
  changePage:(page:number) => void
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPage, changePage }) => {
  const pages = createPaginatonNumbers(currentPage, totalPage);
  return (
    <ul className={styles.pagination}>
      {pages.map(p => {
        const className = p === currentPage ? `${styles.paginationBtn} ${styles.active}` : styles.paginationBtn;
        return(
          <li>
            <button className={className} onClick={() => changePage(p)}>{p}</button>
          </li>
        )
      })}
    </ul>
  )
}