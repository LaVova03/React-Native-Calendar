import { Moment } from "moment";
import React from "react";

export interface EventFormData {
  eventName: string;
  startDate: string;
  startTime: string;
  repeat: string;
  id?: number;
}

export interface EventCardProps {
  event: EventFormData;
  setIdEvent?: (value: number | null) => void;
  setPutevent?: (value: EventFormData) => void;
}

export interface FormProps {
  selectedDate?: Moment | null;
  events?: Event[];
  setEvents?: React.Dispatch<React.SetStateAction<Event[]>>;
  editEvent?: EventFormData | null;
}

export interface SelectProps {
  setFormData: React.Dispatch<React.SetStateAction<EventFormData>>;
  formData: EventFormData;
}

export interface ModalFormProps {
  children: React.ReactNode;
}

export interface ConfirmProps {
  setConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}
