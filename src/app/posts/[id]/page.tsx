import { Post } from '@/components/posts/post/Post';
import { api } from '@/store/api/api';

export default async function PostPage({ params }: { params: { id: number } }) {
  const post = await api.getPostById(params.id);
  const user = await api.getUserById(post.userId);
  const comments = await api.getComments(params.id);

  if (post && user && comments) {
    return (
      <Post
        title={post.title}
        body={post.body}
        username={user.username}
        comments={comments}
      />
    )
  }

  return <div>Loading...</div>
}