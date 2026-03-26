import { useEffect, useState } from "react";

const COLORS = {
  primary: "#278273",
  primaryDark: "#1f5f55",
  bg: "#278273",
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socioOpen, setSocioOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", color: "white", background: COLORS.bg }}>

      {/* ================= HEADER ================= */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,.10)",
        background: "rgba(31,95,85,.95)",
        backdropFilter: "blur(14px)"
      }}>
        <div style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative"
        }}>

          {/* MENU ESQUERDA */}
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              width: 48,
              height: 48,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.15)",
              background: "rgba(255,255,255,.10)",
              color: "white",
              fontSize: 22,
              cursor: "pointer"
            }}
          >
            ☰
          </button>

          {/* LOGO CENTRAL */}
          <a href="#hero" style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img
              src="/assets/logo.jpeg"
              alt="Brasiliense Esporte Clube"
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(255,255,255,.2)"
              }}
            />
          </a>

          {/* MENU DIREITA */}
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="#treinar">Treinar</a>
            <a href="#loja">Loja</a>
            <button
              onClick={() => setSocioOpen(true)}
              style={{
                background: COLORS.primary,
                color: "white",
                border: 0,
                borderRadius: 999,
                padding: "12px 20px",
                fontWeight: 800,
                cursor: "pointer"
              }}
            >
              Seja Sócio
            </button>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="hero" style={{
        padding: "80px 24px",
        maxWidth: 1200,
        margin: "0 auto"
      }}>
        <h1 style={{ fontSize: 56, fontWeight: 900 }}>
          Formação, performance e identidade esportiva.
        </h1>
        <p style={{ marginTop: 16 }}>
          O Brasiliense cresce como projeto poliesportivo.
        </p>
      </section>

    </div>
  );
}
