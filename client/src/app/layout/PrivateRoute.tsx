import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const accessToken = useSelector(
    (state: { auth: { accessToken: string } }) => state.auth.accessToken
  );

  if (!accessToken) {
    return <Navigate to={`/auth/login`} />;
  }
  return children;
};

export default PrivateRoute;
