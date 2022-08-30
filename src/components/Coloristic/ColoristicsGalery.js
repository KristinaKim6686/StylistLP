import { List } from "../common/List/List";
import coloristics from "./Coloristics.json";
import { useNavigate } from "react-router-dom";
export function ColoristicsGalery() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/color");
  }
  return (
    <>
      <button onClick={handleClick}>go home</button>
      <List items={coloristics} />
    </>
  );
}
