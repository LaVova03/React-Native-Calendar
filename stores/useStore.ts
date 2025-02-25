import { EventFormData } from "@/types/types";
import { create } from "zustand";
import { StoreState } from "./types";

export const useStore = create<StoreState>((set) => ({
  data: [],
  isModal: {
    form: false,
    edit: false,
    confirm: false,
  },
  setData: (data: EventFormData[]) => set({ data }),
  setIsModal: (key: keyof StoreState["isModal"], value: boolean) =>
    set((state) => ({
      isModal: {
        ...state.isModal,
        [key]: value,
      },
    })),
}));
