declare module "react-native-calendar-picker" {
  import * as React from "react";
  import { ViewStyle, TextStyle } from "react-native";

  export interface CalendarPickerProps {
    onDateChange: (date: any) => void;
    selectedDate?: string | Date;
    todayBackgroundColor?: string;
    selectedDayColor?: string;
    selectedDayTextColor?: string;
    headerWrapperStyle?: ViewStyle;
    headerStyle?: ViewStyle;
    monthTitleStyle?: TextStyle;
    dateTextStyle?: TextStyle;
    customDatesStyles?: Array<{
      date: Date;
      style: ViewStyle;
      textStyle: TextStyle;
    }>;
    previousComponent?: React.ReactNode;
    nextComponent?: React.ReactNode;
  }

  export default class CalendarPicker extends React.Component<CalendarPickerProps> {}
}
