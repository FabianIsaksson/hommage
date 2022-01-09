import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SwipeTest from "./pages/swipe-test";
import TouchTest from "./pages/touch-test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/swipe-test" element={<SwipeTest />}></Route>
        <Route path="/touch-test" element={<TouchTest />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
