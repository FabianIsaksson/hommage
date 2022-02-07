import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedScroll from "./pages/animated-scroll";
import CharacterViewPage from "./pages/character-view";
import Characters from "./pages/characters";
import Home from "./pages/home";
import LookbookPage from "./pages/lookbook-page";
import PlayerPage from "./components/player";
import SwipeTest from "./pages/swipe-test";
import TouchTest from "./pages/touch-test";
import TripleTouchTest from "./pages/triple-touch-test";
import MainPage from "./pages/main-page";
import Teaser from "./pages/teaser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teaser />}></Route>
        <Route path="/dev" element={<Home />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route
          path="/player"
          element={<PlayerPage onArrowDown={() => {}} onReady={(_) => {}} />}
        ></Route>
        <Route path="/lookbook-test" element={<LookbookPage />}></Route>
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
