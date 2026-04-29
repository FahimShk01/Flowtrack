import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(15, 23, 42, 0.9)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#fff" }}>
        Trackflow
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
          Home
        </a>
        <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
          Dashboard
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
