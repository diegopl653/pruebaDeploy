import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = ({id}) => {

  return (
    <>
      <nav className="navigator">
        <Link to="/" className="home">Home</Link>
        <Link to="/about" className="about">About Us</Link>
        <Link to={`/about/${id}`} className="about">About Us</Link>
      </nav>
    </>
  );
};
export default Nav;
