import { setCredentials } from "../../redux/authSlice";
import API from "../../utils/axiosInstance";
import { LoginApiParams, LoginResponse } from "../../utils/types/types";

import { AppDispatch } from "../../redux/store";

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
      return res.data.data;
    } catch (error) {
      console.error("Login failed", error);
    }
  };
