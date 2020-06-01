import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/rootReducer";
import TodoListItem from "features/todoList/TodoListItem";
import { toggleTodo } from "./todoSlice";
import { Todo } from "./types";
import { VisiblityFilter } from "features/visibilityFilter/visibilityFilterSlice";

const getVisibleTodos = (todos: Todo[], filter: VisiblityFilter): Todo[] => {
  switch (filter) {
    case VisiblityFilter.ShowAll:
      return todos;
    case VisiblityFilter.ShowCompleted:
      return todos.filter((todo) => todo.completed);
    case VisiblityFilter.ShowActive:
      return todos.filter((todo) => !todo.completed);
    default:
      throw new Error("Unknow filter: " + filter);
  }
};

const TodoList = (): JSX.Element => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) =>
    getVisibleTodos(state.todos, state.visiblityFilter)
  );

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
