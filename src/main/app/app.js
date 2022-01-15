import React, { useState } from 'react';
import SearchInput from '../../components/search-input/search-input';
import Nav, { menus } from '../../components/nav/nav';
import { CategoryFilter, SortFilter } from '../../components/filters/filters';
import {Content1, Content2} from './content'

import './app.css';

const App = () => {
  const [activeMenu, setActiveMenu] = useState(menus[0]);

  return (
    <div className="app-container">
      <div className="header">
        <div className="logo">
          <svg
            viewBox="0 0 444 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M416 102.5C416 159.109 370.109 205 313.5 205C256.891 205 211 159.109 211 102.5C211 45.8908 256.891 0 313.5 0C370.109 0 416 45.8908 416 102.5Z"
              fill="#F9CDDC"
            />
            <path
              d="M0.943359 128V63.752H18.3018V113.981H43.043V128H0.943359ZM99.9451 128L96.7811 115.959H75.907L72.6551 128H53.5828L74.5447 63.4883H97.7039L118.929 128H99.9451ZM93.1775 101.721L90.409 91.1738C89.7645 88.8301 88.9734 85.7979 88.0359 82.0771C87.1277 78.3564 86.5271 75.6904 86.2342 74.0791C85.9705 75.5732 85.4432 78.0342 84.6521 81.4619C83.8904 84.8896 82.1766 91.6426 79.5105 101.721H93.1775ZM191.689 128L178.549 81.7256H178.154C178.769 89.6064 179.077 95.7295 179.077 100.095V128H163.696V63.752H186.811L200.214 109.367H200.566L213.705 63.752H236.865V128H220.913V99.8311C220.913 98.3662 220.927 96.7402 220.956 94.9531C221.015 93.166 221.22 88.7861 221.572 81.8135H221.176L208.212 128H191.689ZM318.025 95.7881C318.025 106.599 315.373 114.816 310.07 120.441C304.768 126.066 297.004 128.879 286.779 128.879C276.701 128.879 268.967 126.052 263.576 120.397C258.215 114.743 255.534 106.511 255.534 95.7002C255.534 85.0068 258.2 76.8477 263.532 71.2227C268.894 65.5684 276.672 62.7412 286.867 62.7412C297.092 62.7412 304.841 65.5391 310.114 71.1348C315.388 76.7305 318.025 84.9482 318.025 95.7881ZM273.816 95.7881C273.816 108.21 278.137 114.421 286.779 114.421C291.174 114.421 294.426 112.912 296.535 109.895C298.674 106.877 299.743 102.175 299.743 95.7881C299.743 89.3721 298.659 84.6406 296.491 81.5938C294.353 78.5176 291.145 76.9795 286.867 76.9795C278.166 76.9795 273.816 83.249 273.816 95.7881ZM354.185 104.621V128H336.826V63.752H357.876C375.337 63.752 384.067 70.0801 384.067 82.7363C384.067 90.1777 380.435 95.9346 373.169 100.007L391.89 128H372.202L358.579 104.621H354.185ZM354.185 91.5693H357.437C363.501 91.5693 366.533 88.8887 366.533 83.5273C366.533 79.1035 363.56 76.8916 357.612 76.8916H354.185V91.5693ZM443.079 128H404.934V63.752H443.079V77.6826H422.293V87.79H441.541V101.721H422.293V113.85H443.079V128Z"
              fill="black"
            />
            <rect x="260" y="141" width="56" height="15" fill="black" />
          </svg>
        </div>

        <section className="right-section">
          <SearchInput />
        </section>
      </div>

      <div className="main-content">
        <section className="left-section">
          <h1>Explore</h1>
          <Nav setActiveMenu={setActiveMenu} />
        </section>
        <section className="right-section">
          <div className="page-title">
            <h1>{`${activeMenu.emoji} ${activeMenu.name}`}</h1>
            <div className="content-filters">
              <SortFilter />
              <CategoryFilter />
            </div>
          </div>
          <div className="deals-container">
            <Content1 />
            <Content2 />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
