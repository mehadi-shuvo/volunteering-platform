import axios from "axios";
import { baseURL } from "../../utils/axiosInstance";

export const joinEventApi = async ({
  eventId,
  userId,
}: {
  eventId: string;
  userId: string;
}) => {
  const res = await axios({
    method: "post",
    url: `${baseURL}/volunteer-events/join`,
    data: {
      eventId,
      userId,
    },
  });

  return res;
};
