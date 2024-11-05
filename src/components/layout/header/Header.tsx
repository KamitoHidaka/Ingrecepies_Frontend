import "./Header.css";
import  {Dropdown}  from "../../common/dropdown/Dropdown";

import { Link } from "react-router-dom";
export const Header = () => {


  return (
    <div className="header-container">
        <Link to="/home">
          <div className="logo"></div>
        </Link>
      <Dropdown />
    </div>
  );
};
