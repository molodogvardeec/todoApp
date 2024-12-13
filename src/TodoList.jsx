import { Badge, Card, Group, Text, Title } from "@mantine/core";
import React from "react";

export default function TodoList(props) {
  const { todos } = props;
  console.log(todos);
  return (
    <ul>
      {todos.map((todo, i) => {
        const year = todo.date.getFullYear();
        const month = String(todo.date.getMonth() + 1).padStart(2, "0");
        const day = String(todo.date.getDate()).padStart(2, "0");
        const hours = String(todo.date.getHours()).padStart(2, "0");
        const minutes = String(todo.date.getMinutes()).padStart(2, "0");
        const color =
          todo.select == "Высокий"
            ? "red"
            : todo.select == "Средний"
            ? "orange"
            : todo.select == "Низкий"
            ? "green"
            : null;
        return (
          <Card radius="md" mt="xs" shadow="xl" withBorder key={i}>
            <Group justify="space-between">
              <Title order={4}>{todo.text}</Title>
              <Badge color={color}>{todo.select}</Badge>
            </Group>
            <Text>{todo.description}</Text>
            <Text>
              {day}.{month}.{year} {hours}:{minutes}
            </Text>
          </Card>
        );
      })}
    </ul>
  );
}
