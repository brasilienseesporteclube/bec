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
    ano: "2023",
    medalha: "🥉",
    imagem: "/Ativos/conquista1.jpeg",
    resumo: "Primeira grande campanha nacional do clube.",
    historia:
      "Em 2023, o BEC entrou na Superliga C e mostrou maturidade e organização. O 3º lugar marcou a entrada do clube no cenário nacional.",
  },
  {
    titulo: "Vice-Campeão Estadual 2025",
    categoria: "Feminino",
    ano: "2025",
    medalha: "🥈",
    imagem: "/Ativos/conquista2.jpeg",
    resumo: "Campanha consistente e competitiva.",
    historia:
      "O elenco feminino chegou à final com desempenho sólido, mostrando evolução técnica e força coletiva.",
  },
  {
    titulo: "Vice-Campeão Estadual 2025",
    categoria: "Masculino",
    ano: "2025",
    medalha: "🥈",
    imagem: "/Ativos/conquista3.jpeg",
    resumo: "Confirmação da força do time masculino.",
    historia:
      "Após o título nacional, o time manteve alto nível e chegou novamente à decisão estadual.",
  },
  {
    titulo: "3º Lugar Superliga C 2025",
    categoria: "Feminino",
    ano: "2025",
    medalha: "🥉",
    imagem: "/Ativos/conquista4.jpeg",
    resumo: "Presença constante no cenário nacional.",
    historia:
      "A equipe reafirmou sua competitividade com mais um bom resultado na Superliga.",
  },
  {
    titulo: "Eneacampeão Libravo 2025",
    categoria: "Feminino",
    ano: "2025",
    medalha: "🥇",
    imagem: "/Ativos/conquista5.jpeg",
    resumo: "Domínio na competição.",
    historia:
      "O clube consolidou sua hegemonia com mais um título, fruto de consistência e trabalho contínuo.",
  },
  {
    titulo: "Vice-Campeão JUGs 2025",
    categoria: "Feminino",
    ano: "2025",
    medalha: "🥈",
    imagem: "/Ativos/conquista6.jpeg",
    resumo: "Campanha forte e consistente.",
    historia:
      "A equipe chegou à final mostrando intensidade e alto nível competitivo.",
  },
  {
    titulo: "Campeão Superliga C 2024",
    categoria: "Masculino",
    ano: "2024",
    medalha: "🥇",
    imagem: "/Ativos/conquista7.jpeg",
    resumo: "Título histórico nacional.",
    historia:
      "A conquista colocou o BEC entre os grandes projetos do voleibol nacional.",
  },
];

export default function App() {
  const [conquistaAtiva, setConquistaAtiva] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 900);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setConquistaAtiva(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = conquistaAtiva ? "hidden" : "";
  }, [conquistaAtiva]);

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: 30 }}>Conquistas</h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
          gap: 20,
        }}
      >
        {conquistas.map((item) => (
          <div
            key={item.titulo}
            onClick={() => setConquistaAtiva(item)}
            style={{
              cursor: "pointer",
              borderRadius: 20,
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #ddd",
            }}
          >
            <img
              src={item.imagem}
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <strong>{item.titulo}</strong>
              <p>{item.categoria}</p>
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
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 20,
              maxWidth: 900,
              width: "100%",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            }}
          >
            <img
              src={conquistaAtiva.imagem}
              style={{
                width: "100%",
                height: isMobile ? 200 : "100%",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: 24 }}>
              <button
                onClick={() => setConquistaAtiva(null)}
                style={{
                  float: "right",
                  fontSize: 20,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <h2>{conquistaAtiva.titulo}</h2>
              <p>
                {conquistaAtiva.categoria} • {conquistaAtiva.ano}
              </p>

              <p style={{ marginTop: 10 }}>{conquistaAtiva.resumo}</p>

              <p style={{ marginTop: 20, lineHeight: 1.6 }}>
                {conquistaAtiva.historia}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
