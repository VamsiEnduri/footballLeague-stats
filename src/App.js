import React from "react";
import Header from "./components/Header/Header";
import Clubs from "./components/Clubs/Clubs";
import Standings from "./components/Standings/Standings";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="data">
        <Clubs />
        <Standings />
      </div>
    </div>
  );
};

export default App;
