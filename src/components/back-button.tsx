import "./back-button.scss";
import { ReactComponent as ArrowLeft } from "../static/svg/arrow-left.svg";
import { HTMLAttributes } from "react";

const BackButton = ({
  onClick,
  style,
}: // text,
// direction,
// absolute,
// show,
HTMLAttributes<HTMLDivElement> & {
  // text: string;
  // direction: "up" | "down";
  // absolute?: boolean;
  // show?: boolean;
  onClick?: () => void;
}) => {
  // const [display, setDisplay] = useState(
  //   typeof show === "boolean" ? show : true,
  // );

  // useEffect(() => {
  //   if (!display && show) {
  //     setDisplay(show);
  //   }
  // }, [show]);

  return (
    <div
      style={style}
      className="back-button clickable "
      // className={classNames("arrow-button", {
      //   "absolute-up": direction === "up" && absolute,
      //   "absolute-down": direction === "down" && absolute,
      //   hide: !display,
      // })}
      // style={{ opacity: typeof show === "boolean" && !show ? 0 : 1 }}
      // onTransitionEnd={() => !show && setDisplay(false)}
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

export default BackButton;
