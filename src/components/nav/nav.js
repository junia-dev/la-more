import React from 'react';
import './nav.css';

export const menus = [
  {
    name: 'New in',
    emoji: 'β‘',
  },
  {
    name: 'Clothing',
    emoji: 'π§₯',
  },
  {
    name: 'Shoes',
    emoji: 'π',
  },
  {
    name: 'Accessories',
    emoji: 'π',
  },
  {
    name: 'Activewear',
    emoji: 'π€ΈββοΈ',
  },
  {
    name: 'Gifts & Living',
    emoji: 'π',
  },
  {
    name: 'Inspiration',
    emoji: 'π',
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
