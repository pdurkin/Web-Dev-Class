var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "list"){
		listTodos();
	}
	else if(input === "new"){
		addTodo();
	}
	else if(input === "delete"){
		deleteTodo();
	}

	var input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodos(){
	console.log("**********");
		todos.forEach(function(todo, index){
			console.log(index + ": " + todo);
		});
		console.log("**********");
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
		//add new todo to todos array
		todos.push(newTodo);
		console.log("Item added to list.");
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
		//splice deletes 1 item at the index in teh array.
		todos.splice(index,1);
		console.log("Item deleted.");
}