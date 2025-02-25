import { EventCardProps, EventFormData } from "@/types/types";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useStore } from "@/stores/useStore";
import moment from "moment";
import { showAlert } from "@/utils/alert";

function EventCard({ event, setIdEvent, setPutevent }: EventCardProps) {
  const { setIsModal } = useStore();

  const editEvent = (event: EventFormData) => {
    const eventDate = moment(event.startDate, "MMM D.YYYY");
    const today = moment().startOf("day");

    if (eventDate.isBefore(today)) {
      showAlert("Error", "You cannot edit an event in the past!");
      return;
    }
    setIsModal("edit", true);
    if (event.id && setPutevent) setPutevent(event);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.eventName}>{event.eventName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.item}>{event.startDate}</Text>
        <Text style={styles.item}>{event.startTime}</Text>
        <Text style={styles.item}>{event.repeat}</Text>
      </View>
      <View style={styles.btnCont}>
        <Pressable
          onPress={() => {
            setIsModal("confirm", true);
            if (event.id && setIdEvent) setIdEvent(event.id);
          }}
        >
          <Ionicons
            name="trash-bin"
            size={20}
            color="black"
            style={styles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            editEvent(event);
          }}
        >
          <Ionicons name="create" size={20} color="black" style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
}

export default EventCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: "rgb(255, 213, 0)",
    borderRadius: 20,
    gap: 20,
  },
  eventName: {
    width: "auto",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 600,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    backgroundColor: "rgb(255 213 0)",
    borderRadius: 15,
    padding: 5,
  },
  item: {
    width: "30%",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
    fontWeight: 600,
  },
});
