import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center">
      <Toaster />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
