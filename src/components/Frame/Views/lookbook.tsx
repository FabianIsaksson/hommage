import { FrameLookbook } from "../types";
import "./lookbook.scss";

const Lookbook = ({
  lookbook,
}: {
  lookbook: FrameLookbook;
  // onSelectBook: (book: FrameLookbook) => void;
}) => {
  return (
    <div
      className="frame-lookbook"
      style={{ background: `url(${lookbook.image})` }}
    >
      <pre>{JSON.stringify(lookbook, null, 2)}</pre>
    </div>
  );
};

export default Lookbook;
