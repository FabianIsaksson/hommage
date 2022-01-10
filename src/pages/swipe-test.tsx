import {
  SetStateAction,
  Dispatch,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "../App.scss";
import testBlue from "../static/images/test_blue.jpg";
import testWhite from "../static/images/test_white.jpg";
import montana from "../static/images/brand-logos/montana.png";

const useMouseDelta = (
  initialWidth: number,
  snapSteps: number[],
): [number, Dispatch<SetStateAction<number>>, boolean] => {
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
    [result, snapSteps],
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

  return [result, setResult, dragging];
};

const useTouchDelta = (
  initialWidth: number,

  snapSteps: number[],
): [number, Dispatch<SetStateAction<number>>, boolean] => {
  const [result, setResult] = useState(initialWidth);
  const [dragging, setDragging] = useState(false);
  const previousClientX = useRef(0);

  const handleTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      if (!dragging) {
        return;
      }

      const change = (e.touches[0].clientX - previousClientX.current) * 1.75; // speed up * 2
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
    [result, snapSteps],
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

  return [result, setResult, dragging];
};

const getOverlayBkgStr = (val: number) =>
  `rgba(0, 0, 0, ${val < 0.5 ? val : 0.5})`;

const getTextOpacity = (val: number) => (val > 0.4 ? val : 0);

function SwipeTest() {
  const useTouch = "ontouchstart" in window;
  const halfWidth = window.innerWidth / 2;

  const [mouseWidth, mouseSetWidth, mouseDragging] = useMouseDelta(halfWidth, [
    0,
    halfWidth,
    window.innerWidth,
  ]);

  const [touchWidth, touchSetWidth, touchDragging] = useTouchDelta(halfWidth, [
    0,
    halfWidth,
    window.innerWidth - 0,
  ]);

  const width = useTouch ? touchWidth : mouseWidth;
  const dragging = useTouch ? touchDragging : mouseDragging;

  const remainingWidth = window.innerWidth - width; // width for right pane

  const textOpLeft = getTextOpacity(width / halfWidth);
  const textOpRight = getTextOpacity(remainingWidth / halfWidth);

  const bkgLeft = getOverlayBkgStr(1 - width / halfWidth);
  const bkgRight = getOverlayBkgStr(1 - remainingWidth / halfWidth);

  // Idle animation
  useEffect(() => {
    let direction = "left";
    const idle = setInterval(() => {
      if (dragging) {
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
      if (useTouch) {
        touchSetWidth(value);
      } else {
        mouseSetWidth(value);
      }
    }, 3000);

    return () => {
      clearInterval(idle);
    };
  }, [useTouch, dragging, halfWidth, mouseSetWidth, touchSetWidth]);

  useEffect(() => {
    document.body.classList.add("disable-touch-scroll");

    return () => {
      document.body.classList.remove("disable-touch-scroll");
    };
  }, []);

  return (
    <div className="App">
      <div className="spsc">
        <div
          className="spsc-frame-left"
          style={{
            width: width,
            transition: dragging ? "" : "all 1s ease",
          }}
        >
          <p
            style={{
              opacity: textOpLeft,
              transition: dragging ? "" : "all 1s ease",
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
              transition: dragging ? "" : "all 1s ease",
            }}
            className="overlay"
          ></div>
        </div>
        <div
          className="spsc-frame-right"
          style={{
            width: remainingWidth,
            transition: dragging ? "" : "all 1s ease",
          }}
        >
          <p
            style={{
              opacity: textOpRight,
              transition: dragging ? "" : "all 1s ease",
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
              transition: dragging ? "" : "all 1s ease",
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

export default SwipeTest;
