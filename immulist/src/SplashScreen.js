import React from "react";
import "./styles.css";

import ClientInfo from './ClientInfo'

export default function SplashInfo() {
  return (
    <div className="Logo">
      <h1>Immunization App</h1>
      <div classname="AppImage">
        <img src="https://image.flaticon.com/icons/svg/1086/1086932.svg" width="75" height="75"> 
        </img>
        <ClientInfo />
        
      </div>
      <h2>Placeholder</h2>
    </div>
  );
}
