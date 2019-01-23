

window.setTimeout(function() {
  // All code goes here
  let todos = ["Buy New Turtle"];

  function toDoList() {
    let input = prompt("What would you like to do?");

    while(input.toLowerCase() !== "quit") {
      // handle input
      if(input.toLowerCase() === "list") {
        listTodos();
      } else if (input.toLowerCase() === "new") {
        newTodos();
      } else if (input.toLowerCase() === "delete") {
        deleteTodos();
      }

      input = prompt("What would you like to do?");
    }

    console.log("OK, YOU QUIT THE APP");
  }

  function listTodos() {
    console.log("**********");
    todos.forEach(function(todo, i) {
      console.log(`${i}: ${todo}`);
    });

    console.log("**********");
  }

  function newTodos() {
    let newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added ToDo");
  }

  function deleteTodos() {
    let index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted ToDo");
  }


  toDoList();
}, 500);
