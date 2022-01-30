import { RefObject, useEffect, useState } from "react";
import { FrameLookbook } from "../types";
import "./menu.scss";

const Menu = ({
  menuRef,
  lookbooks,
  selectedLookbook,
  onSelectBook,
  onHighlightChange,
}: {
  menuRef: RefObject<HTMLDivElement>;
  lookbooks: FrameLookbook[];
  selectedLookbook: FrameLookbook | null;
  onSelectBook: (book: FrameLookbook) => void;
  onHighlightChange: (book: FrameLookbook) => void;
}) => {
  const [idleAnimation, setIdleAnimation] = useState(!selectedLookbook);

  const initialBook = lookbooks[Math.floor(Math.random() * lookbooks.length)];
  const [highlightedLookbook, setHighlightedLookbook] =
    useState<FrameLookbook>(initialBook);

  useEffect(() => {
    onHighlightChange(highlightedLookbook);
  }, [highlightedLookbook]);

  // Preload images
  useEffect(() => {
    lookbooks.forEach((book) => {
      const mobile = new Image();
      mobile.src = book.mobileImage;

      const desktop = new Image();
      desktop.src = book.desktopImage;
      const fullscreen = new Image();
      fullscreen.src = book.fullscreenImage;
    });
  }, [lookbooks]);

  // Idle animation
  useEffect(() => {
    let prev = highlightedLookbook;

    const idle = setInterval(() => {
      if (!idleAnimation) {
        return;
      }

      const getRandomLookbook = () => {
        while (true) {
          const n = lookbooks[Math.floor(Math.random() * lookbooks.length)];
          if (lookbooks.indexOf(n) !== lookbooks.indexOf(highlightedLookbook)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            prev = n;
            return n;
          }
        }
      };

      const randomLookbook = getRandomLookbook();
      setHighlightedLookbook(randomLookbook);

      // onHighlightChange(randomLookbook);
    }, 3000);

    return () => {
      clearInterval(idle);
    };
  }, [highlightedLookbook, idleAnimation]);

  useEffect(() => {
    if (!selectedLookbook) {
      setIdleAnimation(true);
    } else {
      setIdleAnimation(false);
    }
  }, [selectedLookbook]);

  return (
    <div ref={menuRef} className="frame-menu">
      <div className="frame-menu-overlay" />
      <div
        className="frame-menu-desktop-image"
        style={{
          backgroundImage: `url(${highlightedLookbook.desktopImage})`,
        }}
      ></div>
      <ul>
        {lookbooks.map((book) => (
          <li
            onMouseOver={() => setHighlightedLookbook(book)}
            style={{
              opacity:
                highlightedLookbook?.designerName === book.designerName
                  ? 1
                  : 0.7,
            }}
            key={book.designerName}
            onClick={() => {
              if (!(book.designerName === highlightedLookbook.designerName)) {
                setHighlightedLookbook(book);
                setTimeout(() => {
                  onSelectBook(book);
                }, 500);
              } else {
                onSelectBook(book);
              }
            }}
          >
            {book.designerName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
