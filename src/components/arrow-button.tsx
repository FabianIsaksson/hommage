import "./arrow-button.scss";
import { ReactComponent as ArrowUp } from "../static/svg/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../static/svg/arrow-down.svg";
import classNames from "classnames";
import { useEffect, useState } from "react";

const ArrowButton = ({
  text,
  direction,
  absolute,
  show,
  onClick,
}: {
  text: string;
  direction: "up" | "down";
  absolute?: boolean;
  show?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const [display, setDisplay] = useState(show);

  useEffect(() => {
    if (!display && show) {
      setDisplay(show);
    }
  }, [show]);

  return (
    <div
      className={classNames("arrow-button", {
        "absolute-up": direction === "up" && absolute,
        "absolute-down": direction === "down" && absolute,
        hide: !display,
      })}
      style={{ opacity: typeof show === "boolean" && !show ? 0 : 1 }}
      onTransitionEnd={() => !show && setDisplay(false)}
      onClick={onClick}
    >
      {direction === "up" && <ArrowUp />}
      <p className="arrow-button-text">{text}</p>
      {direction === "down" && <ArrowDown />}
    </div>
  );
};

export default ArrowButton;
