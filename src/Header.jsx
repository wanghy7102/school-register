import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/school-register/" className="brand-logo left">
          <i className="material-icons">school</i>
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/school-register/">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
