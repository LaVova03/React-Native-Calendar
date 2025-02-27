import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "react-i18next";

import { SelectProps } from "@/types/types";

export default function Select({ formData, setFormData }: SelectProps) {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const options = [t("week"), t("bi-weekly"), t("monthly")];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("repeat")}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={formData.repeat || inputValue}
          onFocus={() => setShowDropdown(true)}
          editable={false}
        />
        <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
          <Icon
            name={showDropdown ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {showDropdown && (
        <FlatList
          contentContainerStyle={styles.dropdownContainer}
          data={options}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setFormData((prev) => ({
                  ...prev,
                  repeat: item,
                }));
                setInputValue(item);
                setShowDropdown(false);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 0,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    padding: 0,
    backgroundColor: "transparent",
  },
  dropdownContainer: {
    width: "100%",
  },
  dropdownItem: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
    width: 100,
  },
});
