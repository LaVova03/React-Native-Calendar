import axios from "axios";
import { BASE_URL } from "./constants";

export const getEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Products`);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log("error with get data", error);
  }
};
