import React from "react";
import Modal from "react-native-modal";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { ModalFormProps } from "@/types/types";
import { useStore } from "@/stores/useStore";

const CommonModal = ({ children }: ModalFormProps) => {
  const { isModal, setIsModal } = useStore();

  const hideModal = () => {
    const checkModal = Object.keys(isModal).find(
      (key) => isModal[key as keyof typeof isModal]
    );
    if (checkModal) setIsModal(checkModal as keyof typeof isModal, false);
  };

  return (
    <Modal
      isVisible={isModal.confirm || isModal.edit || isModal.form}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      style={styles.modal}
    >
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeBtn} onPress={hideModal}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  content: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: "hidden",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default CommonModal;
