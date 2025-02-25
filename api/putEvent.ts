import axios from "axios";
import { BASE_URL } from "./constants";
import { EventFormData } from "@/types/types";

export const putEvent = async (data: EventFormData) => {
  try {
    const response = await axios.put(`${BASE_URL}Products/${data.id}`, data);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log("error with put data", error);
  }
};
