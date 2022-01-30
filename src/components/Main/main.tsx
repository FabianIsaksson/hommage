import "./main.scss";
import Frame from "../Frame/frame";
import { useState } from "react";

const Main = () => {
  const [showFrame, setShowFrame] = useState(true);

  return (
    <div className="main">
      <button
        onClick={() => {
          setShowFrame(true);
          console.log("clicked");
        }}
      >
        Show Collection
      </button>

      <Frame show={showFrame} setShow={setShowFrame} />
    </div>
  );
};

export default Main;
