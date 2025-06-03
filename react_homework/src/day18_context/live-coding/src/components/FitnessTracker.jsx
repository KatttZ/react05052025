import { useState } from "react";
import "../App.css";
export default function FitnessTracker() {
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
    setGoals(goals.filter(goal => goal.id !== id))
  }

  const filteredGoals = goals.filter(goal => filter === "All" || goal.category === filter)

  return (
    <div className="tracker">
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
          <select required value={category} onChange={(e) => setCategory(e.target.value)}>
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
        <button type="submit" className="add-goal-button">Add Goal</button>
      </form>

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

      <div>
        {filteredGoals.map((g) => {
          return (
            <div key={g.id} className="goal-item">
              {g.goalName} - <strong>{g.category}</strong> {`(${g.repetition} mins)`}{" "}
              <button className="achieved-button" onClick={() => handleAchieved(g.id)}>Mark as Achieved</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
