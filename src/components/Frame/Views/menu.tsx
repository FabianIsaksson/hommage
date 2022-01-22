import { useEffect, useState } from "react";
import { FrameLookbook } from "../types";
import "./menu.scss";

const Menu = ({
  lookbooks,
  onSelectBook,
}: {
  lookbooks: FrameLookbook[];
  onSelectBook: (book: FrameLookbook) => void;
}) => {
  const [idleAnimation, setIdleAnimation] = useState(true);
  const initialBook = lookbooks[Math.floor(Math.random() * lookbooks.length)];

  const [highlightedLookbook, setHighlightedLookbook] =
    useState<FrameLookbook>(initialBook);

  // Idle animation
  useEffect(() => {
    // let pane = 0;
    // let increment = 1;

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
    }, 3000);

    // if (hasClicked) {
    //   clearInterval(idle);
    // }

    return () => {
      clearInterval(idle);
    };
  }, [highlightedLookbook, idleAnimation]);

  return (
    <div
      className="frame-menu"
      style={{
        backgroundImage: `url(${highlightedLookbook.image})`,
      }}
    >
      <div className="frame-menu-overlay" />
      <ul>
        {lookbooks.map((book) => (
          <li
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
                  setIdleAnimation(false);
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
