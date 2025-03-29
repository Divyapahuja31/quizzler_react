import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import allQuestions from "./questions";

function Quiz() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 20)); 
  }, []);

  const handleAnswer = (option) => {
    if (option === selectedQuestions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="result">
          <h1>Quiz Completed!</h1>
          <h2>Your Score: {score} / {selectedQuestions.length}</h2>
          <Link to="/">
            <button>Play Again</button>
          </Link>
        </div>
      ) : selectedQuestions.length > 0 ? (
        <div>
          <h2>{selectedQuestions[currentQuestion].question}</h2>
          {selectedQuestions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
          <div className="navigation">
            <Link to="/">
              <button className="back-btn">Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <h2>Loading Questions...</h2>
      )}
    </div>
  );
}

export default Quiz;
