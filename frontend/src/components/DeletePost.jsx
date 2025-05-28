import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

const DeletePost = ({ postId, onPostDeleted, iconOnly = false }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:1337/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error?.message || 'Failed to delete post');
      }

      onPostDeleted(postId);
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return iconOnly ? (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-800 transition"
      title="Delete"
    >
      <TrashIcon className="h-5 w-5" />
    </button>
  ) : (
    <button
      onClick={handleDelete}
      className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition"
    >
      <TrashIcon className="h-4 w-4 mr-2" />
      Delete
    </button>
  );
};

export default DeletePost;
