import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/rootReducer";
import TodoListItem from "features/todoList/TodoListItem";
import { toggleTodo } from "./todoSlice";

const TodoList = (): JSX.Element => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo))}
        />
        // <TodoListItem key={todo.id} id={todo.id} completed={todo.completed} text={todo.text} />
      ))}
    </ul>
  );
};

export default TodoList;
