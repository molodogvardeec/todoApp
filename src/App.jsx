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

  const handleAddTask = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  return (
    <MantineProvider>
      <Notifications />
      <Form handleAddTask={handleAddTask} />
      <TodoList todos={todos} />
    </MantineProvider>
  );
}
