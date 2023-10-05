'use client';

import { useEffect, useState } from 'react';
import PostCard from './PostCard';

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.length > 0 &&
        data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search by post text, tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PostCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
