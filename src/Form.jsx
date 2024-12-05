import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import "@mantine/core/styles.css";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";

export default function Form() {
  const [value, setValue] = useState(null);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      text: "",
      termsOfService: false,
    },

    validate: {
      text: (value) => (value.length > 0 ? null : "Invalid text"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Введи задачу"
        placeholder="Введи задачу"
        key={form.key("text")}
        {...form.getInputProps("text")}
      />
      <DatePickerInput
        label="Pick date"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
