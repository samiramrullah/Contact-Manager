import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar_main">
      <div className="logo">
        <span>C</span>ontact <span>M</span>anager
      </div>
      <div className="navlink">
        <NavLink className={"link"} to="/">
          Home
        </NavLink>
        <NavLink className={"link"} to="/about">
          About
        </NavLink>
        <Link className={"link"} to="/contact">
          Show Contact
        </Link>
        <NavLink className={"link_contact"} to="/addcontact">
          Add Contact
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
