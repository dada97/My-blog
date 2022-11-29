import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./skills.css";
import { FaHtml5,FaCss3Alt } from "react-icons/fa";
import { SiThreedotjs,SiJavascript,SiTypescript,SiOpengl,SiReact} from "react-icons/si";


export default function Skills() {


   


  return (
    <div class="block">
      <div class="skills-inside">
        <h2 class="skills-title">Skills</h2>
        <div class="skills-description">
          
          <div>
            <span class="changeColor">
              <FaHtml5 size="80px"
                onMouseOver={({ target }) => (target.style.color = "#e34c26")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </span>
            <p> HTML</p>
          </div>


          <div>
            <span class="changeColor">
              <FaCss3Alt size="80px"
                onMouseOver={({ target }) => (target.style.color = "#264de4")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </span>
            <p> CSS</p>
          </div>

          <div>
            <span class="changeColor">
              < SiJavascript size="80px"
                onMouseOver={({ target }) => (target.style.color = "#f0db4f")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </span>
            <p> Javascript</p>
          </div>

          
          <div>
            <span class="changeColor">
              < SiTypescript size="80px"
                onMouseOver={({ target }) => (target.style.color = "#007acc")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </span>
            <p> Typescript</p>
          </div>

          <div>
            <span class="changeColor">
              < SiThreedotjs size="80px"
                onMouseOver={({ target }) => (target.style.color = "purple")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </span>
            <p> Three.js</p>
          </div>

          <div>
            <span class="changeColor">
              < SiOpengl size="80px"
                onMouseOver={({ target }) => (target.style.color = "#5586a4")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </span>
            <p> Three.js</p>
          </div>


          
          <div>
            <span class="changeColor">
              < SiReact size="80px"
                onMouseOver={({ target }) => (target.style.color = "61dafb")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </span>
            <p> ReactJS</p>
          </div>


      
        </div>
      </div>
    </div>
  );
}
