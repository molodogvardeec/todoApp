import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePickerInput } from "@mantine/dates";

export default function Form() {
  const form = useForm({
    mode: "controlled",
    initialValues: {
      text: "",
      date: null
    },

    validate: {
      text: (value) => (value.length > 0 ? null : "Invalid text"),
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
        valueFormat="YYYY-MM-DD"
        key={form.key("date")}
        {...form.getInputProps("date")}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
        <Button type="reset" variant='filled' onClick={form.reset}>reset</Button>
      </Group>
    </form>
  );
}
