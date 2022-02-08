import "./frame.scss";
import { ReactComponent as Logo } from "../../static/svg/logo.svg";

import { FrameLookbook } from "./types";
import Menu from "./Views/menu";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Lookbook from "./Views/lookbook";
import BackButton from "../back-button";
import { useWindowSize } from "../../hooks/useWindowSize";
import classNames from "classnames";
import { lookbookImages } from "./lookbook-images";

const lookbooks: FrameLookbook[] = [
  {
    designerName: "Saveja Sevéra Awzel",
    title: "She said it herself!",
    brandName: "Gunilla Pontén",
    ...lookbookImages.saveja,
    copy: "When Gunilla Pontén wrote - “You are no real human without humour in the bottom of your heart” in her blogg, she described her design aesthetic in one simple sentence.\n\nMemorable, nonchalant yet pulled together and unpredictable is a Gunilla Pontén kind of girl. That is exactly the sort of attitude and energy my collection portraits, but in a contemporary way.",
    socials: [
      {
        link: "https://www.instagram.com/iamsevera/ ",
        name: "instagram",
      },
      {
        link: "mailto:saveja.awzel@edu.beckmans.se",
        name: "email",
      },
    ],
  },
  {
    designerName: "ASLI CÖMERT",
    title: "From A to BIBA",
    brandName: "BIBA",
    ...lookbookImages.asli,
    copy: "This collection is an hommage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl.\n\nThe silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the art deco era. Prints and textiles are influenced by her alluring way of using animal prints and a nod to her first garment she sold, the pink gingham dress.",
    socials: [
      {
        link: "https://www.instagram.com/comazli/",
        name: "instagram",
      },
      {
        link: "mailto:asli.comert@edu.beckmans.se",
        name: "email",
      },
    ],
  },
  {
    designerName: "DESIRÉE BJURINDER FRITZON",
    title: "NOT SO LITTLE ANYMORE",
    brandName: "BIBA",
    ...lookbookImages.desiree,
    copy: "Biba represented something cool and desirable - A conceptual brand with a whole world for young women to discover themselves in.\n\nThe collection, NOT SO LITTLE ANYMORE, reflects liberation and transition; progress from girl to woman with space to explore oneself on one's own terms.\nThe expression alludes to sensuality and self-distance with a strong attitude: a contemporary modern and playful interpretation of adulthood.\n\nIn my work, I have interpreted Biba's straight silhouettes, marked shoulders and round cuts that refer to the wrestler's back. Recurring in the collection is Art Nouveau's winding design language. The sober and classic color scheme reflects the modern woman. The collection consists of timeless materials for a consumer who values quality; natural materials such as vegetable-tanned leather combined with wool constitute a sustainability perspective.",
    socials: [
      {
        link: "https://www.instagram.com/desireebjurinderfritzon/",
        name: "instagram",
      },
      {
        link: "mailto:desiree.bjurinder.fritzon@edu.beckmans.se",
        name: "email",
      },
    ],
  },
  {
    designerName: "SAMUEL WESTERBERG",
    title: "“voy_ex”",
    brandName: "BACK",
    ...lookbookImages.samuel,
    copy: "In an urban society there is constant surveillance, in the metro and the supermarket, even through your personal devices.\n\nHow much of this are we aware of, and who is watching us from the other side of the screen?\n\nIn this collection I have explored the theme of voyeurism in relation to exhibitionism. Through symbolic references, like binocular bags and jockstraps, as well as the concept of peeking through the blinds, I have translated ”the stalker” and ”the camboy”. These contradicting archetypes can be described as a perpetrator and a victim, but through my research I found that one can not live without the other, creating a power play.\n\nIn my interpretation of Ann-Sofie Backs brand I have played with the juxtaposition of pornographic references and classic tailoring to create a cohesive and challenging expression.\n\nThe collection is meant to be gender fluid, not gender neutral.\n\nBack's concept of ”aspirational fabrics” shows throughout the collection, while still developing a personal and challenging point of view of handcraft and material exploration.\n\nThis is realized by working with dead-stock fabrics and up-cycling old garments, as well as creating new materials by hand. All of the garments are constructed and developed in CLO3d to minimize the physical waste in the process of realizing the collection.",
    socials: [
      {
        link: "https://www.instagram.com/sml.wstrbrg/",
        name: "instagram",
      },
      {
        link: "mailto:samuel.westerberg@edu.beckmans.se",
        name: "email",
      },
    ],
  },
  {
    designerName: "TEODOR WARPE",
    title: "Bizarre Desires",
    brandName: "BACK",
    ...lookbookImages.teo,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment.",
    socials: [
      {
        link: "https://www.instagram.com/teodor.lizzy/",
        name: "instagram",
      },
      {
        link: "mailto:teodor.warpe@edu.beckmans.se",
        name: "email",
      },
    ],
  },

  {
    designerName: "HILDA LANDSTRÖM FERM",
    title: "Figura",
    brandName: "CLAUDE MONTANA",
    ...lookbookImages.hilda,
    copy: "A collection where material has been formed around the body with the aim of investigating how to turn the wearer herself into a living sculpture. The collection interprets the woman that Montana fantasized about. Independent, free and in control, but also playful and with a desire to stand out.\n\nLeather crafts and cuts, significant Montana details such as collars and zips, carefully selected materials and sculptural shapes; all with an uncompromising focus on female elegance and strength. A redefined representation of the woman, with accentuated body parts but proportions displaced. From sharp shoulders to rounded elbows, from past to present.\n\nThe Montana woman has been transformed into a contemporary, modern and independent woman, as a consumer is selective in her choices and cares about the longevity of the garment.",
    socials: [
      {
        link: "https://www.instagram.com/hildalandstromferm/",
        name: "instagram",
      },
      {
        link: "mailto:hilda.landstrom.ferm@edu.beckmans.se",
        name: "email",
      },
    ],
  },
  {
    designerName: "MAYA SUNDHOLM",
    title: "PERIODICULT",
    brandName: "CLAUDE MONTANA",
    ...lookbookImages.maya,
    copy: "Being inspired by the attitude and personality in a Claude Montana design, I wanted my collection to portray power in the sense of a dress form that allows the customer to access and achieve confidence whenever the garments are worn.\n\nWith inspirations from authoritarian dress styles such as martial wear and business wear and the influences of 80s power dressing, I am using heavy tailored garments in combination with athletic silhouettes and fabrics for a mixing of textures, yet also keeping that same attitude displayed in a Claude Montana design.\n\nIn honor of the brand I have worked with selected colours and cuts, balancing a depth and futuristic tone throughout the collection.",
    socials: [
      {
        link: "https://www.instagram.com/sundholmmaya/",
        name: "instagram",
      },
      {
        link: "mailto:mayasundholm@gmail.com",
        name: "email",
      },
    ],
  },
  {
    designerName: "ISABELLE SJÖMAN",
    title: "Fullmånenätter",
    brandName: "SIGHSTEN HERRGÅRD",
    ...lookbookImages.isabelle,
    copy: "“There are some nights when the moon has a ring of light around it and you should be extra careful with all evil thoughts you think that night because they go straight into the heart”\n\n- Sighsten herrgård \n\nThe collection Fullmånenätter was created in hommage to Sighsten herrgård. I was inspired by his image and his way of being and expressing himself latent. The collection depicts a bright and easy-going side with a  combination of poetic elements and elegance. \n\nIn my interpretation of Sighstens brand, I have taken note of Sighstens silhouettes and simple lines but added a more tailored expression. The most prominent in the collection are my experimental choices of  materials for a more timeless collection that is not dependent on the seasons.\n\nThanks to Linnea Persson & Martin Andersson. ",
    socials: [
      {
        link: "https://www.instagram.com/isabellesjoman/",
        name: "instagram",
      },
      {
        link: "mailto:isabelle.sjoman@edu.beckmans.se ",
        name: "email",
      },
    ],
  },
  {
    designerName: "KEVIN NILSSON",
    title: "The Jetsets",
    brandName: "SIGHSTEN HERRGÅRD",
    ...lookbookImages.kevin,
    copy: "”From plane, to hotel, to pool, to the office, to clubs.” \n\n”The definition of a jet setter is a person who travels frequently; often, from one stylish, exclusive or exotic place to another, someone in high society with a glamorous life.”\n\nThe collection takes off from a contemporary jetset lifestyle and is a hommage to Sighsten Herrgård. His persona and a PR genius, the people's designer and his way of expressing himself. \n\nThe inspiration from Sighsten's design is reflected in the garment's details such as pockets, buttons and cuts. My version of the classic Sighsten overalls, the military aspects of the coat and trousers now gets a new look with a glamorous, unisex and slightly sporty feel. The key accessory in the collection is the oversized chain belt that reappears in different variants, colors and sizes. \n\nThrough material and print in his signature colors together with new exciting accent colors, this is a timeless wardrobe with something for everyone to fall in love with. Regardless of the season, these garments are suitable whether you are going to the office, out in a snowstorm, to the pool or to a party. This allows the wearer to playfully mix and match with the garments that can be combined in many contemporary different ways.\n\nThe collection consists of natural materials such as wool, organic cotton and silk. Together with lycra and also organic cotton twill. Fabric spills are taken care of by using them in small details on garments.\n\nJewelry and chains are created using a 3D printer, with PLA plastic which is a naturally degradable bioplastic made from renewable resources. The pieces of choice give the collection a stronger durability, season after season, trip after trip.\n\nThanks to: PFG Stockholm",
    socials: [
      {
        link: "https://www.instagram.com/kevve_n/",
        name: "instagram",
      },
      {
        link: "mailto:kevin.nilsson@edu.beckmans.se",
        name: "email",
      },
    ],
  },
  {
    designerName: "ALICE SVENSSON BROSTEDT",
    title: "(YOU HAVE BEEN A) GOOD GIRL",
    brandName: "AUGUSTA LUNDIN",
    ...lookbookImages.alice,
    copy: "Augusta Lundin created everyday and party garments for the Swedish female upper class during the 19th century. \n\nIn my interpretation of the Augusta Lundin brand I have started from the concept of a ”good” girl who goes back to the ”nice” girl of the 19th century. Its parables and differences, where women are high-performing both in their work and at home. The collection symbolizes both a woman as a child, young and adult, through an interaction and impressions you get during life. \n\nFrom Augusta Lundins garments, I have been inspired by details, silhouettes, cuts and crafts. I have created wearable, luxurious and everyday garments for the contemporary ”strong woman”, where the collection has both feminine and masculine elements. \n\nThe sustainability perspective in my collection is visualized through nature and deadstock material. I have also hand-woven a textile on my loom in a Swedish wool and linen, for its specific expression and to connect it to the craftsmanship that permeated the Augusta Lundin brand. The accessories in the collection are brooches that can be placed anywhere on the garments, which creates a variation.",
    socials: [
      {
        link: "https://www.instagram.com/alice.svensson.b/",
        name: "instagram",
      },
      {
        link: "mailto:alice.svensson.brostedt@edu.beckmans.se",
        name: "email",
      },
    ],
  },
  {
    designerName: "GABRIELLA DANERLÖV",
    title: "Luck be a Lady",
    brandName: "AUGUSTA LUNDIN",
    ...lookbookImages.gabriella,
    copy: "In my hommage collection for Augusta Lundin I focused on Augustas nack for being in tune with her customers way of life and needs while producing things of usage for clientele in line with current trends.\n\nThe young debutants could buy their entire wardrobe for any occasion or dress codes they might encounter all in her characteristic feminin, flattering, fashionable, flirty, escapistic and luxurious style.\n\nBy imagining the young debutant dressing for the high society from the turn of the last century to an it-girl or influencer today, met by press or social media instead, I can overlap their worlds. With the exchange of society to social media.\n\nThis takes shape in a capsule collection for “the modern day debutant”with inspiration drawn from clothing and dress codes from her “ancestors”,letting their wardrobes and daily lives meet and translate.",
    socials: [
      {
        link: "https://www.instagram.com/gabrielladanerlov/",
        name: "instagram",
      },
      {
        link: "mailto:gabriella.danerlov@edu.beckmans.se",
        name: "email",
      },
    ],
  },
  {
    designerName: "THOMAS WIESER",
    title: "Untitled",
    brandName: "AUGUSTA LUNDIN",
    ...lookbookImages.thomas,
    copy: "Under the banner “Beckmans Hommage” we were assigned with a designer who was either Swedish or had greatly influenced Swedish design. I was paired with Augusta Lundin, Sweden's first couture maker.  \n\nWith this collection and collaboration I wanted to explore how women's dresses and ball gowns could be made into clothes not only for women, and not only for special occasions. By using Augustas techniques and material choices I have experimented with  draped tailoring and eclectic use of material layering.",
    socials: [
      {
        link: "https://www.instagram.com/wiesertamas/",
        name: "instagram",
      },
      {
        link: "mailto:contact@thomaswieser.com",
        name: "email",
      },
    ],
  },
];

