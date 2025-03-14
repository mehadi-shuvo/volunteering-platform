import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>this is a error page</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
]);
