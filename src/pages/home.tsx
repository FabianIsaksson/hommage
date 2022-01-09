import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/swipe-test">Swipe test - splitscreen</Link>
        </li>
        <li>
          <Link to="/touch-test">Touch test - splitscreen</Link>
        </li>
        <li>
          <Link to="/animated-scroll">Animated Scroll Desktop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
