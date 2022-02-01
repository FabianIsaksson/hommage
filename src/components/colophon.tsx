import ArrowButton from "./arrow-button";
import "./colophon.scss";

const Colophon = ({ onArrowUp }: { onArrowUp: () => void }) => {
  return (
    <div className="colophoneee">
      <ArrowButton
        direction="up"
        absolute
        text="Reveal Characters"
        onClick={onArrowUp}
      />
      <p>Colophon</p>
    </div>
  );
};

export default Colophon;
