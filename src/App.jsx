import { MantineProvider } from "@mantine/core";
import Form from "./Form";

export default function App() {
  return (
    <MantineProvider>
      <Form />
    </MantineProvider>
  );
}
