import React from 'react';
import { useState } from 'react';
import blogData_80 from './blogData_80';
import Blog_80 from './Blog_80';

const allCategories = ['all', 'lifestyle', 'travel'];

const Bloglist_80 = () => {
  const [blogs, setBlogs] = useState(blogData_80);
  const [categories, setCategories] = useState(allCategories);
  console.log('blogs', blogs);

  const removeItem = (id) => {
    let newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const clearItem = (blogs) => {
    setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(blogData_80);
    } else {
      const newBlogs = blogData_80.filter((item) => item.style === category);
      setBlogs(newBlogs);
    }
  };

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className='filter-container'>
        {categories.map((item, index) => {
          return (
            <button
              type='button'
              className='filter-btn'
              key={index}
              onClick={() => filterItems(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className='blogs-center'>
        {blogs.map((blog, index) => {
          const { id, img, style, title, content } = blog;
          return (
            <Blog_80
              key={id}
              id={id}
              img={img}
              style={style}
              title={title}
              content={content}
              removeItem={removeItem}
            />
          );
        })}
      </div>
      <button className='clear-btn' onClick={clearItem}>
        clear all blogs
      </button>
    </section>
  );
};

export default Bloglist_80;
