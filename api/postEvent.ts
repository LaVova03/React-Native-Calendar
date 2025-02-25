import axios from "axios";
import { BASE_URL } from "./constants";
import { EventFormData } from "@/types/types";

export const postEvent = async (data: EventFormData) => {
  try {
    const response = await axios.post(`${BASE_URL}Products`, data);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log("error with post data", error);
  }
};
