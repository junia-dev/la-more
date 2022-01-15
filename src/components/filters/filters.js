import React from 'react';
import './filters.css';

export const SortFilter = () => {
  return (
    <div className="filter sort-filter">
      <svg
        width="30"
        height="24"
        viewBox="0 0 30 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="4" fill="black" />
        <rect x="5" y="10" width="25" height="4" fill="black" />
        <rect x="10" y="20" width="20" height="4" fill="black" />
      </svg>
      Sort
    </div>
  );
};

export const CategoryFilter = () => {
  return (
    <div className="filter category-filter">
      <span>5</span>
      Filter
    </div>
  );
};
