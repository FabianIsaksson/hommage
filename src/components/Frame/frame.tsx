import "./frame.scss";
import { ReactComponent as Logo } from "../../static/svg/logo.svg";

import looken from "../../static/images/lookbook/looken.png";
import infoPage from "../../static/images/info-image.png";

// Lookbook
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

import gif from "../../static/images/desktop-gif.gif";

import { FrameLookbook } from "./types";
import Menu from "./Views/menu";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import Lookbook from "./Views/lookbook";
import BackButton from "../back-button";
import { useWindowSize } from "../../hooks/useWindowSize";

const lookbooks: FrameLookbook[] = [
  {
    designerName: "SAVEJA AIWUZHALI",
    brandName: "CLAUDE MONTANA",
    image: ponten1,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
    infoPage,
    pages: [looken, looken, looken, looken, looken],
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
      lookbooks[Math.floor(Math.random() * lookbooks.length)],
      // null,
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
      frameRef.current?.classList.remove("scroll-snap-x");

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
      frameRef.current.scrollLeft = window.innerWidth;
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

  return (
    <div
      ref={frameRef}
      className="frame"
      style={{
        backgroundImage:
          highlightedLookbook && windowSize.isMobile
            ? `url(${highlightedLookbook.image})`
            : `url(${gif})`,
      }}
    >
      <BackButton
        style={{ opacity: fadeTop }}
        onClick={() => {
          scrollLeft(() => {
            if (selectedLookbook) {
              setSelectedLookbook(null);
            }
          });
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
      <Logo style={{ opacity: fadeTop }} className="logo" />
    </div>
  );
};

export default Frame;
