import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#1e293b",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
