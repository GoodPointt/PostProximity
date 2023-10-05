'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@/components/Form';

const CreatePost = () => {
  const [submiting, setSubmiting] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const [post, setPost] = useState({
    text: '',
    tag: '',
  });

  const createPost = async (e) => {
    e.preventDefault();
    setSubmiting(true);

    try {
      const res = await fetch('/api/post/new', {
        method: 'POST',
        body: JSON.stringify({
          text: post.text,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (res.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submiting={submiting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
