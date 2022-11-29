import React, { useState } from "react";
import img from "../../../../src/texture/me.jpg";
import flag from "../../../../src/texture/malaysia.png";
import "./about.css";

export default function About() {
  return (
    <div class="block">
      <div class="inside">
        <h1 class="about-title">About Me</h1>

        <div class="description">
          <div class="potrait">
            <img class="img" src={img}></img>
          </div>
          <div>
            <p class="name">Name:</p>
            <p class="name-description">Tan Yong Da</p>
          </div>

          <div>
            <p class="from">From:</p>
            <div class="from-description">
              <p class="malaysia">Malaysia</p>
              <img class="flag" src={flag}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
