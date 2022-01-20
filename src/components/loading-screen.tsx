import ArrowButton from "./arrow-button";
import "./loading-screen.scss";

const LoadingScreen = ({
  onArrowDown,
  onArrowUp,
}: {
  onArrowDown: () => void;
  onArrowUp: () => void;
}) => {
  return (
    <div className="loading-screen">
      <ArrowButton
        direction="up"
        text={"PLAY FILM"}
        absolute
        onClick={onArrowUp}
      />

      <ArrowButton
        direction="down"
        text={"VIEW COLLECTION"}
        absolute
        onClick={onArrowDown}
      />
    </div>
  );
};

export default LoadingScreen;
