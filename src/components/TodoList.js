// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
return (
    <div>
        {props.todoList.map(getErDone => ( 
            <Todo key={getErDone.id} getErDone={getErDone} toggleTask={props.toggleTask}/>)
            )}
    </div>
)}

export default TodoList

