import React, { useEffect, useState } from "react";
import { View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

import styles from "./styles";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalsHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const cancelAddGoalsHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandle = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  useEffect(() => {
    if (courseGoals.length < 1) {
      setIsAddMode(true);
    }
  });

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />

      <GoalInput
        visible={isAddMode}
        onCancel={cancelAddGoalsHandler}
        onAddGoal={addGoalsHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={courseGoals}
          keyExtractor={(goalsItem) => goalsItem.id}
          renderItem={(goalsItem) => (
            <GoalItem
              id={goalsItem.item.id}
              handleDelete={removeGoalHandle}
              title={goalsItem.item.value}
            />
          )}
        />
      </View>
    </View>
  );
}
