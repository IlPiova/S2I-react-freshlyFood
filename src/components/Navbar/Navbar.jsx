import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-freshly-food.png";

import "./navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="logo-container">
          <img src={logo} alt="logo-freshly-food" className="logo" />
        </Link>

        <p className="navbar-title">Freshly Food</p>
      </div>
    </>
  );
}

export default Navbar;
