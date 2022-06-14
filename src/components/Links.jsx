import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎All' },
  { url: '/images', text: '📸Images' },
  { url: '/videos', text: '📺Videos' },
  { url: '/news', text: '📰News' },
];

let activeClassName = "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 p-2 sm:mx-2"
let inActiveClassNmae = "border-b-2 border-transparent p-2 text-center sm:mx-2"

const Links = () => (
  <div className="flex justify-around sm:justify-start sm:mx-6 items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink
        to={url}
        key={text} 
        className={({ isActive }) => ( isActive ? activeClassName : inActiveClassNmae )}
      >{text}</NavLink>
    ))}
  </div>
);

export default Links