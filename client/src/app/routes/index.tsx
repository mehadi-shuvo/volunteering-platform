import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Events from "../pages/event/Events";
import Profile from "../pages/profile/Profile";
import AuthLayout from "../layout/AuthLayout";
import Registration from "../pages/auth/Registration";
import Login from "../pages/auth/Login";
import PrivateRoute from "../layout/PrivateRoute";
import HelpPost from "../pages/help post/HelpPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>this is a error page</div>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Events />
          </PrivateRoute>
        ),
      },
      {
        path: "/help-post",
        element: (
          <PrivateRoute>
            <HelpPost />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "user-registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
