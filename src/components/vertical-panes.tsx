import { useEffect, useState } from "react";
import "./vertical-panes.scss";
import montana from "../static/images/brand-logos/montana.png";

const getOverlayBkgStr = (val: number) =>
  `rgba(0, 0, 0, ${val < 0.5 ? val : 0.5})`;

export type Panes = { name: string; image: string }[];

const VerticalPanes = ({ panes }: { panes: Panes }) => {
  const halfHeight = window.innerHeight / 2;
  const [hasClicked, setHasClicked] = useState(false);

  const [height, setHeight] = useState(halfHeight);

  const [paneHeights, setPaneHeights] = useState(
    Array(panes.length).fill(window.innerHeight / panes.length),
  );

  // Idle animation
  useEffect(() => {
    let pane = 0;
    let increment = 1;

    const idle = setInterval(() => {
      if (hasClicked) {
        return;
      }
      const baselineHeight = window.innerHeight / panes.length;
      const selectedPaneHeight = baselineHeight * 1.2;
      const otherPanesHeight =
        (window.innerHeight - selectedPaneHeight) / panes.length;

      const newPaneHeights = Array(panes.length).fill(otherPanesHeight);

      newPaneHeights[pane] = selectedPaneHeight;

      setPaneHeights(newPaneHeights);

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
  }, [height, halfHeight, setHeight, hasClicked]);

  return (
    <div className="App">
      <div className="vertical-panes">
        {panes.map(({ name, image }, index) => (
          <div
            key={name}
            className="vertical-panes-frame"
            style={{
              height: paneHeights[index],
            }}
            onClick={() => {
              const newPaneHeights = Array(panes.length).fill(0);
              newPaneHeights[index] = window.innerHeight;
              setPaneHeights(newPaneHeights);
              setHasClicked(true);
            }}
          >
            <p
              style={{
                opacity:
                  paneHeights[index] / (window.innerHeight / panes.length),
              }}
              className="vertical-panes-frame-text"
            >
              {name}
            </p>
            <img
              className="vertical-panes-frame-image"
              alt="vertical-panes-frame"
              src={image}
            ></img>
            <div
              style={{
                // background: getOverlayBkgStr(
                //   1 - paneHeights[index] / (window.innerHeight / panes.length),
                // ),
                background: getOverlayBkgStr(hasClicked ? 0 : 0.5),
                transition: "all 1s ease",
              }}
              className="overlay"
            ></div>
          </div>
        ))}

        {/* <div className="vertical-panes-logo">
          <img className="vertical-panes-logo-image" alt="vertical-panes-logo" src={montana}></img>
        </div> */}
      </div>
    </div>
  );
};

export default VerticalPanes;
