import React from "react";
import "./App.css";
import "h8k-components";
import FootballMatchesData from "./components/football-data";
const title = "Football Competitions";

function App({ articles }) {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <FootballMatchesData />
    </div>
  );
}

export default App;
