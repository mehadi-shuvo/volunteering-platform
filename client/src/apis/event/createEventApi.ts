import axios from "axios";
import { baseURL } from "../../utils/axiosInstance";
import { TEvent } from "../../utils/types/types";

export const createEventApi = async (event: TEvent) => {
  console.log(event);

  const res = await axios({
    method: "post",
    url: `${baseURL}/volunteer-events/`,
    data: event,
  });

  console.log(res);
};
