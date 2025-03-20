import API from "../../utils/axiosInstance";

interface Filters {
  category?: string;
  location?: string;
  date?: string;
}

export const getEventsApi = async (filters: Filters = {}) => {
  try {
    const res = await API.get("/volunteer-events", {
      params: filters,
      withCredentials: true,
    });

    return res.data.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
