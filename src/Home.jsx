import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [numQuestions, setNumQuestions] = useState(10);
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Frontend Quiz Challenge</h1>
      <p>Test your frontend development knowledge!</p>
      
      <label htmlFor="numQuestions">Select Number of Questions:</label>
      <input
        type="number"
        id="numQuestions"
        min="5"
        max="20"
        value={numQuestions}
        onChange={(e) => setNumQuestions(Number(e.target.value))}
      />

      <button onClick={() => navigate("/instructions", { state: { numQuestions } })}>
        Start Quiz
      </button>
    </div>
  );
}
export default Home;
