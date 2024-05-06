import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-slate-950 text-white flex items-center justify-between py-4 px-8 pr-40 pl-40">
      <div>
        <img src="../public/image.png" alt="image1" className="h-15" />
      </div>
      <div className="flex items-center space-x-8">
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
