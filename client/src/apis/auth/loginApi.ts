import axios from "axios";
import { TUser } from "../../utils/types/types";

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: TUser;
    accessToken: string;
  };
}

export const loginApi = async (data: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axios.post(
    "http://localhost:3000/api/auth/login",
    data,
    {
      withCredentials: true, // Ensure cookies are sent and received
    }
  );
  return response.data;
};
