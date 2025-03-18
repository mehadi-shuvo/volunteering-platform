import axios from "axios";
import { baseURL } from "../../utils/axiosInstance";
import { TCommentPost } from "../../utils/types/types";

export const addCommentApi = async ({
  id,
  comment,
}: {
  id: string;
  comment: TCommentPost;
}) => {
  const res = await axios({
    method: "put",
    url: `${baseURL}/help-post/comment/${id}`,
    data: comment,
  });

  console.log(res.data.data);

  return res.data.data;
};
