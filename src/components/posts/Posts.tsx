'use client'

import { FC, useEffect } from 'react';
import styles from '@/styles/posts.module.scss';
import { Title } from '@/components/Title';
import { PostDTO } from '@/types/types';
import { PostsList } from '@/components/posts/PostsList';
import { useStore } from '@nanostores/react';
import { $postsCurrentPage, $user, changePostsCurrentPage } from '@/store/store';
import { useRouter } from 'next/navigation';
import { Pagination } from '@/components/Pagination';
import { getCurrentPosts } from '@/helpers/heplers';

interface PostsComponentProps {
  posts: PostDTO[]
}

export const Posts: FC<PostsComponentProps> = ({ posts }) => {
  const router = useRouter();
  const isAuth = useStore($user).isAuth;
  const postsCurrentPage = useStore($postsCurrentPage);
  const postsPerPage = 8;
  const totalPostsPage = Math.ceil(posts.length / postsPerPage);
  const currentPosts = getCurrentPosts(postsCurrentPage, postsPerPage, posts);
  console.log(isAuth)

  useEffect(() => {
    if (!isAuth) router.push('/auth');
  }, [])

  return (
    <main className={styles.posts}>
      <Title title="Posts Page"/>
      <PostsList posts={currentPosts}/>
      <Pagination currentPage={postsCurrentPage} totalPage={totalPostsPage} changePage={changePostsCurrentPage}/>
    </main>
  )
}