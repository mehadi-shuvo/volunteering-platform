import { TUser } from "../../utils/types/types";
import API from "../../utils/axiosInstance";
import { AppDispatch } from "../../redux/store";
import { setCredentials } from "../../redux/authSlice";

export const updateUserApi =
  ({ user, id }: { user: TUser; id: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await API.put(`/auth/${id}`, user);
      console.log(res.data.data);

      dispatch(
        setCredentials({
          user: res.data.data,
          accessToken: localStorage.getItem("accessToken") || "",
        })
      );
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
