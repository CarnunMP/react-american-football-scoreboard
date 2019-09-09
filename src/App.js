//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const score = (team, type) => (e) => { // Some trickery! :D
    console.log(e); // What exactly is this 'event object'?
    if (team === "home") {
      if (type === "touchdown") {
        return setHomeScore(homeScore + 7);
      } else if (type === "fieldGoal") {
        return setHomeScore(homeScore + 3);
      }
    } else if (team === "away") {
      if (type === "touchdown") {
        return setAwayScore(awayScore + 7);
      } else if (type === "fieldGoal") {
        return setAwayScore(awayScore + 3);
      }
    } else {
      return console.log("Invalid TEAM");
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={score("home", "touchdown")}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={score("home", "fieldGoal")}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={score("away", "touchdown")}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={score("away", "fieldGoal")}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
