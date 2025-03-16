import { AppDispatch } from "../../redux/store";
import API from "../../utils/axiosInstance";
import { logout } from "../../redux/authSlice";

export const logoutApi = () => async (dispatch: AppDispatch) => {
  await API.post("/auth/logout");
  dispatch(logout());
};
