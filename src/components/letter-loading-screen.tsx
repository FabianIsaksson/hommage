// import ArrowButton from "./arrow-button";
import letterFront from "../static/images/letter/letter-front.png";
import openLetterMobile from "../static/images/letter/letter-open-mobile.png";
import openLetterDesktop from "../static/images/letter/letter-open-desktop.png";
import { ReactComponent as ArrowDown } from "../static/svg/arrow-down.svg";
import "./letter-loading-screen.scss";
import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import classNames from "classnames";

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
    if (clickCounter >= 2) {
      setTimeout(() => {
        onArrowDown();
      }, 500);
    }
  }, [clickCounter]);

  const letterContentImage = windowSize.isMobile
    ? openLetterMobile
    : openLetterDesktop;

  return (
    <div className="letter-loading-screen">
      <div className="letter-loading-screen-letter">
        <img
          alt="letter front"
          src={letterFront}
          className={classNames(
            "letter-loading-screen-letter-background front",
            {
              "letter-animate": clickCounter === 0,
            },
          )}
          style={{
            opacity: clickCounter !== 1 ? 1 : 0,
          }}
          onClick={() => setClickCounter(clickCounter + 1)}
        ></img>

        <img
          alt="letter content"
          src={letterContentImage}
          className="letter-loading-screen-letter-content"
          style={{ opacity: clickCounter === 1 ? 1 : 0 }}
          onClick={() => setClickCounter(clickCounter + 1)}
        ></img>

        <p
          className="letter-enter clickable"
          style={{
            opacity: clickCounter === 1 ? 1 : 0,
            pointerEvents: clickCounter === 1 ? "all" : "none",
          }}
          onClick={() => setClickCounter(clickCounter + 1)}
        >
          ENTER HOMMAGE
          <ArrowDown />
        </p>
      </div>
      {/* <img alt="letter content" src={contentLetter}></img>
      <img alt="open letter" src={openLetter}></img> */}
    </div>
  );
};

export default LetterLoadingScreen;
