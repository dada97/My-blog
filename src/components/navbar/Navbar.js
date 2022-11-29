import React, { useState } from "react";
import "./Navbar.css";

var item = document.querySelectorAll('nav a');




export default function Navbar() {




    const handleClick = (e)=>{
        
        let marker = document.querySelector('#marker');
      
        marker.style.left = e.offsetLeft+"px";
        marker.style.width = e.offsetWidth+"px";
    }


  return (
    <div className="nav">
        <a className = "logo" href="#Title">MY Blog</a>
        {/* <nav className="navbar">
            <ul className="nav_links">
                <div id ="marker"></div>
                <li><a className = "other" onClick={e=>handleClick(e.target)} href="#home">home</a></li> 
                <li><a className = "other" onClick={e=>handleClick(e.target)} href="#about">about</a></li> 
                <li><a className = "other" onClick={e=>handleClick(e.target)} href="#portfolio">portfolio</a></li> 
            </ul>

        </nav> */}
        {/* <a className="cta" href="#"><button>Contact</button></a> */}
    </div>

  );
}
