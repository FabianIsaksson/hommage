import BackButton from "../../back-button";
import { FrameLookbook } from "../types";
import "./lookbook.scss";

const Lookbook = ({
  lookbook,
  onBack,
}: {
  lookbook: FrameLookbook;
  onBack: () => void;
}) => {
  return (
    <div className="frame-lookbook">
      <div className="frame-lookbook-overlay" />
      <p>{lookbook.copy}</p>
      <BackButton onClick={onBack} />
    </div>
  );
};

export default Lookbook;
