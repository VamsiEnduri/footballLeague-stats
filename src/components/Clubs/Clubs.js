import React from "react";
import "./Clubs.css";
import { data } from "../../data";
import { BsArrowRight } from "react-icons/bs";
const Clubs = () => {
  return (
    <div className="clubs">
      <p>Clubs</p>
      <div className="club-container">
        {data.teams.map(function (item, index) {
          return (
            <div className="club-card" key={index}>
              <img src={item.images.stadium} alt="" />
              <div className="club-info">
                <img src={item.images.crest} alt="" />
                <span>
                  <p>{item.meta.name}</p>
                  <p>{item.meta.stadium}</p>
                  <p className="arrow">
                    profile <BsArrowRight />
                  </p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clubs;
