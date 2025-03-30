import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Instructions() {
  const location = useLocation();
  const navigate = useNavigate();
  const numQuestions = location.state?.numQuestions;

  // Redirect if user comes directly to this page
  useEffect(() => {
    if (!numQuestions) {
      navigate("/");
    }
  }, [numQuestions, navigate]);

  return (
    <div className="instructions">
      <h1>How to Play</h1>
      <p>- You have 1 minute to complete the quiz.</p>
      <p>- Choose the correct answer from the given options.</p>
      <p>- Each correct answer gives you +1 point.</p>
      <p>- Try to get the highest score!</p>

      <button onClick={() => navigate("/quiz", { state: { numQuestions } })}>
        Start Quiz
      </button>
    </div>
  );
}

export default Instructions;
