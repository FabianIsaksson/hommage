import "./colophon.scss";
import abbypriest from "../../static/images/sponsors/abbypriest.png";
import aplace from "../../static/images/sponsors/aplace.png";
import breel from "../../static/images/sponsors/breel.png";
import eldorado from "../../static/images/sponsors/eldorado.png";
import falsett from "../../static/images/sponsors/falsett.png";
import forsmanbodenfors from "../../static/images/sponsors/forsmanbodenfors.png";
import guldfabriken from "../../static/images/sponsors/guldfabriken.png";
import hawaii from "../../static/images/sponsors/hawaii.png";
import ibm from "../../static/images/sponsors/ibm.png";
import kamerastockholm from "../../static/images/sponsors/kamerastockholm.png";
import nobishotel from "../../static/images/sponsors/nobishotel.png";
import ohmy from "../../static/images/sponsors/ohmy.png";
import oriflame from "../../static/images/sponsors/oriflame.png";
import plick from "../../static/images/sponsors/plick.png";
import sfw from "../../static/images/sponsors/sfw.png";
import vitaminwell from "../../static/images/sponsors/vitaminwell.png";
import volt from "../../static/images/sponsors/volt.png";
import vont from "../../static/images/sponsors/vont.png";
import yearwood from "../../static/images/sponsors/yearwood.png";
import popup from "../../static/images/sponsors/popup.png";
import { ReactComponent as ArrowUp } from "../../static/svg/arrow-up.svg";
import { RefObject } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

// const sponsors = [
//   abbypriest,
//   aplace,
//   breel,
//   eldorado,
//   falsett,
//   forsmanbodenfors,
//   guldfabriken,
//   hawaii,
//   ibm,
//   kamerastockholm,
//   nobishotel,
//   ohmy,
//   oriflame,
//   plick,
//   sfw,
//   vitaminwell,
//   volt,
//   vont,
//   yearwood,
// ];

