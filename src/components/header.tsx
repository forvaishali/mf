import React from "react";
import rishi from '../Images/saffronlogo.jpg';

const Header = () => {
  return (
    <div>
    <div className="navbar">
    
   
    <a href="#Agnihotra">Agnihotra</a>
    <a href="#contact">Hindu Heritage sites</a>
  <img src={rishi} alt="Moksha Farm" className="logo" />
     <a href="#home">About Moksha Farm</a>
  </div>
  </div>
  );
};

export default Header;