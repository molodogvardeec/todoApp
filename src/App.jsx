import { MantineProvider, rem, createTheme } from "@mantine/core";
import Form from "./Form";
import React, { useState } from "react";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import { Notifications } from "@mantine/notifications";
import TodoList from "./TodoList";

const theme = createTheme({
  fontSizes: {
    xs: rem(8),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(48),
  },
});

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editInput, setEditInput] = useState(""); 

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTask = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };


  const handleAddTask = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  return (
    <MantineProvider>
      <Notifications />
      <Form
        editInput={editInput}
        handleAddTask={handleAddTask}
        setEditInput={setEditInput}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        handleEditTask={handleEditTask}
        deleteTask={deleteTask}
      />
    </MantineProvider>
  );
}
