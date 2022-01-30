import "./frame.scss";
import { ReactComponent as Logo } from "../../static/svg/logo.svg";

import looken from "../../static/images/lookbook/looken.png";
import infoPage from "../../static/images/info-image.png";

// Mobile menu
import desireeMobile from "../../static/images/menu-mobile/desiree_mobile.jpg";
import aliceMobile from "../../static/images/menu-mobile/alice_mobile.jpg";
import asliMobile from "../../static/images/menu-mobile/asli_mobile.jpg";
import gabriellaMobile from "../../static/images/menu-mobile/gabriella_mobile.jpg";
import hildaMobile from "../../static/images/menu-mobile/hilda_mobile.jpg";
import isabelleMobile from "../../static/images/menu-mobile/isabelle_mobile.jpg";
import kevinMobile from "../../static/images/menu-mobile/kevin_mobile.jpg";
import mayaMobile from "../../static/images/menu-mobile/maya_mobile.jpg";
import samuelMobile from "../../static/images/menu-mobile/samuel_mobile.jpg";
import savejaMobile from "../../static/images/menu-mobile/saveja_mobile.jpg";
import teoMobile from "../../static/images/menu-mobile/teo_mobile.jpg";
import thomasMobile from "../../static/images/menu-mobile/thomas_mobile.jpg";

// Desktop
import desireeDesktop from "../../static/images/menu-desktop/desiree_desktop.jpg";
import aliceDesktop from "../../static/images/menu-desktop/alice_desktop.jpg";
import asliDesktop from "../../static/images/menu-desktop/asli_desktop.jpg";
import gabriellaDesktop from "../../static/images/menu-desktop/gabriella_desktop.jpg";
import hildaDesktop from "../../static/images/menu-desktop/hilda_desktop.jpg";
import isabelleDesktop from "../../static/images/menu-desktop/isabelle_desktop.jpg";
import kevinDesktop from "../../static/images/menu-desktop/kevin_desktop.jpg";
import mayaDesktop from "../../static/images/menu-desktop/maya_desktop.jpg";
import samuelDesktop from "../../static/images/menu-desktop/samuel_desktop.jpg";
import savejaDesktop from "../../static/images/menu-desktop/saveja_desktop.jpg";
import teoDesktop from "../../static/images/menu-desktop/teo_desktop.jpg";
import thomasDesktop from "../../static/images/menu-desktop/thomas_desktop.jpg";

// Fullscreen
import desireeFullscreen from "../../static/images/menu-fullscreen/desiree_fullscreen.jpg";
import aliceFullscreen from "../../static/images/menu-fullscreen/alice_fullscreen.jpg";
import asliFullscreen from "../../static/images/menu-fullscreen/asli_fullscreen.jpg";
import gabriellaFullscreen from "../../static/images/menu-fullscreen/gabriella_fullscreen.jpg";
import hildaFullscreen from "../../static/images/menu-fullscreen/hilda_fullscreen.jpg";
import isabelleFullscreen from "../../static/images/menu-fullscreen/isabelle_fullscreen.jpg";
import kevinFullscreen from "../../static/images/menu-fullscreen/kevin_fullscreen.jpg";
import mayaFullscreen from "../../static/images/menu-fullscreen/maya_fullscreen.jpg";
import samuelFullscreen from "../../static/images/menu-fullscreen/samuel_fullscreen.jpg";
import savejaFullscreen from "../../static/images/menu-fullscreen/saveja_fullscreen.jpg";
import teoFullscreen from "../../static/images/menu-fullscreen/teo_fullscreen.jpg";
import thomasFullscreen from "../../static/images/menu-fullscreen/thomas_fullscreen.jpg";

// import gif from "../../static/images/desktop-gif.gif";

import { FrameLookbook } from "./types";
import Menu from "./Views/menu";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import Lookbook from "./Views/lookbook";
import BackButton from "../back-button";
import { useWindowSize } from "../../hooks/useWindowSize";

const lookbooks: FrameLookbook[] = [
  {
    designerName: "SAVEJA AIWUZHALI",
    title: "test",
    brandName: "CLAUDE MONTANA",
    mobileImage: savejaMobile,
    desktopImage: savejaDesktop,
    fullscreenImage: savejaFullscreen,
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
    title: "test",
    brandName: "BIBA",
    mobileImage: asliMobile,
    desktopImage: asliDesktop,
    fullscreenImage: asliFullscreen,
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
    title: "test",
    brandName: "BIBA",
    mobileImage: desireeMobile,
    desktopImage: desireeDesktop,
    fullscreenImage: desireeFullscreen,
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
    title: "test",
    brandName: "BACK",
    mobileImage: samuelMobile,
    desktopImage: samuelDesktop,
    fullscreenImage: samuelFullscreen,
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
    title: "test",
    brandName: "BACK",
    mobileImage: teoMobile,
    desktopImage: teoDesktop,
    fullscreenImage: teoFullscreen,
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
    title: "test",
    brandName: "CLAUDE MONTANA",
    mobileImage: hildaMobile,
    desktopImage: hildaDesktop,
    fullscreenImage: hildaFullscreen,
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
    title: "test",
    brandName: "CLAUDE MONTANA",
    mobileImage: mayaMobile,
    desktopImage: mayaDesktop,
    fullscreenImage: mayaFullscreen,
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
    title: "test",
    brandName: "SIGHSTEN HERRGÅRD",
    mobileImage: isabelleMobile,
    desktopImage: isabelleDesktop,
    fullscreenImage: isabelleFullscreen,
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
    title: "test",
    brandName: "SIGHSTEN HERRGÅRD",
    mobileImage: kevinMobile,
    desktopImage: kevinDesktop,
    fullscreenImage: kevinFullscreen,
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
    title: "test",
    brandName: "AUGUSTA LUNDIN",
    mobileImage: aliceMobile,
    desktopImage: aliceDesktop,
    fullscreenImage: aliceFullscreen,
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
    title: "test",
    brandName: "AUGUSTA LUNDIN",
    mobileImage: gabriellaMobile,
    desktopImage: gabriellaDesktop,
    fullscreenImage: gabriellaFullscreen,
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
    title: "test",
    brandName: "AUGUSTA LUNDIN",
    mobileImage: thomasMobile,
    desktopImage: thomasDesktop,
    fullscreenImage: thomasFullscreen,
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

  return (
    <div
      ref={frameRef}
      className="frame"
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
      <Logo style={{ opacity: fadeTop, zIndex: 1000 }} className="logo" />
    </div>
  );
};

export default Frame;
