import React from "react";
import I4G from "../images/I4G.png";
import Zuri from "../images/Zuri.Internship_Logo.png";

const Footer = () => {
  return (
    <footer>
      <figure className="Zuri">
        <img style={{ width: "100%" }} src={Zuri} alt="Zuri-logo" />
      </figure>
      <p>HNG Internship 9 Frontend Task</p>
      <figure className="I4G">
        <img style={{ width: "100%" }} src={I4G} alt="I4G-logo" />
      </figure>
    </footer>
  );
};

export default Footer;
