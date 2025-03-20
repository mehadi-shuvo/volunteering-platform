/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from "../../utils/types/types";
import API from "../../utils/axiosInstance";
import { AppDispatch } from "../../redux/store";
import { setCredentials } from "../../redux/authSlice";
import toast from "react-hot-toast";

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
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Update failed. Try again!", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
    }
  };
