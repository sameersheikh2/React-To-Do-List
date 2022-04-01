import React from "react";
import "./App.css";
import tododata from "./components/Tododata";
import Todoitem from "./components/Todoitem";

function App() {
  const todoitems = tododata.map((item) => 
    <Todoitem key={item.id} item={item} />,
    );
    console.log("todoitems",todoitems)

  return (
    <div className="App">
      {todoitems}
    </div>
  );
}

export default App;
