import SplitScreenPanes from "../components/splitscreen-panes";
import testBlue from "../static/images/test_blue.jpg";
import testWhite from "../static/images/test_white.jpg";

const panes = [
  { name: "MAYA SUNDHOLM", image: testBlue },
  { name: "HILDA FERM", image: testWhite },
];

const TouchTest = () => <SplitScreenPanes panes={panes} />;

export default TouchTest;
