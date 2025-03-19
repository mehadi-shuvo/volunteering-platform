import axios from "axios";
import { baseURL } from "../../utils/axiosInstance";

export const createHelpPostApi = async (post: {
  id: string;
  title: string;
  description: string;
  urgency_level: string;
  posted_by: string;
}) => {
  const res = await axios({
    method: "post",
    url: `${baseURL}/help-post/`,
    data: post,
  });

  return res.data;
};
