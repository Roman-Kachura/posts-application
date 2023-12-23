import { atom } from 'nanostores';
import { LoginValues } from '@/types/types';

export const $user = atom({ isAuth: false });
export const $postsCurrentPage = atom(1);

export const setUser = (data: LoginValues) => {
  if (data.email && data.password) $user.set({ isAuth: true });
}

export const changePostsCurrentPage = (page: number) => {
  $postsCurrentPage.set(page);
}