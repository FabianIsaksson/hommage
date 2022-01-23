import { Fragment, useState } from "react";
import { FrameLookbook } from "../types";
import "./lookbook.scss";

const Lookbook = ({ lookbook }: { lookbook: FrameLookbook }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardRotations = [0, -3, 3, -2, 1, 0, 0, 0, 0, 0]; // make it nice

  const cardXPos = [0, -15, 25, -10, 2, 0, 0, 0, 0, 0];

  const cardYPos = [-10, -25, -10, -20, 0, 0, 0, 0, 0];

  return (
    <div className="frame-lookbook">
      <div className="frame-lookbook-overlay" />
      <div className="frame-lookbook-content">
        <div
          className="frame-lookbook-card-stack"
          onClick={() => setCurrentCard(currentCard + 1)}
        >
          {lookbook.pages.map((page, i) => (
            <img
              style={{
                transform:
                  `rotate(${cardRotations[i]}deg) ` +
                  (currentCard < i
                    ? "translateX(200vw)"
                    : `translate3d(${cardXPos[i]}px, ${cardYPos[i]}px, 0)`),
              }}
              key={lookbook.designerName + "image" + i}
              alt={lookbook.designerName + "image" + i}
              src={page}
            ></img>
          ))}
        </div>
        {/* <div className="frame-lookbook-slider">
          {lookbook.pages.map((page, i) => (
            <img
              key={lookbook.designerName + "image" + i}
              alt={lookbook.designerName + "image" + i}
              src={page}
            ></img>
          ))}
        </div> */}

        <p>{lookbook.copy}</p>
        <p>{lookbook.copy}</p>
        <p>{lookbook.copy}</p>
        <p>{lookbook.copy}</p>
        <p>{lookbook.copy}</p>
        <p>{lookbook.copy}</p>
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
      {/* <BackButton onClick={onBack} /> */}
    </div>
  );
};

export default Lookbook;
