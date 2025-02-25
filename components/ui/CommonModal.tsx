import * as React from "react";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import { ModalFormProps } from "@/types/types";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
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
    <PaperProvider>
      <Portal>
        <Modal
          visible={isModal.confirm || isModal.edit || isModal.form}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}
        >
          <View style={styles.content}>
            <TouchableOpacity style={styles.closeBtn} onPress={hideModal}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            {children}
          </View>
        </Modal>
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // затемнение фона
  },
  content: {
    width: "100%", // ширина модального окна
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default CommonModal;
