import React, { useState } from "react";
import "./App.css";
import tododata from "./components/Tododata";
import Todoitem from "./components/Todoitem";

function App() {

  return (
  <div className="App-background">
    <p className="heading-text">My react to do</p>
    <div className="container">
      <div>
        <input type="text"></input>
        <button className="add-button" >Add</button>
      </div>
      <div>
        <p className="no-item-text">No task added !</p>
        <Todoitem />
      </div>
    </div>
  </div>
  );
}

export default App;
