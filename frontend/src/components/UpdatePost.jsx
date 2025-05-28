import React, { useState, useEffect } from 'react';

const UpdatePost = ({ postId, postData, onPostUpdated }) => {
  const [title, setTitle] = useState(postData.title || '');
  const [description, setDescription] = useState(postData.description || '');
  const [error, setError] = useState(null);

  useEffect(() => {
    setTitle(postData.title || '');
    setDescription(postData.description || '');
  }, [postData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`http://localhost:1337/api/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            title: title,
            description: description,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error?.message || 'Error updating post');
      }

      onPostUpdated(result.data);
    } catch (error) {
      setError(error.message);
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="mt-4 p-4 border rounded-lg bg-gray-50 shadow-inner">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Update Post</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition"
          >
            Update
          </button>
          {error && <p className="text-sm text-red-600">Error: {error}</p>}
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
