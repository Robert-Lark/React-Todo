// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	card: {
		border: "5px double #DCDCDC",
		borderRadius: "20px",
		boxShadow: "0 6px 6px rgba(0,0,0,0.2);",
		width: "30em",
		display: "flex",
		justifyContent: "space-around",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-around",
	},
	box: {
		display: "flex",
		justifyContent: "space-around",
	},
}));



const TodoList = (props) => {
    const classes = useStyles();
return (
	<Box className={classes.box}>
		{props.todoList.map((getErDone) => (
			<Card className={classes.card}>
				<CardContent className={classes.cardContent}>
					<Todo
						key={getErDone.id}
						getErDone={getErDone}
						toggleTask={props.toggleTask}
					/>
				</CardContent>
			</Card>
		))}
	</Box>
);}

export default TodoList

