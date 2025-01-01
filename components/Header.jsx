import React, { useState } from "react";
import "../App.css";
import { useTheme } from "../hooks/useTheme";
export default function Header() {
  
const [isDark,setIsDark] = useTheme()
console.log(isDark)
  return (
    <header className={`header-container ${isDark? 'dark':''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <span className="theme-changer" onClick={()=>{
            
            localStorage.setItem('isDarkMode',!isDark);
            setIsDark(!isDark);
          }
        }>
          <i className={`fa-solid fa-${isDark ? 'sun':'moon'}`}></i>&nbsp;&nbsp;{isDark?'Light':'Dark'} Mode
        </span>
      </div>
    </header>
  );
}
