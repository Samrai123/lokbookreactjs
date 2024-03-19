import React from "react";
//  import playStore from "./components/images/playstore.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android </p>
        {/* <img src={playStore} alt="playstore" />
         */}
      </div>

      <div className="midFooter">
        <h1>LookBook.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Sambhrant Rai</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/sam_bh_rant">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="http://instagram.com/sam_bh_rant">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
