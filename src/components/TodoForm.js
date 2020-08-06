import React from "react";
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	form: {

		marginTop: "60px",
		display: "flex",
		justifyContent: "space-around",
	},
	button: {
		marginRight: "20px",
		marginLeft: "20px",
	}
}));

const TodoForm = (props) => {

	const classes = useStyles();
	return (
		<Box className={classes.form}>
			<form onSubmit={props.submitTask}>
				<Input
					placeholder="Get 'er Done!"
					name="task"
					value={props.task}
					onChange={props.handleChanges}
				></Input>
				<Button onClick={props.submitTask} className={classes.button}>
					Add To Do
				</Button>
				<Button onClick={props.clearCompleted} className={classes.button}>
					Clear Completed
				</Button>
			</form>
		</Box>
	);
};

export default TodoForm;
