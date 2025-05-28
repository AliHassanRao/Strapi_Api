import React, { useEffect, useState } from 'react';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';
import {
  PencilSquareIcon,
  TrashIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postToUpdate, setPostToUpdate] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/posts');
        if (!response.ok) throw new Error(`Failed to fetch, status: ${response.status}`);
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handlePostDeleted = (postId) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  const handlePostUpdated = (updatedPost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setPostToUpdate(null);
  };

  if (loading)
    return <div className="text-gray-600 text-sm">Loading posts...</div>;

  if (error)
    return (
      <div className="flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-md">
        <ExclamationCircleIcon className="h-5 w-5 mr-2" />
        <span>Error: {error}</span>
      </div>
    );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts</h2>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts available.</p>
      ) : (
        posts.map((post) => {
          const title = post.Title || 'No title';
          const description = post.Description || 'No description';
          const createdAt = post.createdAt
            ? new Date(post.createdAt).toLocaleString()
            : 'No date available';

          return (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow p-5 space-y-2 border"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-700">{description}</p>
                  <small className="text-gray-500 block mt-1">{createdAt}</small>
                </div>
                <div className="flex space-x-2 mt-1">
                  <button
                    onClick={() => setPostToUpdate(post)}
                    className="text-blue-600 hover:text-blue-800 transition"
                    title="Edit"
                  >
                    <PencilSquareIcon className="h-5 w-5" />
                  </button>
                  <DeletePost
                    postId={post.id}
                    onPostDeleted={handlePostDeleted}
                    iconOnly
                  />
                </div>
              </div>

              {postToUpdate && postToUpdate.id === post.id && (
                <div className="mt-4">
                  <UpdatePost
                    postId={post.id}
                    postData={post}
                    onPostUpdated={handlePostUpdated}
                  />
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default PostsList;
