import "../../css/Header/Header.css";
import { staticData } from "../../data/static-data";

const Header = () => {
  return <header>{staticData.headerTitle}</header>;
};

export default Header;
