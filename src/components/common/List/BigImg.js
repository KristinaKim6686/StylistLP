import { BigImage } from "./List.styled";

export const BigItem = ({ url, alt }) => {
  return (
    <>
      <BigImage src={url} alt={alt}  />
    </>
  );
};
