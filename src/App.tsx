import { createBrowserRouter, RouterProvider } from "react-router";
import Index from "./pages";


const router = createBrowserRouter([
  { path: "/", element: <Index /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
