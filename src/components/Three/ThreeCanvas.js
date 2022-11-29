import React from "react";
import { useEffect } from "react";
import ThreeView from "./ThreeView";
import "./ThreeCanvas.css"

export default function ThreeCanvas() {
  useEffect(() => {
  
    const three = new ThreeView();
  }, []);

  return (<div id="ThreeScene"></div>);
}
