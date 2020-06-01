import React from "react";

interface TodoProps {
  completed: boolean;
  text: string;
}

const TodoListItem = ({ completed, text }: TodoProps) => {
  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
    </li>
  );
};

export default TodoListItem;
