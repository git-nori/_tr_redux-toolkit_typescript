import React from "react";

import AddTodo from "features/todoList/AddTodo";
import TodoList from "features/todoList/TodoList";
import Fotter from "features/visibilityFilter/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Fotter />
    </div>
  );
}

export default App;
