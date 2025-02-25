import * as React from "react";
import renderer from "react-test-renderer";
import EventCard from "@/components/ui/EventCard";
import { EventFormData } from "@/types/types";

jest.mock("@/stores/useStore", () => ({
  useStore: jest.fn(() => ({ setIsModal: jest.fn() })),
}));

jest.mock("react-native-vector-icons/Ionicons", () => "Ionicons");

const mockSetIdEvent = jest.fn();
const mockSetPutevent = jest.fn();

const event: EventFormData = {
  eventName: "Test Event",
  startDate: "Jan 1.2025",
  startTime: "10:00 AM",
  repeat: "None",
};

describe("EventCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <EventCard
          event={event}
          setIdEvent={mockSetIdEvent}
          setPutevent={mockSetPutevent}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
