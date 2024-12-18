import { Select, Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateTimePicker } from "@mantine/dates";
import { notifications } from "@mantine/notifications";
import PriorityBadge from "./badge";

export default function Form(props) {
  const { handleAddTask, setEditInput, editInput } = props;
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      text: "",
      date: null,
      select: "",
      description: "",
    },

    validate: {
      text: (value) => (value.length > 0 ? null : "Invalid text"),
      date: (value) => (value ? null : "Invalid date"),
      select: (value) => (value.length > 0 ? null : "Invalid priority"),
    },
  });

  return (
    <form
      className="form"
      onSubmit={form.onSubmit((values) => {
        handleAddTask({ ...values, id: Date.now() });
        notifications.show({
          autoClose: 1000,
          color: "green",
          title: "Задача успешно создана",
          message: values.text,
          position: "top-right",
        });
      })}
    >
      <h1>To-Do Application</h1>
      <Group grow align="stretch">
        <TextInput
          // value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          withAsterisk
          label="Название"
          placeholder="Введи название"
          key={form.key("text")}
          {...form.getInputProps("text")}
        />
        <TextInput
          label="Описание"
          placeholder="Введи описание"
          key={form.key("description")}
          {...form.getInputProps("description")}
        />
        <DateTimePicker
          withAsterisk
          label="Дата и время"
          placeholder="Date pick"
          valueFormat="YYYY-MM-DD HH:mm"
          key={form.key("date")}
          {...form.getInputProps("date")}
        />
        <Select
          label="Приоритет"
          placeholder="Выбери приоритет"
          renderOption={PriorityBadge}
          data={[
            { value: "Высокий", label: "Высокий", color: "red" },
            { value: "Средний", label: "Средний", color: "orange" },
            { value: "Низкий", label: "Низкий", color: "green" },
          ]}
          key={form.key("select")}
          {...form.getInputProps("select")}
        />
      </Group>
      <Group className="buttons" justify="flex-end" mt="md" grow>
        <Button fz="xl" className="submit" type="submit">
          Добавить задание
        </Button>
      </Group>
    </form>
  );
}
