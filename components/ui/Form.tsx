import React, { useEffect, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { EventFormData } from "@/types/types";
import Select from "./Select";
import { postEvent } from "@/api/postEvent";
import { FormProps } from "@/types/types";
import { useStore } from "@/stores/useStore";
import { getEvents } from "@/api/getEvents";
import { putEvent } from "@/api/putEvent";
import moment from "moment";
import { showAlert } from "@/utils/alert";

function Form({ selectedDate, editEvent }: FormProps) {
  const { setData, setIsModal } = useStore();

  const [formData, setFormData] = useState<EventFormData>(() => {
    if (editEvent) {
      return {
        eventName: editEvent.eventName || "",
        startDate: editEvent.startDate || "",
        startTime: editEvent.startTime || "",
        repeat: editEvent.repeat || "Weekly",
        id: editEvent.id,
      };
    } else {
      return {
        eventName: "",
        startDate: "",
        startTime: "",
        repeat: "Weekly",
      };
    }
  });

  useEffect(() => {
    if (selectedDate && moment.isMoment(selectedDate)) {
      if (selectedDate.isValid()) {
        const formattedDate = selectedDate.format("MMM D.YYYY");
        const formattedTime = selectedDate.format("h:mm A");

        setFormData((prev) => ({
          ...prev,
          startDate: formattedDate,
          startTime: formattedTime,
        }));
      }
    }
  }, [selectedDate]);

  const addEvent = async () => {
    const checkData = Object.values(formData).every((el) => el);

    if (!checkData) {
      showAlert("Error", "Fill in all fields");
      return;
    }

    const response = await (editEvent ? putEvent : postEvent)(formData);
    if (response?.data) {
      const allEvents = await getEvents();
      if (allEvents?.data) {
        setData(allEvents?.data);
      }
    }

    setFormData({
      eventName: "",
      startDate: "",
      startTime: "",
      repeat: "Weekly",
    });
    setIsModal(editEvent ? "edit" : "form", false);
  };

  return (
    <View style={{ width: "100%", gap: 20, padding: 0 }}>
      <View>
        <Text style={styles.label}>Event Name</Text>
        <TextInput
          label="Event Name"
          value={formData.eventName}
          onChangeText={(text) => {
            setFormData((prev) => ({ ...prev, eventName: text }));
          }}
          style={styles.eventName}
          maxLength={25}
        />
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.grid}>
          <TextInput
            value={formData.startDate}
            label="Start date"
            style={styles.gridItem}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, startDate: text }));
            }}
            maxLength={15}
          />
          <TextInput
            value={formData.startTime}
            label="Start time"
            style={styles.gridItem}
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, startTime: text }));
            }}
            maxLength={15}
          />
        </View>
      </View>
      <Select formData={formData} setFormData={setFormData} />
      <Pressable onPress={addEvent} style={styles.saveBtn}>
        <Text style={styles.textBtn}>SAVE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  eventName: {
    width: "100%",
    padding: 10,
  },
  saveBtn: {
    padding: 10,
    backgroundColor: "rgb(255 213 0)",
    borderRadius: 50,
    width: "100%",
    textAlign: "center",
    marginTop: 20,
  },
  textBtn: {
    color: "white",
    width: "auto",
    textAlign: "center",
    fontWeight: 900,
  },
  dateContainer: {
    flexDirection: "row",
    gap: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  gridItem: {
    width: "48%",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default Form;
