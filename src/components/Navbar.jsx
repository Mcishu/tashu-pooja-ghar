import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Navbar = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, color: "#8b0000", letterSpacing: "1px" }}>
          {lang === "en" ? "Tashu Pooja Ghar" : "ताशु पूजा घर"}
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <NavItem to="/">{lang === "en" ? "Home" : "होम"}</NavItem>
          <NavItem to="/products">{lang === "en" ? "Products" : "प्रोडक्ट्स"}</NavItem>
          <NavItem to="/order">{lang === "en" ? "Order" : "ऑर्डर"}</NavItem>
          <NavItem to="/contact">{lang === "en" ? "Contact" : "संपर्क"}</NavItem>

          <button
            onClick={toggleLanguage}
            style={{
              padding: "6px 12px",
              borderRadius: "20px",
              border: "1px solid #8b0000",
              background: "white",
              color: "#8b0000",
              cursor: "pointer",
              fontSize: "13px",
            }}
          >
            {lang === "en" ? "हिंदी" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      color: "#333",
      fontWeight: "500",
    }}
  >
    {children}
  </Link>
);

export default Navbar;
