import axios from "axios";
import { baseURL } from "../../utils/axiosInstance";

interface Filters {
  category?: string;
  location?: string;
  date?: string; // Use string for simplicity (ISO format)
}

export const getEventsApi = async (filters: Filters = {}) => {
  try {
    const res = await axios.get(`${baseURL}/volunteer-events`, {
      params: filters, // Pass filters as query parameters
    });
    console.log(res.data.data);

    return res.data.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
