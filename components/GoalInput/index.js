import React, { useState } from "react";

import { View, TextInput, Button, Modal } from "react-native";

import styles from "./style";

const GoalInput = ({ onCancel, onAddGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (textEntered) => {
    setEnteredGoal(textEntered);
  };

  const addGoalHandle = () => {
    if (enteredGoal.length > 0) {
      onAddGoal(enteredGoal);
      setEnteredGoal("");
    }
  };

  const cancelAddGoalHandle = () => {
    onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          onChangeText={(text) => goalInputHandler(text)}
          placeholder="Course Goal"
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelAddGoalHandle} />
          </View>
          <View style={styles.button}>
            <Button
              style={{ width: "40%" }}
              title="ADD"
              onPress={addGoalHandle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