const Sponsors = () => {
  return (
    <div className="sponsor-section">
      <h2>SPECIAL THANKS TO</h2>
      <div className="sponsors">
        <div className="unit">
          <div className="half">
            <img alt="sponsor" src={abbypriest}></img>
          </div>
          <div className="half">
            <img alt="sponsor" src={aplace}></img>
          </div>
          <div className="whole">
            <img alt="sponsor" src={breel}></img>
          </div>
        </div>

        <div className="unit">
          <div className="half">
            <img alt="sponsor" src={eldorado}></img>
          </div>
          <div className="half">
            <img alt="sponsor" src={falsett}></img>
          </div>
          <div className="whole">
            <img alt="sponsor" src={forsmanbodenfors}></img>
          </div>
        </div>

        <div className="unit">
          <div className="half">
            <img alt="sponsor" src={guldfabriken}></img>
          </div>
          <div className="half">
            <img alt="sponsor" src={hawaii}></img>
          </div>
          <div className="whole">
            <img alt="sponsor" src={ibm}></img>
          </div>
        </div>

        <div className="unit">
          <div className="half">
            <img alt="sponsor" src={kamerastockholm}></img>
          </div>
          <div className="half">
            <img alt="sponsor" src={nobishotel}></img>
          </div>
          <div className="whole">
            <img alt="sponsor" src={ohmy}></img>
          </div>
        </div>

        <div className="unit">
          <div className="half">
            <img alt="sponsor" src={oriflame}></img>
          </div>
          <div className="half">
            <img alt="sponsor" src={plick}></img>
          </div>
          <div className="whole">
            <img alt="sponsor" src={sfw}></img>
          </div>
        </div>
        <div className="unit">
          <div className="half">
            <img alt="sponsor" src={vitaminwell}></img>
          </div>
          <div className="half">
            <img alt="sponsor" src={volt}></img>
          </div>
          <div className="half">
            <img alt="sponsor" src={vont}></img>
          </div>
        </div>
        <div className="unit">
          <div className="half">
            <img alt="sponsor" src={yearwood}></img>
          </div>
          <div className="half">
            <img alt="sponsor" src={popup}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

const Colophon = ({ mainRef }: { mainRef: RefObject<HTMLDivElement> }) => {
  const windowSize = useWindowSize();
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 250,
  });

  return (
    <>
      {!windowSize.isMobile && (
        <div
          style={{ marginTop: "24px" }}
          className="clickable"
          onClick={() => {
            mainRef.current?.scrollBy({
              top: -window.innerHeight,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUp />
        </div>
      )}
      <div
        className={classNames("colophon fade", { "fade-after": inView })}
        ref={ref}
      >
        <div className="group">
          <h2>FASHION DEPARTMENT</h2>
          <div className="section">
            <div className="part">
              <h3>Hommage to brands</h3>
              <ul>
                <li>Augusta Lundin</li>
                <li>Ann-Sofie Back</li>
                <li>Biba</li>
                <li>Claude Montana</li>
                <li>Gunilla Pont??n</li>
                <li>Sighsten Herrg??rd</li>
              </ul>
            </div>
            <div className="part">
              <h3>Fashion designers</h3>
              <ul>
                <li>Alice Svensson Brostedt</li>
                <li>Asli C??mert </li>
                <li>Desir??e Bjurinder Fritzon</li>
                <li>Gabriella Danerl??v</li>
                <li>Hilda Landstr??m Ferm</li>
                <li>Isabelle Sj??man</li>
                <li>Kevin Nilsson </li>
                <li>Maya Sundholm</li>
                <li>Samuel Westerberg</li>
                <li>Saveja Sev??ra Awzel</li>
                <li>Teodor Warpe</li>
                <li>Thomas Wieser</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="part">
              <h3>Program Director</h3>
              <ul>
                <li>P??r Engsheden</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="part">
              <h3>Head of Course</h3>
              <ul>
                <li>Manush Mirzakhanian</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="part">
              <h3>Lecturer</h3>
              <ul>
                <li>Martin Bergstr??m</li>
                <li>Lisbeth St??lborg</li>
                <li>G??ran Sundberg </li>
              </ul>
            </div>
            <div className="part">
              <h3>Fashion guest tutors</h3>
              <ul>
                <li>Margareta van den Bosch</li>
                <li>Lotta Lewenhaupt</li>
                <li>Kumi Kawaji Edstr??m</li>
                <li>Ida Sj??stedt</li>
                <li>Frida Bard</li>
                <li>Christian Lippich</li>
                <li>Linda Nurk</li>
                <li>Ulrika Elofsson</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group">
          <h2>Visual communication department</h2>
          <div className="section">
            <div className="part">
              <h3>Art Direction & concept</h3>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/alvnylander/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Alva Nylander
                  </a>
                </li>
                <li>
                  <a
                    href="http://clementineberglund.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cl??mentine Berglund
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hedvigmoberg/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hedvig Moberg
                  </a>
                </li>
                <li>
                  <a
                    href="http://leonardekenberg.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Leonard Ekenberg
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/linneajac/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linnea Jacobson
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="http://selvialbayrak.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Selvi Albayrak
                  </a>
                </li>
              </ul>
            </div>
            <div className="part">
              <h3>Program director</h3>
              <ul>
                <li>Samira Bouabana</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="part">
              <h3>Head of course</h3>
              <ul>
                <li>Samira Bouabana</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="part">
              <h3>Tutors</h3>
              <ul>
                <li>Johan Wilde</li>
                <li>Sheila Johansson</li>
                <li>Peter Str??m</li>
              </ul>
            </div>
            <div className="part">
              <h3>Visual communication guest tutors</h3>
              <ul>
                <li>Sophia Wood</li>
                <li>Ida Wessel</li>
                <li>Jonas Banker </li>
                <li>Anna Romson </li>
                <li>Amy Auscherman</li>
                <li>Julia Urb??n</li>
                <li>Martin L??fqvist</li>
                <li>Lova Nyblom</li>
                <li>Maina Arvas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="group">
          <h2>Production team</h2>
          <div className="section">
            <div className="part">
              <h3>Director</h3>
              <ul>
                <li>Hedvig Moberg</li>
              </ul>
            </div>
            <div className="part">
              <h3>First ass. Director</h3>
              <ul>
                <li>Cl??mentine Berglund</li>
              </ul>
            </div>
            <div className="part">
              <h3>Cinematographer</h3>
              <ul>
                <li>Alva Nylander</li>
              </ul>
            </div>
            <div className="part">
              <h3>Gaffer</h3>
              <ul>
                <li>Olof Jonsson</li>
              </ul>
            </div>
            <div className="part">
              <h3>First assistant camera</h3>
              <ul>
                <li>Arvid Larsson Bellander</li>
              </ul>
            </div>
            <div className="part">
              <h3>Typography</h3>
              <ul>
                <li>Selvi Albayrak</li>
              </ul>
            </div>
            <div className="part">
              <h3>Composer</h3>
              <ul>
                <li>Leonard Ekenberg</li>
              </ul>
            </div>
            <div className="part">
              <h3>Grading</h3>
              <ul>
                <li>Miles Lembke</li>
              </ul>
            </div>
            <div className="part">
              <h3>Photographer</h3>
              <ul>
                <li>Linnea Jacobson</li>
              </ul>
            </div>
            <div className="part">
              <h3>Set Designer</h3>
              <ul>
                <li>Linus Soinjoki</li>
              </ul>
            </div>
            <div className="part">
              <h3>Set Designer Assistants</h3>
              <ul>
                <li>Nora L??wenberg </li>
                <li>Julia Hallin</li>
              </ul>
            </div>
            <div className="part">
              <h3>VFX</h3>
              <ul>
                <li>Alva Nylander</li>
              </ul>
            </div>
            <div className="part">
              <h3>Location</h3>
              <ul>
                <li>Guldfabriken</li>
              </ul>
            </div>
            <div className="part">
              <h3>Hair & makeup</h3>
              <ul>
                <li>Dominika Newelska, Beautify</li>
                <li>Alicia Rickberg</li>
                <li>Amanda Dahl</li>
                <li>Daniella Ericsson</li>
              </ul>
            </div>
            <div className="part">
              <h3>Web designer</h3>
              <ul>
                <li>Cl??mentine Berglund</li>
              </ul>
            </div>
            <div className="part">
              <h3>Web developer</h3>
              <ul>
                <li>
                  <a
                    href="https://fabianisaksson.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fabian Isaksson
                  </a>
                </li>
              </ul>
            </div>
            <div className="part">
              <h3>Mikas</h3>
              <ul>
                <li>Bugra</li>
                <li>Tilde H</li>
                <li>Andrea R </li>
              </ul>
            </div>
            <div className="part">
              <h3>The Wonders</h3>
              <ul>
                <li>Anna-Lena</li>
              </ul>
            </div>
            <div className="part">
              <h3>Street Cast</h3>
              <ul>
                <li>Saveja Aiwuzhali</li>
                <li>Erik Sunnerstam</li>
                <li>Dog Ebbot (and dog manager Agnes Nelje)</li>
              </ul>
            </div>
            <h2>Talents fashion film</h2>
            <div className="part">
              <h3>Fiiri Agency</h3>
              <ul>
                <li>Said</li>
                <li>Patricia</li>
              </ul>
            </div>
            <div className="part">
              <h3>Mikas</h3>
              <ul>
                <li>Birga</li>
                <li>Tilde H</li>
                <li>Andrea R</li>
              </ul>
            </div>
            <div className="part">
              <h3>The Wonders</h3>
              <ul>
                <li>Anna-lena</li>
              </ul>
            </div>
            <div className="part">
              <h3>Street Cast</h3>
              <ul>
                <li>Saveja Sev??ra Awzel</li>
                <li>Erik Sunnerstam</li>
                <li>Dog Ebbot (with dog mom Agnes Nejle)</li>
              </ul>
            </div>
            <div className="part">
              <h3>Models</h3>
              <ul>
                <li>Mikas Stockholm</li>
                <li>Stockholmsgruppen</li>
                <li>Fiiri Agency </li>
                <li>FYE mgmt.</li>
                <li>Nisch mgmt</li>
                <li>The Wonders</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group">
          <h2>Fashion show</h2>
          <div className="section">
            <div className="part">
              <h3>Fashion Show production</h3>
              <ul>
                <li>Annika Berner</li>
                <li>Linda Nurk</li>
                <li>
                  <a
                    href="https://stockholmfashionweek.se/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    stockholmfashionweek
                  </a>
                </li>
              </ul>
            </div>
            <div className="part">
              <h3>Photographer</h3>
              <ul>
                <li>Mattias Nordgren</li>
              </ul>
            </div>
            <div className="part">
              <h3>Show Location</h3>
              <ul>
                <li>Nobis Hotel</li>
              </ul>
            </div>
            <div className="part">
              <h3>Runway Livestream</h3>
              <ul>
                <li>Studio Bon</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group">
          <h2>Publishing</h2>
          <div className="section">
            <div className="part">
              <h3>Director of External Relations</h3>
              <ul>
                <li>
                  <a
                    href="mailto:annika.berner@beckmans.se"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Annika Berner
                  </a>
                </li>
              </ul>
            </div>
            <div className="part">
              <h3>Press</h3>
              <ul>
                <li>
                  <a
                    href="mailto:sofia.hulting@beckmans.se"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sofia Hulting
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mynewsdesk.com/se/beckmans_designhogskola"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (Pressroom)
                  </a>
                </li>
              </ul>
            </div>
            <div className="part">
              <h3>Instagram</h3>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/beckmanscollegeofdesign/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @beckmanscollegeofdesign
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/stockholmfashionweekofficial/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @stockholmfashionweek
                  </a>
                </li>
              </ul>
            </div>
            <div className="part">
              <h3>Web</h3>
              <ul>
                <li>
                  <a
                    href="https://beckmans.se/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    beckmans
                  </a>
                </li>
              </ul>
            </div>
            <div className="part">
              <h3>Publishing & CEO</h3>
              <ul>
                <li>Karina Ericsson W??rn</li>{" "}
                <li>?? 2022 Beckmans College of Design</li>
                <li>Brahegatan 10</li>
                <li>114 37 Stockholm</li>
                <li>Sweden</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Sponsors></Sponsors>
      <div className="copyright">
        <h2>HOMMAGE</h2>
        <p>?? Beckmans College of Design {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Colophon;
