import Navbar from "../components/Navbar";
import { useLanguage } from "../LanguageContext";

const Products = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ background: "#fffaf3", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ maxWidth: "1000px", margin: "60px auto", padding: "20px", textAlign: "center" }}>
        <h2 style={{ color: "#8b0000", marginBottom: "10px" }}>
          {lang === "en" ? "Our Collection" : "हमारा संग्रह"}
        </h2>

        <p style={{ color: "#555", marginBottom: "40px" }}>
          {lang === "en"
            ? "Pooja Samagri, Idols, Decorations & Festive Essentials"
            : "पूजा सामग्री, मूर्तियाँ, सजावट और त्योहार से जुड़ी सभी चीज़ें"}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {(lang === "en"
            ? [
                "Pooja Samagri",
                "Ganesh & Krishna Idols",
                "Navratri & Diwali Decor",
                "Rangoli, Diyas & Thalis",
                "Kids Festive Items",
                "Seasonal Festival Stock",
              ]
            : [
                "पूजा सामग्री",
                "गणेश और कृष्ण की मूर्तियाँ",
                "नवरात्रि और दिवाली सजावट",
                "रंगोली, दीये और थालियाँ",
                "बच्चों के त्योहार आइटम",
                "मौसमी त्योहार स्टॉक",
              ]
          ).map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "30px 20px",
                borderRadius: "18px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                fontWeight: "500",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
