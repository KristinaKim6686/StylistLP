import { Item } from "./Item";
import { ImageList } from "./List.styled";

export const List = ({ items, onClick }) => {
  return (
    <>
      <ImageList>
        {items.map((item, index) => (
          <Item url={item.min} alt={item.alt} id={item.id} onClick={onClick} />
        ))}
      </ImageList>
    </>
  );
};
