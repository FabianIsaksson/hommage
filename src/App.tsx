import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedScroll from "./pages/animated-scroll";
import CharacterViewPage from "./pages/character-view";
import Characters from "./pages/characters";
import Home from "./pages/home";
import SwipeTest from "./pages/swipe-test";
import TouchTest from "./pages/touch-test";
import TripleTouchTest from "./pages/triple-touch-test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route
          path="/character-view-page"
          element={<CharacterViewPage />}
        ></Route>
        <Route path="/swipe-test" element={<SwipeTest />}></Route>
        <Route path="/touch-test" element={<TouchTest />}></Route>
        <Route path="/triple-touch-test" element={<TripleTouchTest />}></Route>
        <Route path="/animated-scroll" element={<AnimatedScroll />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
