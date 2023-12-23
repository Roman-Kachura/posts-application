import axios, { AxiosResponse } from 'axios';
import { CommentDTO, PostDTO, UserDTO } from '@/types/types';

const $api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  getPosts() {
    return $api.get<AxiosResponse, AxiosResponse<PostDTO[]>>(`/posts`).then(res => res.data);
  },
  getPostById(id: number) {
    return $api.get<AxiosResponse, AxiosResponse<PostDTO>>(`/posts/${id}`).then(res => res.data);
  },
  getComments(id: number) {
    return $api.get<AxiosResponse, AxiosResponse<CommentDTO[]>>(`/posts/${id}/comments`).then(res => res.data);
  },
  getUserById(uid: number) {
    return $api.get<AxiosResponse, AxiosResponse<UserDTO>>(`/users/${uid}`).then(res => res.data);
  }
}