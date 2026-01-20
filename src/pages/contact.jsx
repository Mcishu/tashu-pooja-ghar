import Navbar from "../components/Navbar";
import { useLanguage } from "../LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ background: "#fffaf3", minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "60px auto",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 12px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#8b0000" }}>
          {lang === "en" ? "Contact Us" : "संपर्क करें"}
        </h2>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          {lang === "en"
            ? "Tashu ho paas, toh har mauka ho khaas ✨"
            : "ताशु हो पास, तो हर मौका हो खास ✨"}
        </p>

        <div style={{ marginTop: "30px", lineHeight: "1.8" }}>
          <p>
            <strong>{lang === "en" ? "Phone" : "फ़ोन"}:</strong> +91 8178801479, +91 7683065318
          </p>

          <p>
            <strong>{lang === "en" ? "Address" : "पता"}:</strong><br />
            C 59, 60 Nyan Khand 2, Kala Pathar Road,<br />
            Opposite Mahagun Mansion,<br />
            Indirapuram, Ghaziabad,<br />
            Uttar Pradesh – 201014, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
