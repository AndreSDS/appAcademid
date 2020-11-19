import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const GoalItem = ({ title, handleDelete, id }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleDelete.bind(this, id)}>
      <View style={styles.goalsItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
