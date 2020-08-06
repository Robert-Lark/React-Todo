import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { ThemeProvider } from "@material-ui/styles";
import Header from "/Users/quietcalmrecords/School/Unit3/React-Todo/src/components/UI/Header.js";
import theme from "/Users/quietcalmrecords/School/Unit3/React-Todo/src/components/UI/Theme.js";
import "./components/Todo.css";

const TodoData = [
	{
		task: "Organize Garage",
		id: 1528817077286,
		completed: false,
	},
	{
		task: "Bake Cookies",
		id: 1528817084358,
		completed: false,
	},
];


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			TodoData,
		};
	}
	toggleTask = (itemId) => {
		this.setState({
			TodoData: this.state.TodoData.map((item) => {
				if (itemId === item.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			}),
		});
	};
	handleChanges = (event) => {
		this.setState({ task: event.target.value });
	};
	submitTask = (event) => {
		event.preventDefault();
		this.setState({
			TodoData: [
				...this.state.TodoData,
				{
					task: this.state.task,
					id: this.state.id,
					completed: false,
				},
			],
		});
		this.setState({
			task: "",
		});
	};
	clearCompleted = (event) => {
		event.preventDefault();
		this.setState({
			TodoData: this.state.TodoData.filter((item) => !item.completed),
		});
	};

	render() {
		return (

				<div className="background">
					<ThemeProvider theme={theme}>
						<Header></Header>
					</ThemeProvider>
					<div>
						<TodoList
							todoList={this.state.TodoData}
							toggleTask={this.toggleTask}
						/>
						<TodoForm
							// addTask={this.addTask}
							submitTask={this.submitTask}
							handleChanges={this.handleChanges}
							clearCompleted={this.clearCompleted}
						/>
					</div>
				</div>

		);
	}
}

export default App;
