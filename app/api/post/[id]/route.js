import { connectToDB } from '@/utils/db';
import Post from '@/models/post';

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id).populate('creator');

    if (!post) return new Response('Post not found', { status: 404 });
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch post', { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { text, tag } = await req.json();

  try {
    await connectToDB();

    const existingPost = await Post.findById(params.id);

    if (!existingPost) return new Response('Post not found', { status: 404 });

    existingPost.text = text;
    existingPost.tag = tag;

    await existingPost.save();

    return new Response(JSON.stringify(existingPost), { status: 200 });
  } catch (error) {
    return new Response('Failed to update post', { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Post.findByIdAndRemove(params.id);

    return new Response('Post deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to delete post', { status: 500 });
  }
};
