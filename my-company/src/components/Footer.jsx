function Footer() {
  const footerStyle = {
    backgroundColor: "#1e293b",
    color: "#ffffff",
    textAlign: "center",
    padding: "15px",
    marginTop: "40px",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
