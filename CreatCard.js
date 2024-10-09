import React, { useState, useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';

const CreateCard = ({ onClose }) => {
  const { addPost } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    addPost(newPost);
    onClose();
  };

  return (
    <>
      <div className='w-full h-auto flex justify-center items-center py-2'>
        <div className='card '>
          <img
            src='https://img.freepik.com/premium-vector/word-blog-vector-banner-with-text-colored-rainbow_100655-2724.jpg'
            alt='Image Not Found'
          />

          <form
            className=' flex items-center flex-col  gap-1'
            onSubmit={handleSubmit}
          >
            <h2 className='py-2'>Create New Post</h2>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder='Paregraph'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </form>

          <div className='w-full h-[50px] flex justify-around items-center'>
            <button
              type='button'
              onClick={onClose}
              className='relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
            >
              <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Cancle
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCard;
