'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@/components/Form';

const updatePost = () => {
  const [submiting, setSubmiting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  const [post, setPost] = useState({
    text: '',
    tag: '',
  });

  const updatePost = async (e) => {
    e.preventDefault();
    setSubmiting(true);

    if (!postId) return alert('Missing post ID');

    try {
      const res = await fetch(`/api/post/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          text: post.text,
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

  useEffect(() => {
    const getPostDetails = async () => {
      const res = await fetch(`/api/post/${postId}`);
      const data = await res.json();

      setPost({
        text: data.text,
        tag: data.tag,
      });
    };

    if (postId) getPostDetails();
  }, [postId]);

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submiting={submiting}
      handleSubmit={updatePost}
    />
  );
};

export default updatePost;
