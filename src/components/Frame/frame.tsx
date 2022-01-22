import "./frame.scss";
import testBlue from "../../static/images/test_blue.jpg";
import testWhite from "../../static/images/test_white.jpg";
import testLeopard from "../../static/images/test_leopard.jpg";
import { FrameLookbook } from "./types";
import Menu from "./Views/menu";
import { useCallback, useEffect, useRef, useState } from "react";
import Lookbook from "./Views/lookbook";

const lookbooks: FrameLookbook[] = [
  {
    designerName: "ASLI CÖMERT",
    brandName: "CLAUDE MONTANA",
    image: testLeopard,
    copy: "This collection is an homage for those young girls in London who looked up to their older sisters dressed in all BIBA and wanted to be like that, a BIBA girl. The silhuettes are inspired by the swinging sixties as well as Barbara Hulanicki’s love for the fashion of art deco art nouveau era.",
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
    brandName: "CLAUDE MONTANA",
    image: testBlue,
    copy: "test",
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
    image: testBlue,
    copy: "test",
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
    brandName: "CLAUDE MONTANA",
    image: testWhite,
    copy: "test",
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

  const [selectedLookbook, setSelectedLookbook] =
    useState<FrameLookbook | null>(null);

  const scrollLeft = useCallback(() => {
    // setListenScroll(false);
    frameRef.current?.classList.remove("scroll-snap-x");

    frameRef.current?.scrollBy({
      top: 0,
      left: -window.innerWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      frameRef.current?.classList.add("scroll-snap-x");
      // setListenScroll(true);
    }, 500);
  }, [frameRef]);

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
      frameRef.current.classList.add("scroll-snap-y");
      // pageRef.current.scrollTo({ top: window.innerHeight });
    }
  }, []);

  return (
    <div ref={frameRef} className="frame">
      <Menu
        lookbooks={lookbooks}
        onSelectBook={(book: FrameLookbook) => {
          setSelectedLookbook(book);
          setTimeout(() => {
            scrollRight();
          }, 10); // delay so the new page can render before scroll
        }}
      />
      {selectedLookbook && <Lookbook lookbook={selectedLookbook}></Lookbook>}
      {selectedLookbook && (
        <p onClick={() => scrollLeft()}>{selectedLookbook.designerName}</p>
      )}
    </div>
  );
};

export default Frame;
