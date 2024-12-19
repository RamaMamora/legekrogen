import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src="/legekrogen_logo.png" alt="legekrogen_logo" />
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/Products">Produkter</NavLink>
        </li>
        <li>
          <NavLink to="/Faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/MyFavorites">Min favoritter</NavLink>
        </li>
        <li>
          <NavLink to="/MemberShip">Kundeklubben</NavLink>
        </li>
        <li>
          <NavLink to="/CartPage">Kurv</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
