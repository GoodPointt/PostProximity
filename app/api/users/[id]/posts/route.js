import { connectToDB } from '@/utils/db';
import Post from '@/models/post';

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const posts = await Post.find({ creator: params.id }).populate('creator');
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all posts', { status: 500 });
  }
};
