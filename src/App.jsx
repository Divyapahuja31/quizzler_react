import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import "./index.css"; // Import CSS for styling

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
