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
    },
    section: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 24px",
    },
    panel: {
      border: `1px solid ${COLORS.border}`,
      background: COLORS.card,
      borderRadius: 32,
      boxShadow: "0 10px 30px rgba(0,0,0,.05)",
    },
    button: {
      background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
      color: "white",
      border: 0,
      borderRadius: 16,
      padding: "14px 24px",
      fontWeight: 800,
      cursor: "pointer",
    },
  };
}

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(start);
    }, 40);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div
      style={{
        border: `1px solid ${COLORS.border}`,
        background: COLORS.card,
        borderRadius: 28,
        padding: 24,
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0, fontWeight: 900, fontSize: 42 }}>
        {count}
      </p>
      <p style={{ marginTop: 8, color: COLORS.muted, fontSize: 12 }}>
        {label}
      </p>
    </div>
  );
}

export default function App() {
  const s = styles();

  return (
    <div style={s.container}>
      
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "white",
          borderBottom: `1px solid ${COLORS.border}`,
          zIndex: 10,
        }}
      >
        <div
          style={{
            ...s.section,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
          }}
        >
          <h2 style={{ color: COLORS.primaryDark }}>
            Brasiliense EC
          </h2>

          <div style={{ display: "flex", gap: 20 }}>
            <a href="#loja" style={{ color: COLORS.primaryDark }}>
              Loja
            </a>
            <a href="#treinar" style={{ color: COLORS.primaryDark }}>
              Treinar
            </a>
            <button style={s.button}>Seja Sócio</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ ...s.section, padding: "80px 0" }}>
        <h1 style={{ fontSize: 60, fontWeight: 900 }}>
          Formação, performance e identidade esportiva.
        </h1>

        <p style={{ color: COLORS.muted, marginTop: 20 }}>
          O Brasiliense cresce como projeto poliesportivo.
        </p>

        <div style={{ marginTop: 30 }}>
          <button style={s.button}>Ver conquistas</button>
        </div>
      </section>

      {/* CONTADORES */}
      <section style={{ ...s.section, paddingBottom: 80 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
          }}
        >
          <Counter end={7} label="Conquistas" />
          <Counter end={5} label="Feminino" />
          <Counter end={2} label="Masculino" />
          <Counter end={4} label="Modalidades" />
        </div>
      </section>

      {/* CARDS */}
      <section style={{ ...s.section, paddingBottom: 80 }}>
        <h2 style={{ fontSize: 40 }}>Modalidades</h2>

        <div
          style={{
            marginTop: 30,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
          }}
        >
          {["Vôlei", "Praia", "Futebol", "Basquete"].map((item) => (
            <div key={item} style={{ ...s.panel, padding: 20 }}>
              <h3>{item}</h3>
              <p style={{ color: COLORS.muted }}>
                Modalidade esportiva do clube
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...s.section, paddingBottom: 100 }}>
        <div
          style={{
            ...s.panel,
            padding: 40,
            textAlign: "center",
          }}
        >
          <h2>Quer treinar no clube?</h2>
          <button style={{ ...s.button, marginTop: 20 }}>
            Falar no WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}
