// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Post Form */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Create a New Post</h2>
            <PostForm />
          </section>

          {/* Posts List */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">All Posts</h2>
            <PostsList />
          </section>
        </main>
      </div>
    </Provider>
  );
};

export default App;
