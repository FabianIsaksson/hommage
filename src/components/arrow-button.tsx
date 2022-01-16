import "./arrow-button.scss";
import { ReactComponent as ArrowUp } from "../static/svg/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../static/svg/arrow-down.svg";

const ArrowButton = ({
  text,
  direction,
  onClick,
}: {
  text: string;
  direction: "up" | "down";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="arrow-button" onClick={onClick}>
      {direction === "up" && <ArrowUp />}
      <p className="arrow-button-text">{text}</p>
      {direction === "down" && <ArrowDown />}
    </div>
  );
};
export default ArrowButton;
