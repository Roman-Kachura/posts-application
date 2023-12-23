import { Posts } from '@/components/posts/Posts';
import { api } from '@/store/api/api';

export default async function PostsPage() {
  const posts = await api.getPosts();
  if(posts){
    return <Posts posts={posts}/>
  }

  return <div>Loading...</div>
}