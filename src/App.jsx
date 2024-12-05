import { MantineProvider } from "@mantine/core";
import Form from "./Form";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export default function App() {
  return (
    <MantineProvider>
      <Form />
    </MantineProvider>
  );
}
