import ArrowButton from "./arrow-button";
import "./colophon.scss";

const Colophon = ({ onArrowUp }: { onArrowUp: () => void }) => {
  return (
    <div className="colophon">
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
