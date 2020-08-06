import React from "react";

const TodoForm = (props) => {
  
	return (
		<div>
			<form onSubmit={props.submitTask}>
				<input
					placeholder="Add To Do"
					name="task"
					value={props.task}
                    onChange={props.handleChanges}
				></input>
                <button>Add To Do</button>
                <button>Clear Completed</button>
			</form>

		</div>
	);
};

export default TodoForm;
