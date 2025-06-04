import { createContext, useState } from "react";

export const FitnessGoalContext = createContext();

export default function FitnessGoalProvider({ children }) {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState("");
  const [category, setCategory] = useState("Strength Training");
  const [repetition, setRepetition] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddGoal = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Date.now(),
      goalName,
      category,
      repetition,
      achieved: false,
    };
    setGoals([...goals, newGoal]);
    setGoalName("");
    setCategory("Strength Training");
    setRepetition("");
  };

  const handleAchieved = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, achieved: !goal.achieved } : goal
      )
    );
  };

  const handleClear = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const filteredGoals = goals.filter(
    (goal) => filter === "All" || goal.category === filter
  );

  return (
    <FitnessGoalContext.Provider
      value={{
        goalName,
        setGoalName,
        category,
        setCategory,
        repetition,
        setRepetition,
        filter,
        setFilter,
        handleAchieved,
        handleAddGoal,
        handleClear,
        filteredGoals,
      }}
    >
      {children}
    </FitnessGoalContext.Provider>
  );
}
