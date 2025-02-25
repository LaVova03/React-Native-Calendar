import { useStore } from "@/stores/useStore";
import { ConfirmProps } from "@/types/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

function Confirm({ setConfirmDelete }: ConfirmProps) {
  const { setIsModal } = useStore();
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>Confirm deletion?</Text>
      <View style={styles.wrapBtn}>
        <Button
          mode="contained"
          textColor="white"
          onPress={() => setIsModal("confirm", false)}
        >
          Cancel
        </Button>
        <Button
          mode="contained"
          textColor="white"
          onPress={() => {
            setConfirmDelete(true);
            setIsModal("confirm", false);
          }}
        >
          Delete
        </Button>
      </View>
    </View>
  );
}

export default Confirm;

const styles = StyleSheet.create({
  wrap: {
    padding: 20,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 20,
  },
  wrapBtn: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});
