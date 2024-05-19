import React from "react";
import "./NavBar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logoWite.png";
import search_icon_lite from "../../assets/search-b.png";
import search_icon_dark from "../../assets/search-w.png";
import toggle_lite from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

const NavBar = ({theme,setTheme}) => {

   const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <div className="navbar">
      <img src={theme == 'light' ? logo_light : logo_dark} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Sing In</li>
        <li>Sing Up</li>
        <li>About US</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={theme == 'light' ? search_icon_dark : search_icon_lite} alt="" />
      </div>
      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_lite:toggle_dark} alt="" className = "toggle-icon"/>
    </div>
  );
};

export default NavBar;