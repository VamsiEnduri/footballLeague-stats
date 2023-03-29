import React from "react";
import "./Standing.css";
import { data } from "../../data";
// import { useSelector } from "react-redux";
const Standings = () => {
  //   const state = useSelector((state) => state.pl);

  //   const data = Object.entries(state);
  //   console.log(data);
  return (
    <div className="standings">
      <p>Standings </p>
      <table>
        <thead>
          <tr>
            <th>POS</th>
            <th>TEAM</th>
            <th>MP</th>
            <th>NRR</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {data.standings.map(function (item, index) {
            return (
              <tr key={index}>
                <td>{item.position}</td>
                <td>
                  <img src={item.url} width={30} height={30} />
                </td>
                <td>{item.stats.played}</td>
                <td>{item.stats.goalDifference}</td>
                <td>{item.stats.won}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
