import Navbar from "../components/Navbar";
import { useLanguage } from "../LanguageContext";

const Home = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#fffaf3", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #8b0000, #d4a017)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          {lang === "en" ? "Tashu Pooja Ghar" : "ताशु पूजा घर"}
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "auto" }}>
          {lang === "en"
            ? "Jahan har tyohar bane aur bhi khaas"
            : "जहाँ हर त्यौहार बने और भी खास"}
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            fontSize: "16px",
            borderRadius: "30px",
            border: "none",
            background: "white",
            color: "#8b0000",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {lang === "en" ? "Explore Products" : "प्रोडक्ट्स देखें"}
        </button>
      </section>

      {/* About Section */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", color: "#8b0000", marginBottom: "20px" }}>
          {lang === "en" ? "Har Tyohar Ka Saathi" : "हर त्यौहार का साथी"}
        </h2>

        <p style={{ textAlign: "center", fontSize: "16px", lineHeight: "1.8" }}>
          {lang === "en"
            ? "Tashu Pooja Ghar har din aur har tyohar ka saathi hai. Yahan sirf pooja ka samaan nahi milta, balki har festival ki poori feeling milti hai."
            : "ताशु पूजा घर हर दिन और हर त्यौहार का साथी है। यहाँ सिर्फ पूजा का सामान ही नहीं, बल्कि हर त्योहार की पूरी भावना मिलती है।"}
        </p>
      </section>

      {/* Feature Cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          padding: "40px 20px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {(lang === "en"
          ? [
              "12 Months Festival Collection",
              "Trending & Fresh Stock",
              "Bhakti + Celebration Balance",
              "Trusted Quality",
              "Apnapan Wali Service",
              "Every Detail Matters",
            ]
          : [
              "12 महीने का फेस्टिव कलेक्शन",
              "नया और ट्रेंडिंग स्टॉक",
              "भक्ति और उत्सव का संतुलन",
              "भरोसेमंद क्वालिटी",
              "अपनापन भरी सेवा",
              "हर छोटी बात का ध्यान",
            ]
        ).map((text, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            {text}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