const Frame = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const windowSize = useWindowSize();
  const frameRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lookbookRef = useRef<HTMLDivElement>(null);
  const [fadeTop, setFadeTop] = useState(1);

  const [listenScroll] = useState<boolean>(true);
  const [highlightedLookbook, setHighlightedLookbook] =
    useState<FrameLookbook | null>(null);
  const [selectedLookbook, setSelectedLookbook] =
    useState<FrameLookbook | null>(
      // lookbooks[Math.floor(Math.random() * lookbooks.length)],
      null,
    );

  const [imageVersion, setImageVersion] = useState(1);

  const prevHighlight = useRef(highlightedLookbook);

  useEffect(() => {
    // assign the ref's current value to the count Hook
    prevHighlight.current = highlightedLookbook;
  }, [highlightedLookbook]); //run this code when the value of count changes

  const scrollLeft = useCallback(
    (onComplete?: () => void) => {
      // setListenScroll(false);
      frameRef.current?.classList.remove("scroll-snap-x");

      frameRef.current?.scrollBy({
        top: 0,
        left: -window.innerWidth,
        behavior: "smooth",
      });

      setTimeout(() => {
        frameRef.current?.classList.add("scroll-snap-x");
        setFadeTop(1);
        if (onComplete) {
          onComplete();
        }
      }, 500);
    },
    [frameRef],
  );

  const scrollRight = useCallback(
    (onComplete?: () => void) => {
      // setListenScroll(false);
      if (windowSize.isMobile) {
        frameRef.current?.classList.remove("scroll-snap-x");
      }

      frameRef.current?.scrollBy({
        top: 0,
        left: window.innerWidth,
        behavior: "smooth",
      });

      setTimeout(() => {
        frameRef.current?.classList.add("scroll-snap-x");

        setFadeTop(1);
        if (menuRef.current) {
          menuRef.current.scrollTop = 0;
        }

        if (onComplete) {
          onComplete();
        }
        // setListenScroll(true);
      }, 500);
    },
    [frameRef],
  );

  useEffect(() => {
    if (frameRef.current) {
      frameRef.current.classList.add("scroll-snap-x");
      // // TEMP
      // frameRef.current.scrollLeft = window.innerWidth;
    }
  }, []);

  useEffect(() => {
    const exit = () => {
      if (
        frameRef.current &&
        menuRef.current &&
        listenScroll &&
        frameRef.current.scrollLeft === menuRef.current.offsetLeft
      ) {
        setSelectedLookbook(null);
        setFadeTop(1);
      }
    };

    frameRef.current?.addEventListener("scroll", exit);
    return () => {
      frameRef.current?.removeEventListener("scroll", exit);
    };
  }, [listenScroll]);

  useEffect(() => {
    const fade = (ref: RefObject<HTMLDivElement>) => {
      setFadeTop(1 - (ref.current?.scrollTop ?? 1 ^ 2) / 100);
    };

    lookbookRef.current?.addEventListener("scroll", () => fade(lookbookRef));
    menuRef.current?.addEventListener("scroll", () => fade(menuRef));
    return () => {
      lookbookRef.current?.removeEventListener("scroll", () =>
        fade(lookbookRef),
      );
      menuRef.current?.removeEventListener("scroll", () => fade(frameRef));
    };
  }, [selectedLookbook]);

  const [animateOut, setAnimateOut] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const triggerAnimateOut = () => {
    setAnimateIn(false);
    setAnimateOut(true);
    setTimeout(() => {
      setShow(false);
      setAnimateOut(false);
    }, 500);
  };

  useEffect(() => {
    if (show && !animateIn) {
      setAnimateIn(true);
    }
  }, [show]);

  return (
    <div
      className={classNames("frame-container", {
        "frame-container-animate-out": animateOut,
        "frame-container-animate-in": animateIn,
        "frame-container-hide": !show,
      })}
    >
      <div
        ref={frameRef}
        className={"frame"}
        style={{
          backgroundImage:
            !windowSize.isMobile && selectedLookbook
              ? `url(${selectedLookbook.fullscreenImage})`
              : "none",
        }}
      >
        {windowSize.isMobile && (
          <>
            <img
              className={"frame-background-mobile"}
              style={{ opacity: imageVersion === 1 ? 1 : 0 }}
              alt="menu-background"
              src={
                imageVersion === 1
                  ? highlightedLookbook
                    ? highlightedLookbook.mobileImage
                    : ""
                  : prevHighlight.current?.mobileImage
              }
            ></img>
            <img
              alt="menu-background"
              className={"frame-background-mobile"}
              style={{ opacity: imageVersion === 2 ? 1 : 0 }}
              src={
                imageVersion === 2
                  ? highlightedLookbook
                    ? highlightedLookbook.mobileImage
                    : ""
                  : prevHighlight.current?.mobileImage
              }
            ></img>
          </>
        )}

        <BackButton
          style={{ opacity: fadeTop }}
          onClick={() => {
            if (selectedLookbook) {
              scrollLeft(() => {
                setSelectedLookbook(null);
              });
            } else {
              triggerAnimateOut();
            }
          }}
        />

        <div
          className="animated-overlay"
          style={{
            opacity: selectedLookbook ? 1 : 0,
            animation: selectedLookbook ? "pull-up 1s ease" : "",
          }}
        />
        <Menu
          onHighlightChange={(book: FrameLookbook) => {
            setHighlightedLookbook(book);
            if (imageVersion === 1) {
              setImageVersion(2);
            } else {
              setImageVersion(1);
            }
          }}
          menuRef={menuRef}
          lookbooks={lookbooks}
          selectedLookbook={selectedLookbook}
          onSelectBook={(book: FrameLookbook) => {
            setSelectedLookbook(book);
            setTimeout(() => {
              scrollRight();
            }, 10); // delay so the new page can render before scroll
          }}
        />

        {selectedLookbook && (
          <Lookbook
            lookbookRef={lookbookRef}
            lookbook={selectedLookbook}
          ></Lookbook>
        )}

        <Logo
          onClick={() => {
            triggerAnimateOut();
            setTimeout(() => {
              setSelectedLookbook(null);
            }, 500);
          }}
          style={{ opacity: fadeTop, zIndex: 1000 }}
          className="logo"
        />
      </div>
    </div>
  );
};

export default Frame;
