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

const conquistas = [
  {
    titulo: "3º Lugar Superliga C 2023",
    categoria: "Feminino",
    medalha: "🥉",
    imagem: "/assets/conquista1.jpeg",
  },
  {
    titulo: "Vice-Campeão Estadual 2025",
    categoria: "Feminino",
    medalha: "🥈",
    imagem: "/assets/conquista2.jpeg",
  },
  {
    titulo: "Vice-Campeão Estadual 2025",
    categoria: "Masculino",
    medalha: "🥈",
    imagem: "/assets/conquista3.jpeg",
  },
];

export default function App() {
  const [conquistaAtiva, setConquistaAtiva] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        color: COLORS.text,
        padding: 40,
      }}
    >
      <h1>Conquistas</h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 40,
        }}
      >
        {conquistas.map((item, index) => (
          <div
            key={index}
            onClick={() => setConquistaAtiva(item)}
            style={{
              cursor: "pointer",
              border: `1px solid ${COLORS.border}`,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <img
              src={item.imagem}
              alt={item.titulo}
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <p>{item.categoria}</p>
              <h3>{item.titulo}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {conquistaAtiva && (
        <div
          onClick={() => setConquistaAtiva(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: 20,
              maxWidth: 800,
              width: "90%",
              overflow: "hidden",
            }}
          >
            <img
              src={conquistaAtiva.imagem}
              style={{ width: "100%", height: 300, objectFit: "cover" }}
            />

            <div style={{ padding: 24 }}>
              <h2>{conquistaAtiva.titulo}</h2>
              <p>{conquistaAtiva.categoria}</p>

              <button
                onClick={() => setConquistaAtiva(null)}
                style={{
                  marginTop: 20,
                  padding: "10px 20px",
                  background: COLORS.primary,
                  color: "white",
                  border: 0,
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
