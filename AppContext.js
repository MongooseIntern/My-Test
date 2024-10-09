import React, { createContext, useEffect, useState } from 'react';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsperPage = 6;

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((Response) => Response.json())
        .then((data) => {
          setPosts(data);
          console.log(data);
        });
    });
  }, []);

  const editPost = (updated) => {
    setPosts(posts.map((post) => (post.id === updated.id ? updated : post)));
  };

  const removeCard = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <AppContext.Provider
      value={{
        posts,
        currentPage,
        setCurrentPage,
        postsperPage,
        removeCard,
        editPost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
