import { Fragment } from "react";
import BackButton from "../../back-button";
import { FrameLookbook } from "../types";
import "./lookbook.scss";

const Lookbook = ({
  lookbook,
  onBack,
}: {
  lookbook: FrameLookbook;
  onBack: () => void;
}) => {
  return (
    <div className="frame-lookbook">
      <div className="frame-lookbook-overlay" />
      <div className="frame-lookbook-content">
        <div className="frame-lookbook-slider">
          {lookbook.pages.map((page, i) => (
            <img
              key={lookbook.designerName + "image" + i}
              alt={lookbook.designerName + "image" + i}
              src={page}
            ></img>
          ))}
        </div>

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
      <BackButton onClick={onBack} />
    </div>
  );
};

export default Lookbook;
