import { connectToDB } from '@/utils/db';
import Post from '@/models/post';

export const POST = async (req, res) => {
  const { userId, text, tag } = await req.json();

  try {
    await connectToDB();

    const newPost = new Post({ creator: userId, text, tag });
    await newPost.save();
    console.log('afterSave=>>>>');

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new post', { status: 500 });
  }
};
