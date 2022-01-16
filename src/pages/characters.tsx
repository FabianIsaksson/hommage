import VerticalPanes from "../components/vertical-panes";
import testBlue from "../static/images/test_blue.jpg";
import testWhite from "../static/images/test_white.jpg";
import testLeopard from "../static/images/test_leopard.jpg";
import montana from "../static/images/brand-logos/montana.png";
import lundin from "../static/images/brand-logos/lundin.png";
import sightsen from "../static/images/brand-logos/sightsen.png";

const panes = [
  {
    brandLogo: sightsen,
    names: ["MAYA SUNDHOLM"],
    image: testBlue,
  },
  {
    brandLogo: lundin,
    names: ["HILDA FERM", "THOMAS WIESER"],
    image: testWhite,
  },
  {
    brandLogo: montana,
    names: ["ASLI CÖMERT", "THOMAS WIESER"],
    image: testBlue,
  },
  {
    brandLogo: sightsen,
    names: ["ISABELLE SJÖMAN", "THOMAS WIESER"],
    image: testLeopard,
  },
  {
    brandLogo: montana,
    names: ["SAMUEl WESTERBERG", "THOMAS WIESER"],
    image: testBlue,
  },
  {
    brandLogo: lundin,
    names: ["KEVIN NILSSON", "THOMAS WIESER", "THOMAS WIESER"],
    image: testLeopard,
  },
];

const Characters = () => <VerticalPanes panes={panes} />;

export default Characters;
