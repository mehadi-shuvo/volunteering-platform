import axios from "axios";
import { baseURL } from "../../utils/axiosInstance";

export const getHelpPostApi = async () => {
  const res = await axios({
    method: "get",
    url: `${baseURL}/help-post`,
  });

  return res.data.data;
};
