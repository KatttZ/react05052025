import { useContext } from "react";
import "../App.css";
import { FitnessGoalContext } from "./FitnessGoalContext";
import  { ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

export default function FitnessTracker() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`tracker-container ${theme}`}>
        <div className="tracker">
          <GoalForm />
          <FilterDropDown />
          <ThemeSwitcher/>
          <TrackerList />
        </div>
    </div>
  );
}

export function GoalForm() {
  const {
    goalName,
    setGoalName,
    category,
    setCategory,
    repetition,
    setRepetition,
    handleAddGoal,
  } = useContext(FitnessGoalContext);

  return (
    <form onSubmit={handleAddGoal}>
      <h2>Fitness Goal Tracker</h2>
      <label>
        Fitness Goal
        <input
          type="text"
          required
          value={goalName}
          placeholder="Enter fitness goal"
          onChange={(e) => setGoalName(e.target.value)}
        />
      </label>

      <label>
        Category
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Strength Training">Strength Training</option>
          <option value="Cardio">Cardio</option>
        </select>
      </label>

      <label>
        Repetitions
        <input
          type="number"
          required
          value={repetition}
          placeholder="Enter repetitions"
          onChange={(e) => setRepetition(e.target.value)}
        />
      </label>
      <button type="submit" className="add-goal-button">
        Add Goal
      </button>
    </form>
  );
}

export function FilterDropDown() {
  const { filter, setFilter } = useContext(FitnessGoalContext);

  return (
    <div>
      <label>
        Filter by Category:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Strength Training"> Strength Training</option>
          <option value="Cardio">Cardio</option>
        </select>
      </label>
    </div>
  );
}

export function TrackerList() {
  const { filteredGoals } = useContext(FitnessGoalContext);
  return (
    <div>
      {filteredGoals.map((goal) => (
        <TrackerItem key={goal.id} goal={goal} />
      ))}
    </div>
  );
}

export function TrackerItem({ goal }) {
  const { handleAchieved, handleClear } = useContext(FitnessGoalContext);
  return (
    <div className={`goal-item ${goal.achieved ? "achieved" : ""}`}>
      {goal.goalName} - <strong>{goal.category}</strong> {goal.repetition}
      {goal.category === "Cardio" ? "minutes" : "repetitions"}
      <button
        className={goal.achieved ? "add-back-button" : "achieved-button"}
        onClick={() => handleAchieved(goal.id)}
      >
        {goal.achieved ? "Add Back" : "Mark as Achieved"}
      </button>
      <button className="clear-button" onClick={() => handleClear(goal.id)}>
        Clear
      </button>
    </div>
  );
}
