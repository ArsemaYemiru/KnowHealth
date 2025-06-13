import {
  createTheme,
  MantineProvider,
  type MantineColorsTuple,
} from "@mantine/core";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import App from "./App.tsx";

const base: MantineColorsTuple = [
  "#e6f7fd",
  "#d0eefd",
  "#a0dbfa",
  "#6ec8f6",
  "#42b6f3",
  "#26a5ed", 
  "#1997e2",
  "#0f83c9",
  "#096fb0",
  "#055e99",
];

const theme = createTheme({
  colors: {
    primary: base,
  },
  primaryColor: "primary",
  primaryShade: { light: 9, dark: 9 },
  defaultRadius: "md",
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
