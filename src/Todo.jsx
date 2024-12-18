import { Input } from "@mantine/core";
import React, { useState } from "react";
import {
  Badge,
  Card,
  Group,
  Text,
  Title,
  Tooltip,
  Button,
} from "@mantine/core";

export default function Todo({ todo, handleEditTask, deleteTask }) {
  const [isEdit, setIsEdit] = useState(false); //false
  const [text, setText] = useState(() => todo.text);

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
    <Card className="card" radius="md" mt="xs" shadow="xl" withBorder>
      <Group justify="space-between" wrap="flex-wrap">
        <Tooltip
          className="tooltip"
          position="top-start"
          offset={9}
          label={todo.text} //
          multiline
        >
          {isEdit ? (
            <Input value={text} onChange={(e) => setText(e.target.value)} />
          ) : (
            <Title className="title" order={4}>
              {todo.text}
            </Title>
          )}
        </Tooltip>
        <Badge className="badge" color={color}>
          {todo.select}
        </Badge>
      </Group>
      <Tooltip
        className="tooltip"
        label={todo.description}
        position="top-start"
        offset={9}
        multiline
      >
        <Text className="text">{todo.description}</Text>
      </Tooltip>
      <Text>
        {day}.{month}.{year} {hours}:{minutes}
      </Text>
      <Group>
        <Button onClick={() => deleteTask(todo.id)}>Delete</Button>
        {isEdit ? (
          <Button
            onClick={() => {
              setIsEdit(false);
              handleEditTask(todo.id, text);
            }}
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Edit
          </Button>
        )}
      </Group>
    </Card>
  );
}
