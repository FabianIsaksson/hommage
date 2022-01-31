// import ArrowButton from "./arrow-button";
import letterFront from "../static/images/letter/letter-front.png";
import openLetter from "../static/images/letter/letter-open.png";
import contentLetterMobile from "../static/images/letter/letter-content-mobile.png";
import contentLetteDesktop from "../static/images/letter/letter-content-desktop.png";
import "./letter-loading-screen.scss";
import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const LetterLoadingScreen = ({
  onArrowDown,
  onArrowUp,
}: {
  onArrowDown: () => void;
  onArrowUp: () => void;
}) => {
  const windowSize = useWindowSize();
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    if (clickCounter >= 3) {
      setTimeout(() => {
        onArrowDown();
      }, 500);
    }
  }, [clickCounter]);

  const letterContentImage = windowSize.isMobile
    ? contentLetterMobile
    : contentLetteDesktop;

  return (
    <div className="letter-loading-screen">
      <div className="letter-loading-screen-letter">
        <img
          alt="letter front"
          src={letterFront}
          className="letter-loading-screen-letter-background"
          style={{
            opacity: clickCounter !== 2 ? 1 : 0,
            transform:
              clickCounter === 0
                ? "rotate(-5deg) translate3d(-50%, -50%, 0)"
                : "translate3d(-50%, -50%, 0)",
          }}
          onClick={() => setClickCounter(clickCounter + 1)}
        ></img>
        <img
          alt="letter front"
          className="letter-loading-screen-letter-background"
          src={openLetter}
          style={{ opacity: clickCounter === 2 ? 1 : 0 }}
          onClick={() => setClickCounter(clickCounter + 1)}
        ></img>

        <img
          alt="letter content"
          src={letterContentImage}
          className="letter-loading-screen-letter-content"
          style={{ opacity: clickCounter === 2 ? 1 : 0 }}
          onClick={() => setClickCounter(clickCounter + 1)}
        ></img>

        <p
          style={{
            opacity: clickCounter === 2 ? 1 : 0,
            pointerEvents: clickCounter === 2 ? "all" : "none",
          }}
          onClick={() => setClickCounter(clickCounter + 1)}
        >
          ENTER HOMAGE
        </p>
      </div>
      {/* <img alt="letter content" src={contentLetter}></img>
      <img alt="open letter" src={openLetter}></img> */}
    </div>
  );
};

export default LetterLoadingScreen;
