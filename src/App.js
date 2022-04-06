import React, { useState } from "react";
import "./App.css";
// import tododata from "./components/Tododata";
import Todoitem from "./components/Todoitem";

function App(props) {

  const [inputTask, setInputTask] = useState("");
  const [toDoList , setToDoList] = useState([]);
  console.log("inputTask", inputTask)

  const handleClick = ()=>{
    toDoList.push({description: inputTask, isComplete: false})
    setToDoList(toDoList)
    setInputTask("")
  };

  const deleteTask = (index) => {
    const newList =  toDoList.filter((item,i)=> i!==index);
    setToDoList(newList)
  };

  const markAsDone = (index) =>{
    const list = [...toDoList];
    list[index].isComplete = !list[index].isComplete;
    setToDoList(list);
  }

  console.log("toDoList", toDoList);

  return (
    <div className="App-background">
      <p className="heading-text">My react to do</p>
      <div className="container">
        <div>
          <input
            type="text"
            value={inputTask}
            onChange={(e) => {
              setInputTask(e.target.value);
            }}
          ></input>
          <button className="add-button" onClick={handleClick}>
            Add
          </button>
        </div>
        <div>
          {toDoList?.length ? (
            toDoList.map((toDoObject, index) => (
              <Todoitem
                index={index}
                item={toDoObject}
                deleteTask={deleteTask}
                markAsDone={markAsDone}
              />
            ))
          ) : (
            <p className="no-item-text">No task added !</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
