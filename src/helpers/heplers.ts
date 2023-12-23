import { PostDTO } from '@/types/types';

export const createPaginatonNumbers = (currentPage: number, totalPages: number) => {
  let pages: number[] = [];
  let firstPage = 1;
  let lastPage = totalPages;
  if (currentPage >= 1 && currentPage < 5) {
    firstPage = 1;
    lastPage = 5;
  } else if (currentPage >= 5 && currentPage <= totalPages - 4) {
    firstPage = currentPage - 2;
    lastPage = currentPage + 2;
  } else if (currentPage > totalPages - 4) {
    firstPage = totalPages - 4;
    lastPage = totalPages;
  }

  for (let i = firstPage; i <= lastPage; i < i++) {
    pages.push(i)
  }

  return pages;
}

export const getCurrentPosts = (postsCurrentPage:number,postsPerPage:number,posts:PostDTO[]) => {
  return posts.slice((postsCurrentPage - 1) * postsPerPage, postsPerPage * postsCurrentPage);
}