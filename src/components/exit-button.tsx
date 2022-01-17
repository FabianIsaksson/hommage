import "./exit-button.scss";
import { ReactComponent as Exit } from "../static/svg/exit.svg";
import classNames from "classnames";
import { useEffect, useState } from "react";

const ExitButton = ({
  show,
  onClick,
}: {
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
      className={classNames("exit-button", {
        hide: !display,
      })}
      style={{ opacity: typeof show === "boolean" && !show ? 0 : 1 }}
      onTransitionEnd={() => !show && setDisplay(false)}
      onClick={onClick}
    >
      <Exit />
    </div>
  );
};

export default ExitButton;
