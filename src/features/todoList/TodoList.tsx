import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import TodoListItem from "features/todoList/TodoListItem";

const TodoList = (): JSX.Element => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
        // <TodoListItem key={todo.id} id={todo.id} completed={todo.completed} text={todo.text} />
      ))}
    </ul>
  );
};

export default TodoList;
