import React, {
  DOMAttributes,
  MouseEventHandler,
  MutableRefObject,
  TouchEvent,
  TouchEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.scss";
import testBlue from "./static/images/test_blue.jpg";
import testWhite from "./static/images/test_white.jpg";
import classNames from "classnames";

const useMouseDelta = (
  initialWidth: number,
  snapSteps: number[],
): [number, boolean] => {
  const [result, setResult] = useState(initialWidth);
  const [dragging, setDragging] = useState(false);
  const previousClientX = useRef(0);

  const handleMouseMove = useCallback(
    (e) => {
      e.preventDefault();
      if (!dragging) {
        return;
      }

      const change = (e.clientX - previousClientX.current) * 2; // speed up * 2
      previousClientX.current = e.clientX;

      const newVal = result + change;
      if (newVal < window.innerWidth && newVal > 0) {
        setResult(newVal);
      }
    },
    [dragging, result],
  );

  const handleMouseDown = useCallback((e) => {
    previousClientX.current = e.clientX;
    setDragging(true);
  }, []);

  const handleMouseUp = useCallback(
    (e) => {
      setDragging(false);

      // handle snap
      var closestSnap = snapSteps.reduce(function (prev, curr) {
        return Math.abs(curr - result) < Math.abs(prev - result) ? curr : prev;
      });

      setResult(closestSnap);

      return;
    },
    [result],
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseDown, handleMouseUp, handleMouseMove]);

  return [result, dragging];
};

const useTouchDelta = (
  initialWidth: number,
  snapSteps: number[],
): [number, boolean] => {
  const [result, setResult] = useState(initialWidth);
  const [dragging, setDragging] = useState(false);
  const previousClientX = useRef(0);

  const handleTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      if (!dragging) {
        return;
      }

      const change = (e.touches[0].clientX - previousClientX.current) * 2; // speed up * 2
      previousClientX.current = e.touches[0].clientX;

      const newVal = result + change;
      if (newVal < window.innerWidth && newVal > 0) {
        setResult(newVal);
      }
    },
    [dragging, result],
  );

  const handleTouchStart = useCallback((e) => {
    previousClientX.current = e.touches[0].clientX;
    setDragging(true);
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      setDragging(false);

      // handle snap
      var closestSnap = snapSteps.reduce(function (prev, curr) {
        return Math.abs(curr - result) < Math.abs(prev - result) ? curr : prev;
      });

      setResult(closestSnap);

      return;
    },
    [result],
  );

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleTouchStart, handleTouchEnd, handleTouchMove]);

  return [result, dragging];
};

const getOverlayBkgStr = (val: number) =>
  `rgba(0, 0, 0, ${val < 0.5 ? val : 0.5})`;

function App() {
  const useTouch = "ontouchstart" in window;
  const halfWidth = window.innerWidth / 2;

  const [mouseWidth, mouseDragging] = useMouseDelta(halfWidth, [
    60,
    halfWidth,
    window.innerWidth - 60,
  ]);

  const [touchWidth, touchDragging] = useTouchDelta(halfWidth, [
    60,
    halfWidth,
    window.innerWidth - 60,
  ]);

  const width = useTouch ? touchWidth : mouseWidth;
  const dragging = useTouch ? touchDragging : mouseDragging;

  const remainingWidth = window.innerWidth - width; // width for right pane

  const bkgLeft = getOverlayBkgStr(1 - width / halfWidth);
  const bkgRight = getOverlayBkgStr(1 - remainingWidth / halfWidth);

  return (
    <div className="App">
      <div className="spsc">
        <div
          style={{
            width: width,
            transition: dragging ? "" : "all 1s ease",
          }}
          className="spsc-frame-left"
        >
          {/* <p className="spsc-frame-text">{width}</p> */}
          <img
            className="spsc-frame-image"
            alt="spsc-frame"
            src={testBlue}
          ></img>
          <div
            style={{
              background: bkgLeft,
              transition: dragging ? "" : "all 1s ease",
            }}
            className="overlay"
          ></div>
        </div>
        <div
          style={{
            width: remainingWidth,
            transition: dragging ? "" : "all 1s ease",
          }}
          className="spsc-frame-right"
        >
          {/* <p className="spsc-frame-text">{window.innerWidth - width}</p> */}
          <img
            className="spsc-frame-image"
            alt="spsc-frame"
            src={testWhite}
          ></img>
          <div
            style={{
              background: bkgRight,
              transition: dragging ? "" : "all 1s ease",
            }}
            className="overlay"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
