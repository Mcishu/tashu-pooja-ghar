import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";
import Navbar from "../components/Navbar";

const Admin = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    const data = querySnapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "orders", id));
    fetchOrders();
  };

  return (
    <div style={{ background: "#fffaf3", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ color: "#8b0000", margin: 0 }}>Admin Dashboard</h2>

          <button
            onClick={() => signOut(auth)}
            style={{
              padding: "8px 14px",
              background: "#333",
              color: "white",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {orders.length === 0 ? (
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0 }}>No orders yet.</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {orders.map((order) => (
              <div
                key={order.id}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "18px",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <h4 style={{ color: "#8b0000", marginTop: 0 }}>{order.name}</h4>

                <p><strong>Phone:</strong> {order.phone}</p>
                <p><strong>Product:</strong> {order.product}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  <strong>Address:</strong> {order.address}
                </p>

                <button
                  onClick={() => handleDelete(order.id)}
                  style={{
                    marginTop: "10px",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    border: "none",
                    background: "linear-gradient(135deg, #8b0000, #d4a017)",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Mark Completed
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
