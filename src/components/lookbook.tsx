import ArrowButton from "./arrow-button";
import "./lookbook.scss";

export type Lookbook = {
  designerName: string;
  brandName: string;
  slides: number;
  image: string;
  copy?: {
    slide: number;
    text: string;
  }[];
  socials?: {
    name: string;
    link: string;
  }[];
};

const LookbookView = ({
  lookbook,
  nextLookbook,
  prevLookbook,
  onArrowUp,
  onArrowDown,
}: {
  lookbook: Lookbook;
  nextLookbook?: Lookbook;
  prevLookbook?: Lookbook;
  onArrowUp: () => void;
  onArrowDown: () => void;
}) => {
  return (
    <div className="lookbook">
      <div className="lookbook-slides">
        {Array(lookbook.slides)
          .fill("")
          .map((_, i) => {
            const copy = lookbook.copy?.find((c) => c.slide === i);

            return (
              <div
                style={{
                  backgroundPosition: `-${i * 100}%`,
                  backgroundSize: `${lookbook.slides * 100}vw`,
                }}
                className="lookbook-slides-pane"
              >
                {i === 0 ? (
                  <div className="lookbook-info">
                    <p>BRAND: {lookbook.brandName}</p>
                    {!!lookbook.socials?.length && (
                      <p>
                        CONTACT:
                        {lookbook.socials.map((link, si) => (
                          <>
                            <a
                              href={link.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.name}
                            </a>
                            {si < (lookbook.socials?.length ?? 0) - 1 && ", "}
                          </>
                        ))}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="lookbook-slides-pane-copy">{copy?.text}</p>
                )}
              </div>
            );
          })}
        <ArrowButton
          direction="up"
          absolute
          text={prevLookbook ? prevLookbook.designerName : "GO BACK"}
          onClick={() => onArrowUp()}
        />
        {nextLookbook && (
          <ArrowButton
            absolute
            direction="down"
            text={nextLookbook.designerName}
            onClick={onArrowDown}
          />
        )}
      </div>
      <p className="lookbook-designer-name">{lookbook.designerName}</p>
    </div>
  );
};

export default LookbookView;
