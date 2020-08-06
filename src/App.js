import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

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
  
  toggleTask = itemId => {
    console.log(itemId);
    // In the grocery array, find the item that was clicked
    // (looking for the item with itemId)
    // Toggle the purchased field on that item
    // Return all other items untouched
    this.setState({

      TodoData: this.state.TodoData.map(item => {
        if (itemId === item.id) {
          return {
            // return the item with purchased field toggled
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
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
  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      TodoData: this.state.TodoData.filter(item => !item.completed)
    });
  };


	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<div>
          <TodoList todoList={this.state.TodoData} toggleTask={this.toggleTask} />
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
