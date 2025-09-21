import { useEffect, useState } from 'react';
import { fetchPosts } from './fetchPosts';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const [didFail, setDidFail] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts()
      .then((posts) => setPosts(posts))
      .catch(() => setDidFail(true));
  }, []);

  if (didFail) {
    return <p>There was an error</p>;
  }

  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <div key={id}>
          <p>{title}</p>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};
