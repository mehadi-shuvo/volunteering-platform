import { setCredentials } from "../../redux/authSlice";
import API from "../../utils/axiosInstance";
import { TUser } from "../../utils/types/types";

interface LoginResponse {
  data: {
    user: TUser;
    accessToken: string;
    refreshToken: string;
  };
}

interface LoginApiParams {
  email: string;
  password: string;
}

import { AppDispatch } from "../../redux/store";

export const loginApi =
  ({ email, password }: LoginApiParams) =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await API.post<LoginResponse>("/auth/login", {
        email,
        password,
      });
      console.log({
        user: res.data?.data.user,
        accessToken: res.data?.data.accessToken,
      });

      dispatch(
        setCredentials({
          user: res.data?.data.user,
          accessToken: res.data?.data.accessToken,
        })
      );
    } catch (error) {
      console.error("Login failed", error);
    }
  };
