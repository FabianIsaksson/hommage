import { Link } from "react-router-dom";
import "../App.scss";

const Home = () => {
  return (
    <nav>
      <h1>Hommage – under construction 🏗 </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/swipe-test">Swipe test - splitscreen</Link>
        </li>
        <li>
          <Link to="/touch-test">Touch test - splitscreen</Link>
        </li>
        <li>
          <Link to="/triple-touch-test">
            Triple Pane Touch test - splitscreen
          </Link>
        </li>
        <li>
          <Link to="/animated-scroll">Animated Scroll Desktop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
