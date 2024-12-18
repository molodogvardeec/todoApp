
import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todos, handleEditTask, deleteTask } = props;

  return (
    <ul>
      {todos.map((todo, i) => (
        <Todo
          key={i}
          handleEditTask={handleEditTask}
          deleteTask={deleteTask}
          todo={todo}
        />
      ))}
    </ul>
  );
}
