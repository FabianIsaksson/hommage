import { useEffect, useState } from "react";
import "./splitscreen-panes.scss";
import montana from "../static/images/brand-logos/montana.png";

const getOverlayBkgStr = (val: number) =>
  `rgba(0, 0, 0, ${val < 0.5 ? val : 0.5})`;

export type Panes = { name: string; image: string }[];

const SplitScreenPanes = ({ panes }: { panes: Panes }) => {
  const halfWidth = window.innerWidth / 2;
  const [hasClicked, setHasClicked] = useState(false);

  const [width, setWidth] = useState(halfWidth);

  const [paneWidths, setPaneWidths] = useState(
    Array(panes.length).fill(window.innerWidth / panes.length),
  );

  // Idle animation
  useEffect(() => {
    let pane = 0;
    let increment = 1;

    const idle = setInterval(() => {
      if (hasClicked) {
        return;
      }
      const baselineWidth = window.innerWidth / panes.length;
      const selectedPaneWidth = baselineWidth * 1.2;
      const otherPanesWidth =
        (window.innerWidth - selectedPaneWidth) / panes.length;

      const newPaneWidths = Array(panes.length).fill(otherPanesWidth);

      newPaneWidths[pane] = selectedPaneWidth;

      setPaneWidths(newPaneWidths);

      let newPane = pane + increment;
      if (newPane > panes.length - 1 || newPane < 0) {
        if (increment === 1) {
          increment = -1;
        } else {
          increment = 1;
        }
        newPane = pane + increment;
      }

      pane = newPane;
    }, 3000);

    if (hasClicked) {
      clearInterval(idle);
    }

    return () => {
      clearInterval(idle);
    };
  }, [width, halfWidth, setWidth, hasClicked]);

  return (
    <div className="App">
      <div className="spsc">
        {panes.map(({ name, image }, index) => (
          <div
            key={name}
            className="spsc-frame"
            style={{
              width: paneWidths[index],
            }}
            onClick={() => {
              const newPaneWidths = [0, 0, 0];
              newPaneWidths[index] = window.innerWidth;
              setPaneWidths(newPaneWidths);
              setHasClicked(true);
            }}
          >
            <p
              style={{
                opacity: paneWidths[index] / (window.innerWidth / panes.length),
              }}
              className="spsc-frame-text"
            >
              {name}
            </p>
            <img
              className="spsc-frame-image"
              alt="spsc-frame"
              src={image}
            ></img>
            <div
              style={{
                background: getOverlayBkgStr(
                  1 - paneWidths[index] / (window.innerWidth / panes.length),
                ),
                transition: "all 1s ease",
              }}
              className="overlay"
            ></div>
          </div>
        ))}

        <div className="spsc-logo">
          <img className="spsc-logo-image" alt="spsc-logo" src={montana}></img>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenPanes;
