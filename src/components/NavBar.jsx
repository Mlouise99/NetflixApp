import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-slate-950 text-white flex flex-col lg:flex-row items-center justify-between py-4 px-8 lg:pr-40 lg:pl-40">
      <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
        <img src="../public/image.png" alt="image1" className="h-15" />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end space-x-4">
        <NavLink to={'/home'} className="nav-link">Home</NavLink>
        <NavLink to={'/explore'} className="nav-link">Explore</NavLink>
        <NavLink to={'/gen'} className="nav-link">Genre</NavLink>
        <NavLink to={'/news'} className="nav-link">News</NavLink>
        <NavLink to={'/movies'} className="nav-link">Movies</NavLink>
        <NavLink to={'/show'} className="nav-link">TV Show</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
