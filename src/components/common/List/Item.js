import { Image } from "./List.styled";

export const Item = ({ url, alt,onClick }) => {
  return (
    <>
      <Image src={url} alt={alt} onClick={onClick} />
    </>
  );
};
