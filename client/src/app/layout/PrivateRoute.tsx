import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const accessToken = useSelector(
    (state: { auth: { accessToken: string } }) => state.auth.accessToken
  );

  const user = localStorage.getItem("user");
  const res = user ? JSON.parse(user) : null;

  if (!accessToken) {
    return <Navigate to={`/auth/login`} />;
  }
  if (!res) {
    return <Navigate to={`/auth/login`} />;
  }
  return children;
};

export default PrivateRoute;
