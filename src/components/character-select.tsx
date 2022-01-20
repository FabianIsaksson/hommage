import classNames from "classnames";
import { useEffect, useState } from "react";
import ArrowButton from "./arrow-button";
import "./character-select.scss";
import ExitButton from "./exit-button";

const getOverlayBkgStr = (val: number) => `rgba(0, 0, 0, ${val})`;

export type Character = {
  characterId: number;
  brandLogo: string;
  names: string[];
  image: string;
  description: string;
};

export type Characters = Character[];

const CharacterSelect = ({
  onSelect,
  characters,
  selected,
  menuOverlay,
  showMenuOverlay,
  hideMenuOverlay,
  onArrowUp,
  onArrowDown,
}: {
  onSelect: (c: Character) => void;
  characters: Characters;
  selected: boolean;
  menuOverlay: boolean;
  showMenuOverlay: () => void;
  hideMenuOverlay: () => void;
  onArrowUp: () => void;
  onArrowDown: () => void;
}) => {
  // const halfHeight = window.innerHeight / 2;
  const [hasClicked, setHasClicked] = useState(false);

  // const [height, setHeight] = useState(halfHeight);

  const [paneHeights, setPaneHeights] = useState(
    Array(characters.length).fill(window.innerHeight / characters.length),
  );

  useEffect(() => {
    setHasClicked(selected);
    if (!selected) {
      setPaneHeights(
        Array(characters.length).fill(window.innerHeight / characters.length),
      );
    }
  }, [selected]);

  // Idle animation
  // useEffect(() => {
  //   let pane = 0;
  //   let increment = 1;

  //   const idle = setInterval(() => {
  //     if (hasClicked) {
  //       return;
  //     }
  //     const baselineHeight = window.innerHeight / characters.length;
  //     const selectedPaneHeight = baselineHeight * 1.2;
  //     const otherPanesHeight =
  //       (window.innerHeight - selectedPaneHeight) / characters.length;

  //     const newPaneHeights = Array(characters.length).fill(otherPanesHeight);

  //     newPaneHeights[pane] = selectedPaneHeight;

  //     setPaneHeights(newPaneHeights);

  //     let newPane = pane + increment;
  //     if (newPane > characters.length - 1 || newPane < 0) {
  //       if (increment === 1) {
  //         increment = -1;
  //       } else {
  //         increment = 1;
  //       }
  //       newPane = pane + increment;
  //     }

  //     pane = newPane;
  //   }, 3000);

  //   if (hasClicked) {
  //     clearInterval(idle);
  //   }

  //   return () => {
  //     clearInterval(idle);
  //   };
  // }, [height, halfHeight, setHeight, hasClicked]);

  const [displayRevealText, setDisplayRevealText] = useState(menuOverlay);

  useEffect(() => {
    if (!displayRevealText && menuOverlay) {
      setDisplayRevealText(menuOverlay);
    }
  }, [menuOverlay]);

  return (
    <div className="character-select">
      {characters.map(({ characterId, brandLogo, names, image }, index) => (
        <div
          key={characterId}
          className="character-select-frame"
          style={{
            height: paneHeights[index],
          }}
          onClick={() => {
            if (menuOverlay) {
              return;
            }

            const newPaneHeights = Array(characters.length).fill(0);
            newPaneHeights[index] = window.screen.availHeight;
            setPaneHeights(newPaneHeights);
            setHasClicked(true);

            // Set selected character after animation is finished: 1 second
            setTimeout(() => {
              onSelect(characters[index]);
            }, 1000);
          }}
        >
          <img
            className="character-select-frame-image"
            alt="character-select-frame"
            src={image}
          ></img>
          <div
            style={{
              background: getOverlayBkgStr(
                menuOverlay ? 0.5 : hasClicked ? 0 : 0.3,
              ),
              transition: "all 1s ease",
            }}
            className="overlay"
          ></div>
          <div
            style={{
              opacity: hasClicked || menuOverlay ? 0 : 1,
            }}
            className="character-select-copy"
          >
            <div className="character-select-logo">
              <img
                className="character-select-logo-image"
                alt="character-select-logo"
                src={brandLogo}
              ></img>
            </div>
            <div className="character-select-frame-names">
              {names.map((name) => (
                <p key={name} className="character-select-frame-names-name">
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}

      <ArrowButton
        direction="up"
        text={"PLAY FILM"}
        absolute
        show={menuOverlay}
        onClick={() => onArrowUp()}
      />

      <ArrowButton
        direction="down"
        text={"INFO"}
        absolute
        show={menuOverlay}
        onClick={onArrowDown}
      />

      <ExitButton
        show={!hasClicked && !menuOverlay}
        onClick={showMenuOverlay}
      />

      <p
        style={{ opacity: menuOverlay ? 1 : 0 }}
        className={classNames("character-select-reveal", {
          hide: !displayRevealText,
        })}
        onClick={hideMenuOverlay}
        onTransitionEnd={() => !menuOverlay && setDisplayRevealText(false)}
      >
        REVEAL CHARACTERS
        {/* {" >"} */}
      </p>
    </div>
  );
};

export default CharacterSelect;
