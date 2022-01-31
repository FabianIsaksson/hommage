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
    designerName: "SAVEJA AIWUZHALI",
    title: "test",
    brandName: "CLAUDE MONTANA",
    ...lookbookImages.saveja,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "BIBA",
    ...lookbookImages.asli,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "BIBA",
    ...lookbookImages.desiree,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "BACK",
    ...lookbookImages.samuel,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "BACK",
    ...lookbookImages.teo,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "CLAUDE MONTANA",
    ...lookbookImages.hilda,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "CLAUDE MONTANA",
    ...lookbookImages.maya,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "SIGHSTEN HERRGÅRD",
    ...lookbookImages.isabelle,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "SIGHSTEN HERRGÅRD",
    ...lookbookImages.kevin,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "AUGUSTA LUNDIN",
    ...lookbookImages.alice,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "AUGUSTA LUNDIN",
    ...lookbookImages.gabriella,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
    title: "test",
    brandName: "AUGUSTA LUNDIN",
    ...lookbookImages.thomas,
    copy: "The collection Bizarre Desires draws from Ann-Sofie Back's inspiration of normality and her way of creating polarity in her collections. rubbing opposites against each other By creating a collection that is based on combining normality with extreme sexual themes (fetish). I do this by combining day-to-day garments. such as shirts and tailored coats. with garments and details exposed in the fetish scene. \n\nThe concept is inspired by the ignorance and mysticism of people around you. What lusts. needs and tensions they seek - The mystery of who is \"a freak\", who is deviant. \nThe purpose of the collection is to highlight sex and fetishes in a fashion context. Combine normality and sexuality in a concept as well as in materials. in the strive to manifest what desires can mean. A collection about sex. love and desire. \n\nFrom a sustainability perspective my concept originates in two timeless themes. sex and tailoring. As well as the fabrics used in the collection are deadstock. recycled or reused. \n\nIn the late 90's and early 2000's BACK had a certain feel about it: exclusive. bold and exciting. The costumer group was on the same page. they were looking for something refreshing in women·s fashion. something that made them get that certain feeling of empowerment. lf I were to restore BACK as brand I would like to try to recreate that in modern scene of fashion. for either gender. Aiming for the customer that looks for contemporary exclusiveness. boldness and empowerment. ",
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
            highlightedLookbook && windowSize.isMobile
              ? `url(${highlightedLookbook.mobileImage})`
              : selectedLookbook
              ? `url(${selectedLookbook.fullscreenImage})`
              : "none",
        }}
      >
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
