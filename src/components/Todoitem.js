import React from 'react'
import Delete from './Delete.png'

function Todoitem(props) {

return (
  <div className="todo-list jc-space row column">
    <span className={props.item.isComplete?"task-done":""} onClick={() => props.markAsDone(props.index)}>{props.item.description}</span>
    <img
      src={Delete}
      alt=""
      className="icon"
      onClick={() => props.deleteTask(props.index)}
    />
  </div>
);
}

export default Todoitem;