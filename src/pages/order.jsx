import { useState } from "react";
import Navbar from "../components/Navbar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useLanguage } from "../LanguageContext";

const Order = () => {
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "orders"), {
        ...formData,
        createdAt: new Date(),
      });

      const message =
        (lang === "en"
          ? `New Order from Tashu Pooja Ghar:\n\n`
          : `ताशु पूजा घर से नया ऑर्डर:\n\n`) +
        (lang === "en"
          ? `Name: ${formData.name}\nPhone: ${formData.phone}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nAddress: ${formData.address}`
          : `नाम: ${formData.name}\nफोन: ${formData.phone}\nप्रोडक्ट: ${formData.product}\nमात्रा: ${formData.quantity}\nपता: ${formData.address}`);

      const phoneNumber = "918178801479"; // Parent’s WhatsApp number (without +)

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");

      alert(lang === "en" ? "Order placed successfully!" : "ऑर्डर सफलतापूर्वक भेज दिया गया!");
      setFormData({ name: "", phone: "", product: "", quantity: "", address: "" });
    } catch (err) {
      alert(lang === "en" ? "Something went wrong!" : "कुछ गलत हो गया!");
    }
  };

  return (
    <div style={{ background: "#fffaf3", minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "500px",
          margin: "60px auto",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#8b0000", marginBottom: "20px" }}>
          {lang === "en" ? "Place Your Order" : "अपना ऑर्डर दें"}
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <input
            type="text"
            name="name"
            placeholder={lang === "en" ? "Your Name" : "आपका नाम"}
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder={lang === "en" ? "Phone Number" : "मोबाइल नंबर"}
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="product"
            placeholder={lang === "en" ? "Product Name" : "प्रोडक्ट का नाम"}
            value={formData.product}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="quantity"
            placeholder={lang === "en" ? "Quantity" : "मात्रा"}
            value={formData.quantity}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="address"
            placeholder={lang === "en" ? "Delivery Address" : "डिलीवरी पता"}
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "12px",
              borderRadius: "30px",
              border: "none",
              background: "linear-gradient(135deg, #8b0000, #d4a017)",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            {lang === "en" ? "Submit Order" : "ऑर्डर भेजें"}
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "14px",
};

export default Order;
