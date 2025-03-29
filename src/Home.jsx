import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Frontend Quiz!</h1>
      <p>Test your knowledge in HTML, CSS, and JavaScript.</p>
      <Link to="/quiz">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default Home;
