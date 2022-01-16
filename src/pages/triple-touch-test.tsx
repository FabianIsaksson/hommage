import SplitScreenPanes from "../components/splitscreen-panes";
import testBlue from "../static/images/test_blue.jpg";
import testWhite from "../static/images/test_white.jpg";
import testLeopard from "../static/images/test_leopard.jpg";

const panes = [
  { name: "MAYA SUNDHOLM", image: testBlue },
  { name: "OTHER NAME", image: testLeopard },
  { name: "HILDA FERM", image: testWhite },
  { name: "DJSKD", image: testWhite },
];

const TripleTouchTest = () => <SplitScreenPanes panes={panes} />;

export default TripleTouchTest;
