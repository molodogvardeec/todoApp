import { Badge, Card, Group, Text, Title, Tooltip } from "@mantine/core";
import React from "react";

export default function TodoList(props) {
  const { todos } = props;
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
          <Card
            className="card"
            radius="md"
            mt="xs"
            shadow="xl"
            withBorder
            key={i}
          >
            <Group justify="space-between" wrap="flex-wrap">
              <Tooltip className="tooltip" label={todo.text} multiline w={350}>
                <Title className="title" order={4}>
                  {todo.text}
                </Title>
              </Tooltip>
              <Badge className="badge" color={color}>
                {todo.select}
              </Badge>
            </Group>
            <Tooltip
              className="tooltip"
              label={todo.description}
              multiline
              w={350}
            >
              <Text className="text">{todo.description}</Text>
            </Tooltip>
            <Text>
              {day}.{month}.{year} {hours}:{minutes}
            </Text>
          </Card>
        );
      })}
    </ul>
  );
}
