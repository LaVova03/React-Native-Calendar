import axios from "axios";
import { BASE_URL } from "./constants";

export const deleteEvent = async (id: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}Products/${id}`);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log("error with delete event", error);
  }
};
