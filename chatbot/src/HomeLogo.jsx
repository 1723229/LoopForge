import React from "react";
import nexusMark from "./assets/nexus-loop-ai.png";
import "./home-logo.css";

export default function HomeLogo() {
  return (
    <div className="home-logo" aria-hidden="true">
      <img className="home-logo-mark" src={nexusMark} alt="" />
    </div>
  );
}
