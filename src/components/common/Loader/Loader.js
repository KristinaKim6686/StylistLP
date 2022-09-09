import { Container } from "./Loader.styled";
import { BallTriangle } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Container>
      <BallTriangle
        heigth='100'
        width='100'
        color='#df9f28'
        ariaLabel='loading-indicator'
      />
    </Container>
  );
};
