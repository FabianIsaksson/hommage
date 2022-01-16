import VerticalPanes from "../components/vertical-panes";
import testBlue from "../static/images/test_blue.jpg";
import testWhite from "../static/images/test_white.jpg";
import testLeopard from "../static/images/test_leopard.jpg";

const panes = [
  { name: "MAYA SUNDHOLM", image: testBlue },
  { name: "HILDA FERM", image: testWhite },
  { name: "ASLI CÖMERT", image: testBlue },
  { name: "ISABELLE SJÖMAN", image: testLeopard },
  { name: "SAMUEl WESTERBERG", image: testBlue },
  { name: "KEVIN NILSSON", image: testLeopard },
];

const Characters = () => <VerticalPanes panes={panes} />;

export default Characters;
