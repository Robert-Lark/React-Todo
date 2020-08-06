import React from "react";
import "./Todo.css"


const Todo = (props) => {
	return (
	
				<div
					className={`task${props.getErDone.completed ? " completed" : ""}`}
					onClick={() => props.toggleTask(props.getErDone.id)}
				>
					<h2>To Do: {props.getErDone.task}</h2>
				</div>
			
	);
};

export default Todo;
