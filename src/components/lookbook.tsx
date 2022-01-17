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

const LookbookView = ({ lookbook }: { lookbook: Lookbook }) => {
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
                <p className="lookbook-slides-pane-copy">{copy?.text}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LookbookView;
