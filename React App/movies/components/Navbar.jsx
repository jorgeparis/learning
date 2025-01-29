import "./Navbar.css";
import logo from "../assets/logo_4.svg";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <ul className="navbar-list">
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <span class="material-symbols-light--home-outline"></span>
            <span>Home</span>
          </li>
          <li>
            <span class="material-symbols-light--favorite"></span>
            <span>Favoritos</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
