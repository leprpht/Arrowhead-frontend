import leaf from "../../assets/leaf.svg"
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <img className="navbar__logo" src={leaf} />
        <h1 className="navbar__title">Arrowhead</h1>
      </div>

      <ul className="navbar__links">
        <li className="navbar__link">
            <a href="#home">Home</a>
        </li>
        <li className="navbar__link">
            <a href="#dashboard">Dashboard</a>
        </li>
        <li className="navbar__link">
            <a href="#charging">Charging</a>
        </li>
      </ul>
    </nav>
  );
}
