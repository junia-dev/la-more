import React from 'react';
import './nav.css';

export const menus = [
  {
    name: 'New in',
    emoji: '⚡',
  },
  {
    name: 'Clothing',
    emoji: '🧥',
  },
  {
    name: 'Shoes',
    emoji: '👟',
  },
  {
    name: 'Accessories',
    emoji: '👜',
  },
  {
    name: 'Activewear',
    emoji: '🤸‍♀️',
  },
  {
    name: 'Gifts & Living',
    emoji: '🎁',
  },
  {
    name: 'Inspiration',
    emoji: '💎',
  },
];

const Nav = ({ setActiveMenu }) => (
  <ul className="nav">
    {menus.map((menu, key) => (
      <li key={key} onClick={() => setActiveMenu(menu)}>
        <span>{menu.emoji}</span>
        <p>{menu.name}</p>
      </li>
    ))}
  </ul>
);

export default Nav;
