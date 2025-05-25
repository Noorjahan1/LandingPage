'use client'// app/components/Header.js
import PropTypes from 'prop-types';

import { useEffect } from 'react';

export default function Header({ title, tagline }) {
  useEffect(() => {
    const el = document.getElementById('header-title');
    if (el) {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <>
      <header className="py-10 text-center border-b-2 border-blue-100">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-tight" style={{ transform: 'translateY(20px)', opacity: 0, transition: 'opacity 0.6s, transform 0.6s' }} id="header-title">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-3">
          {tagline}
        </p>
      </header>
     
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};
