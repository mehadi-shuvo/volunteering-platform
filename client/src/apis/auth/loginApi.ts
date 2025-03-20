import { setCredentials } from "../../redux/authSlice";
import API from "../../utils/axiosInstance";
import { LoginApiParams, LoginResponse } from "../../utils/types/types";

import { AppDispatch } from "../../redux/store";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

export const loginApi =
  ({ email, password }: LoginApiParams) =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await API.post<LoginResponse>("/auth/login", {
        email,
        password,
      });
      dispatch(
        setCredentials({
          user: res.data?.data.user,
          accessToken: res.data?.data.accessToken,
        })
      );
      toast.success("Login successful!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return res.data.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || "Login failed. Try again!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  };
