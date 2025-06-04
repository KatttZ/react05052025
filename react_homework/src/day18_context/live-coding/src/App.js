import "./App.css";
import FitnessGoalProvider from "./components/FitnessGoalContext";
import FitnessTracker from "./components/FitnessTracker";
import ThemeProvider from "./components/ThemeContext";
// import FetchPosts from "./components/FetchPosts";

function App() {
  return (
    <div className="App">
      <h1>Code playground</h1>
      {/* <FetchPosts /> */}
      <ThemeProvider>
        <FitnessGoalProvider>
          <FitnessTracker />
        </FitnessGoalProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
