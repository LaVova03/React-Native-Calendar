import { EventFormData } from "@/types/types";

export interface StoreState {
  isModal: {
    form: boolean;
    edit: boolean;
    confirm: boolean;
  };
  data: EventFormData[];
  setData: (events: EventFormData[]) => void;
  setIsModal: (key: keyof StoreState["isModal"], value: boolean) => void;
}
