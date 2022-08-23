import { Image } from "./List.styled";

export const Item = ({ url, alt }) => {
  return (
    <>
      <Image src={url} alt={alt} />
    </>
  );
};
