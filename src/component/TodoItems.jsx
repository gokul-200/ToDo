import React from 'react'

const TodoItems = ({id,text,remove,done}) => {
  
  const Onremove=()=>{
      remove(id);
  }

  const Done=()=>{
    done(id);
  }

  return (
    <div>
        <div className="todo_items">
            
            <div className="task_name">
              <h1>{text}</h1>
            </div>
            <img src="./assets/checked.png" id="tick" alt="tick" onClick={Done} />
            <img src="./assets/cancel.png" onClick={Onremove} id="cancel" alt="delete" />
        </div>
        
    </div>
  )
}

export default TodoItems;