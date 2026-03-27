import { useEffect, useState } from "react";

const COLORS = {
  primary: "#278273",
  primaryDark: "#1f5f55",
  bg: "#ffffff",
  text: "#17322e",
  muted: "#5f6f6b",
  soft: "#f4f7f6",
  card: "#ffffff",
  border: "#dde7e3",
};

function styles() {
  return {
    container: {
      minHeight: "100vh",
      color: COLORS.text,
      background: COLORS.bg,
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    section: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 24px",
    },
    button: {
      background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
      color: "white",
      border: 0,
      borderRadius: 16,
      padding: "14px 24px",
      fontWeight: 800,
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
    },
  };
}

export default function App() {
  const s = styles();
  const [menuOpen, setMenuOpen] = useState(false);
  const [socioOpen, setSocioOpen] = useState(false);

  return (
    <div style={s.container}>
      {/* HEADER ATUALIZADO */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(255,255,255,.96)",
          borderBottom: `1px solid ${COLORS.border}`,
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            ...s.section,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            paddingTop: 12,
            paddingBottom: 12,
            gap: 16,
          }}
        >
          {/* ESQUERDA - MENU */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                width: 46,
                height: 46,
                borderRadius: 999,
                border: `1px solid ${COLORS.border}`,
                background: COLORS.soft,
                color: COLORS.primaryDark,
                fontSize: 20,
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              ☰
            </button>
          </nav>

          {/* LOGO */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/assets/logo.jpeg"
              alt="Logo"
              style={{
                height: 86,
                objectFit: "contain",
              }}
            />
          </div>

          {/* DIREITA - BOTÕES */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "flex-end",
            }}
          >
            <a
              href="#loja"
              style={{
                ...s.button,
                borderRadius: 999,
                padding: "12px 20px",
              }}
            >
              Loja
            </a>

            <button
              onClick={() => setSocioOpen(true)}
              style={{
                ...s.button,
                borderRadius: 999,
                padding: "12px 20px",
              }}
            >
              Seja Sócio
            </button>
          </nav>
        </div>
      </header>

      {/* RESTO DO SITE (mantido igual) */}
      <section style={{ padding: 100, textAlign: "center" }}>
        <h1>Seu site continua aqui normalmente 👇</h1>
        <p>Todo o restante do código permanece igual ao que você já tinha.</p>
      </section>
    </div>
  );
}
