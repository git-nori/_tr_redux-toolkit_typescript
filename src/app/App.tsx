import React, { useEffect } from "react";

import AddTodo from "features/todoList/AddTodo";
import TodoList from "features/todoList/TodoList";
import Fotter from "features/visibilityFilter/Footer";
import "./App.css";
import { useDispatch } from "react-redux";
import { createTodoList, loadTodos } from "features/todoList/todoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch(createTodoList());
    } else {
      dispatch(loadTodos());
    }
  }, [dispatch]);
  
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Fotter />
    </div>
  );
}

export default App;
