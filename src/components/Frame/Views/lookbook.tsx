import { Fragment, RefObject, useEffect, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { ReactComponent as ArrowLeft } from "../../../static/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../static/svg/arrow-right.svg";
import { FrameLookbook } from "../types";
import "./lookbook.scss";

const Lookbook = ({
  lookbook,
  lookbookRef,
}: {
  lookbook: FrameLookbook;
  lookbookRef: RefObject<HTMLDivElement>;
}) => {
  const windowSize = useWindowSize();
  const minimum = windowSize.isMobile ? -1 : 0;
  const maximum = lookbook.pages.length - 1;

  const [currentCard, setCurrentCard] = useState(minimum);

  const cardRotations = [0, -3, 3, -2, 1, 0, 0, 0, 0, 0]; // make it nice

  const cardXPos = [0, -15, 25, -10, 2, 0, 0, 0, 0, 0];

  const cardYPos = [-10, -25, -10, -20, 0, 0, 0, 0, 0];

  const onDecrease = () => {
    if (currentCard - 1 >= minimum) {
      setCurrentCard(currentCard - 1);
    }
  };
  const onIncrease = () => {
    if (currentCard + 1 < lookbook.pages.length) {
      setCurrentCard(currentCard + 1);
    }
  };

  useEffect(() => {
    if (currentCard === -1 && !windowSize.isMobile) {
      setCurrentCard(0);
    }
  }, [windowSize]);

  const copy = lookbook.copy.split("\n").map((str, i) => <p key={i}>{str}</p>);

  return (
    <div className="frame-lookbook" ref={lookbookRef}>
      <div className="frame-lookbook-overlay" />
      <div className="limiter">
        <div className="frame-lookbook-card-stack">
          <div
            className="frame-lookbook-card-stack-page"
            style={{ position: windowSize.isMobile ? "absolute" : "relative" }}
          >
            <img
              className="frame-lookbook-card-stack-info"
              alt={lookbook.designerName + "info"}
              src={
                windowSize.isMobile
                  ? lookbook.infoPageMobile
                  : lookbook.infoPageDesktop
              }
            ></img>
          </div>
          <div className="frame-lookbook-card-stack-page arrow-cards">
            {lookbook.pages.map((page, i) => (
              <img
                style={{
                  cursor: "pointer",
                  transform:
                    `rotate(${cardRotations[i]}deg) ` +
                    (windowSize.isMobile
                      ? currentCard < i //Mobile
                        ? "translateX(120vw) "
                        : `translate3d(${cardXPos[i]}px, ${cardYPos[i]}px, 0) `
                      : //Desktop
                      currentCard < i
                      ? "translatey(-150vh) "
                      : `translate3d(${cardXPos[i]}px, ${cardYPos[i]}px, 0) `),
                }}
                key={lookbook.designerName + "image" + i}
                alt={lookbook.designerName + "image" + i}
                src={page}
                onClick={onIncrease}
              ></img>
            ))}
            <div className="frame-lookbook-card-stack-arrow-controls">
              <div
                className={
                  currentCard > minimum
                    ? "clickable"
                    : "clickable frame-lookbook-card-stack-arrow-controls-hide"
                }
                onClick={onDecrease}
              >
                <ArrowLeft />
                <span>Previous</span>
              </div>
              <div
                className={
                  currentCard < maximum
                    ? "clickable"
                    : "clickable frame-lookbook-card-stack-arrow-controls-hide"
                }
                onClick={onIncrease}
              >
                <span>
                  {currentCard > minimum ? "Next" : "View Collection"}
                </span>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-lookbook-content">
          <h1>{lookbook.title}</h1>
          <div className="frame-lookbook-content-paragraphs">
            {copy}
            {lookbook.socials && (
              <div className="frame-lookbook-content-socials">
                {lookbook.socials?.map((link, si) => (
                  <Fragment key={si}>
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.name}
                    </a>
                    {si < (lookbook.socials?.length ?? 0) - 1 && <span>/</span>}
                  </Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
