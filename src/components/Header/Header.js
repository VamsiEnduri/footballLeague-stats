import React from "react";
import logo from "../../assets/logo.jpg";
import { data } from "../../data";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="team-logos">
        <p>Club Cities :</p>
        {data.teams.map(function (item, index) {
          return (
            <a
              href={item.social.facebook}
              className="anchor"
              target={"_blank"}
              key={index}
            >
              <img src={item.images.crest} alt="" />
            </a>
          );
        })}
      </div>
      <div className="header">
        <div className="name">
          <img src={logo} alt="" width={100} height={100} />
          <p>Premier League</p>
        </div>
        <p>Spread The Love</p>
      </div>
    </div>
  );
};

export default Header;
