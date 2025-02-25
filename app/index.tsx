import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment, { Moment } from "moment";
import { EventFormData } from "@/types/types";
import Form from "../components/ui/Form";
import CommonModal from "@/components/ui/CommonModal";
import { useStore } from "@/stores/useStore";
import { getEvents } from "@/api/getEvents";
import EventCard from "@/components/ui/EventCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import Confirm from "@/components/ui/Confirm";
import { deleteEvent } from "@/api/deleteEvent";
import { showAlert } from "@/utils/alert";

export default function MyCalendar() {
  const { data, setData, isModal, setIsModal } = useStore();
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [allEvents, setAllEvents] = useState<EventFormData[] | null>(null);
  const [idEvent, setIdEvent] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editEvent, setPutevent] = useState<EventFormData | null>(null);

  const showModal = (key: string) => {
    setIsModal(key as keyof typeof isModal, true);
  };

  useEffect(() => {
    const getAllEvents = async () => {
      const response = await getEvents();
      if (response?.data) {
        setAllEvents(response.data);
        setData(response.data);
      }
    };

    const deleteItem = async () => {
      if (confirmDelete && idEvent) {
        const response = await deleteEvent(idEvent);
        if (response?.data) {
          setConfirmDelete(false);
          setIdEvent(null);
          getAllEvents();
        }
      }
    };

    if (!allEvents) {
      getAllEvents();
    }
    if (confirmDelete) {
      deleteItem();
    }
  }, [allEvents, data, confirmDelete, idEvent]);

  const onDateChange = (date: Moment) => {
    const selectedMoment = moment(date);
    setSelectedDate(selectedMoment);
  };

  const customDatesStyles = data.map((event) => {
    const date = moment(event.startDate, "MMM DD.YYYY").toDate();

    return {
      date: date,
      style: { backgroundColor: "rgb(239 239 239)" },
      textStyle: { color: "rgb(255 200 0)", fontWeight: "bold" as "bold" },
    };
  });

  const createEvent = () => {
    if (!selectedDate) {
      return showAlert("warning", "selected a date first!");
    }
    const eventDate = moment(selectedDate, "MMM D.YYYY");
    const today = moment().startOf("day");

    if (eventDate.isBefore(today)) {
      showAlert("Error", "You cannot create an event in the past!");
      return;
    }
    showModal("form");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.contCalendar}>
        <CalendarPicker
          onDateChange={onDateChange}
          selectedDate={selectedDate?.toDate()}
          selectedDayColor="rgb(255, 213, 0)"
          selectedDayTextColor="black"
          customDatesStyles={customDatesStyles}
          headerWrapperStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
          previousComponent={
            <Ionicons name="chevron-back" size={30} color="black" />
          }
          nextComponent={
            <Ionicons name="chevron-forward" size={30} color="black" />
          }
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.showBtn} onPress={createEvent}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.labelBnt}>Create New Event</Text>
      </View>

      {/* Модальные окна */}
      {isModal.form ? (
        <View style={{ width: "100%" }}>
          <CommonModal>
            <Form selectedDate={selectedDate} />
          </CommonModal>
        </View>
      ) : isModal.confirm ? (
        <View style={{ width: "100%" }}>
          <CommonModal>
            <Confirm setConfirmDelete={setConfirmDelete} />
          </CommonModal>
        </View>
      ) : isModal.edit ? (
        <View style={{ width: "100%" }}>
          <CommonModal>
            <Form editEvent={editEvent} />
          </CommonModal>
        </View>
      ) : null}

      <View style={styles.eventsContainer}>
        {data.length > 0 ? (
          data.map((event: EventFormData, index) => (
            <View key={index}>
              <EventCard
                event={event}
                setIdEvent={setIdEvent}
                setPutevent={setPutevent}
              />
            </View>
          ))
        ) : (
          <Text>No events for this date</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "white",
  },
  contCalendar: {
    marginBottom: 20,
    width: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  showBtn: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "rgb(255, 213, 0)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  labelBnt: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 36,
  },
  eventsContainer: {
    marginTop: 20,
    width: "100%",
    zIndex: -1,
    gap: 20,
  },
});
