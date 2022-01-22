import { FrameLookbook } from "../types";
import "./menu.scss";

const Menu = ({
  lookbooks,
  onSelectBook,
}: {
  lookbooks: FrameLookbook[];
  onSelectBook: (book: FrameLookbook) => void;
}) => {
  return (
    <div className="frame-menu">
      <ul>
        {lookbooks.map((book) => (
          <li
            key={book.designerName}
            onClick={() => {
              onSelectBook(book);
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
