import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import allQuestions from "./questions";  // Ensure you have a questions.js file

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const numQuestions = location.state?.numQuestions;

  // Redirect if user tries to access quiz without setting numQuestions
  useEffect(() => {
    if (!numQuestions) {
      navigate("/");
    }
  }, [numQuestions, navigate]);

  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  // Randomly select questions
  useEffect(() => {
    if (numQuestions) {
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      setSelectedQuestions(shuffled.slice(0, numQuestions));
    }
  }, [numQuestions]);

  // Timer Countdown
  useEffect(() => {
    if (timeLeft === 0) {
      setShowScore(true);
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle Answer Selection
  const handleAnswer = (option) => {
    if (option === selectedQuestions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    const nextQ = currentQuestion + 1;
    if (nextQ < selectedQuestions.length) {
      setCurrentQuestion(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="result">
          <h1>Quiz Over!</h1>
          <h2>Your Score: {score} / {selectedQuestions.length}</h2>
          <Link to="/">
            <button>Play Again</button>
          </Link>
        </div>
      ) : selectedQuestions.length > 0 ? (
        <div>
          <div className="timer">⏳ {timeLeft} seconds left</div>
          <h2>{selectedQuestions[currentQuestion].question}</h2>
          {selectedQuestions[currentQuestion].options.map((option, i) => (
            <button key={i} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <h2>Loading Questions...</h2>
      )}
    </div>
  );
}

export default Quiz;
