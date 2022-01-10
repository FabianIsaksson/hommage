import { useEffect, useState } from "react";
import "../App.scss";
import testBlue from "../static/images/test_blue.jpg";
import testWhite from "../static/images/test_white.jpg";
import montana from "../static/images/brand-logos/montana.png";

const getOverlayBkgStr = (val: number) =>
  `rgba(0, 0, 0, ${val < 0.5 ? val : 0.5})`;

const getTextOpacity = (val: number) => (val > 0.4 ? val : 0);

function TouchTest() {
  const halfWidth = window.innerWidth / 2;
  const [width, setWidth] = useState(halfWidth);

  const remainingWidth = window.innerWidth - width; // width for right pane

  const textOpLeft = getTextOpacity(width / halfWidth);
  const textOpRight = getTextOpacity(remainingWidth / halfWidth);

  const bkgLeft = getOverlayBkgStr(1 - width / halfWidth);
  const bkgRight = getOverlayBkgStr(1 - remainingWidth / halfWidth);

  // Idle animation
  useEffect(() => {
    let direction = "left";
    const idle = setInterval(() => {
      if ([0, window.innerWidth].includes(width)) {
        return;
      }
      let value = halfWidth;
      if (direction === "left") {
        value = halfWidth - halfWidth * 0.2;
        direction = "right";
      } else if (direction === "right") {
        value = halfWidth + halfWidth * 0.2;
        direction = "left";
      }
      setWidth(value);
    }, 3000);

    return () => {
      clearInterval(idle);
    };
  }, [width, halfWidth, setWidth]);

  return (
    <div className="App">
      <div className="spsc">
        <div
          className="spsc-frame-left"
          style={{
            width: width,
            transition: "all 1s ease",
          }}
          onClick={() => setWidth(window.innerWidth)}
        >
          <p
            style={{
              opacity: textOpLeft,
              transition: "all 1s ease",
            }}
            className="spsc-frame-text"
          >
            MAYA SUNDHOLM
          </p>
          <img
            className="spsc-frame-image"
            alt="spsc-frame"
            src={testBlue}
          ></img>
          <div
            style={{
              background: bkgLeft,
              transition: "all 1s ease",
            }}
            className="overlay"
          ></div>
        </div>
        <div
          className="spsc-frame-right"
          style={{
            width: remainingWidth,
            transition: "all 1s ease",
          }}
          onClick={() => setWidth(0)}
        >
          <p
            style={{
              opacity: textOpRight,
              transition: "all 1s ease",
            }}
            className="spsc-frame-text"
          >
            HILDA FERM
          </p>
          <img
            className="spsc-frame-image"
            alt="spsc-frame"
            src={testWhite}
          ></img>
          <div
            style={{
              background: bkgRight,
              transition: "all 1s ease",
            }}
            className="overlay"
          ></div>
        </div>
        <div className="spsc-logo">
          <img className="spsc-logo-image" alt="spsc-logo" src={montana}></img>
        </div>
      </div>
    </div>
  );
}

export default TouchTest;
