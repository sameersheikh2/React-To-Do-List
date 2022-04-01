import React from 'react'

function Todoitem(props) {

return (
    <div className='todo-list'>
      <input type="checkbox"/>
      <p>{props.item.text}</p>
    </div>
  )
}

export default Todoitem;