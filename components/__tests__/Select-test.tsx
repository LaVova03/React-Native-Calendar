import * as React from "react";
import renderer from "react-test-renderer";
import Select from "@/components/ui/Select";
import { EventFormData } from "@/types/types";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

const mockSetFormData = jest.fn();

const mockFormData: EventFormData = {
  eventName: "Test Event",
  startDate: "2024-02-25",
  startTime: "12:00",
  repeat: "",
};

it("renders Select component correctly", () => {
  const tree = renderer
    .create(<Select formData={mockFormData} setFormData={mockSetFormData} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
