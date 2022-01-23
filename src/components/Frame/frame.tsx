import "./frame.scss";
// Lookbook
import looken from "../../static/images/lookbook/looken.png";
// import alice from "../../static/images/lookbook/alice.png";
// import asli from "../../static/images/lookbook/asli.png";
// import desiree from "../../static/images/lookbook/desiree.png";
// import gabriella from "../../static/images/lookbook/gabriella.png";
// import gabriella2 from "../../static/images/lookbook/gabriella2.png";
// import hilda from "../../static/images/lookbook/hilda.png";
// import isabelle from "../../static/images/lookbook/isabelle.png";
// import kevin from "../../static/images/lookbook/kevin.png";
// import maya from "../../static/images/lookbook/maya.png";
// import samuel from "../../static/images/lookbook/samuel.png";
// import teodor from "../../static/images/lookbook/teodor.png";
// import thomas from "../../static/images/lookbook/thomas.png";

// Characters
import augusta1 from "../../static/images/characters/augusta1.jpg";
import augusta2 from "../../static/images/characters/augusta2.jpg";
import augusta3 from "../../static/images/characters/augusta3.jpg";
import back1 from "../../static/images/characters/back1.jpg";
import back2 from "../../static/images/characters/back2.jpg";
import biba1 from "../../static/images/characters/biba1.jpg";
import biba2 from "../../static/images/characters/biba2.jpg";
import montana1 from "../../static/images/characters/montana1.jpg";
import montana2 from "../../static/images/characters/montana2.jpg";
import ponten1 from "../../static/images/characters/ponten1.jpg";
import sighsten1 from "../../static/images/characters/sighsten1.jpg";
import sighsten2 from "../../static/images/characters/sighsten2.jpg";
import { FrameLookbook } from "./types";
import Menu from "./Views/menu";
import { useCallback, useEffect, useRef, useState } from "react";
import Lookbook from "./Views/lookbook";

const lookbooks: FrameLookbook[] = [
  {
    designerName: "SAVEJA AIWUZHALI",
    brandName: "CLAUDE MONTANA",
    image: ponten1,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "ASLI CÖMERT",
    brandName: "BIBA",
    image: biba1,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "DESIRÉE BJURINDER FRITZON",
    brandName: "BIBA",
    image: biba2,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "SAMUEL WESTERBERG",
    brandName: "BACK",
    image: back1,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "TEODOR WARPE",
    brandName: "BACK",
    image: back2,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },

  {
    designerName: "HILDA LANDSTRÖM FERM",
    brandName: "CLAUDE MONTANA",
    image: montana1,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "MAYA SUNDHOLM",
    brandName: "CLAUDE MONTANA",
    image: montana2,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "ISABELLE SJÖMAN",
    brandName: "SIGHSTEN HERRGÅRD",
    image: sighsten1,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "KEVIN NILSSON",
    brandName: "SIGHSTEN HERRGÅRD",
    image: sighsten2,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "ALICE SVENSSON BROSTEDT",
    brandName: "AUGUSTA LUNDIN",
    image: augusta1,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "GABRIELLA DANERLÖV",
    brandName: "AUGUSTA LUNDIN",
    image: augusta2,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
  {
    designerName: "THOMAS WIESER",
    brandName: "AUGUSTA LUNDIN",
    image: augusta3,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
    pages: [looken, looken, looken, looken],
    socials: [
      {
        link: "https://www.google.com",
        name: "google",
      },
      {
        link: "https://www.instagram.com/",
        name: "instagram",
      },
    ],
  },
];

const Frame = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [listenScroll] = useState<boolean>(true);
  const [highlightedLookbook, setHighlightedLookbook] =
    useState<FrameLookbook | null>(null);
  const [selectedLookbook, setSelectedLookbook] =
    useState<FrameLookbook | null>(
      lookbooks[Math.floor(Math.random() * lookbooks.length)],
    );

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
      frameRef.current?.classList.remove("scroll-snap-x");

      frameRef.current?.scrollBy({
        top: 0,
        left: window.innerWidth,
        behavior: "smooth",
      });

      setTimeout(() => {
        frameRef.current?.classList.add("scroll-snap-x");
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
      // TEMP
      frameRef.current.scrollLeft = window.innerWidth;
      frameRef.current.classList.add("scroll-snap-x");
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
      }
    };

    frameRef.current?.addEventListener("scroll", exit);
    return () => {
      frameRef.current?.removeEventListener("scroll", exit);
    };
  }, [listenScroll]);

  return (
    <div
      ref={frameRef}
      className="frame"
      style={{
        backgroundImage: highlightedLookbook
          ? `url(${highlightedLookbook.image})`
          : "",
      }}
    >
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
          onBack={() => {
            scrollLeft(() => setSelectedLookbook(null));
          }}
          lookbook={selectedLookbook}
        ></Lookbook>
      )}
    </div>
  );
};

export default Frame;
