
import './CSS/Todo.css';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Todoitems from './TodoItems.jsx';

const Todo = () => {

  const [items,setItems]=useState([]);
  const input_ref=useRef(null);

  const handleRemove=(id)=>{
     setItems(items=>items.filter(item=>item.id !==id));
  }


  const add =()=>{

    // e.preventDefault();
    
    const newText=input_ref.current.value;
    
    if(newText==='') return;

    const newItem={id:items.length,text:newText};

    setItems(items=>[...items,newItem]);
    input_ref.current.value='';
  }
  
  useEffect(()=>{
    const store=localStorage.getItem('todo_store');
    // console.log(store);
    if(store){
      setItems(JSON.parse(store));
    }
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
      localStorage.setItem('todo_store',JSON.stringify(items));
  },100);
  },[items]);

  const handleClear=()=>{
    setItems([]);
  }

  const handleComplete=(id)=>{
    
    window.alert("Completed!!!");
    
      setItems(items => items.filter(item => item.id !== id));
  
  }

  return (
    <div className='todo'>
      <div className="header">TO-DO LIST</div>
      <div className="todo_add">
        <input  ref={input_ref} type="text" placeholder='Add Your Task' className='input_field'/>
        <div  onClick={add} className="add_btn">ADD</div>
      </div>
      <div className="clear" onClick={handleClear}>Clear</div>
      {/* <div className="todo_arr">
        {items.map((item)=>(
            <Todoitems id={item.id} text={item.text} remove={handleRemove}/>
        ))}
        
      </div> */}
      <TransitionGroup className="todo_arr">
        {items.map((item)=>(
          <CSSTransition key={item.id} timeout={500} classNames="fade">
            <Todoitems id={item.id} text={item.text} remove={handleRemove} done={handleComplete}/>
          </CSSTransition>
        ))}
      </TransitionGroup>

    </div>
  );
}

export default Todo;
