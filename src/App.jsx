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

const modalidades = [
  {
    nome: "Voleibol de Quadra",
    descricao:
      "A principal modalidade do clube, com foco em formação, competição e desenvolvimento técnico.",
    destaque: "Carro-chefe",
    icone: "🏐",
  },
  {
    nome: "Vôlei de Praia",
    descricao:
      "Treinamento dinâmico, preparação física e evolução em um ambiente competitivo e inspirador.",
    destaque: "Expansão natural",
    icone: "☀️",
  },
  {
    nome: "Futebol",
    descricao:
      "Disciplina, espírito coletivo e paixão pelo esporte em categorias de base e projetos esportivos.",
    destaque: "Formação esportiva",
    icone: "⚽",
  },
  {
    nome: "Basquete",
    descricao:
      "Velocidade, estratégia e trabalho em equipe para atletas em constante evolução.",
    destaque: "Nova geração",
    icone: "🏀",
  },
];

const contadores = [
  { label: "Conquistas no vôlei", value: 7 },
  { label: "Títulos femininos", value: 5 },
  { label: "Títulos masculinos", value: 2 },
  { label: "Modalidades", value: 4 },
];

const conquistas = [
  {
    titulo: "3º Lugar Superliga C 2023",
    categoria: "Feminino",
    medalha: "🥉",
    imagem: "/assets/conquista1.jpeg",
    descricao:
      "Um marco importante para o clube em nível nacional. Essa conquista simbolizou a consolidação do trabalho desenvolvido com a equipe feminina e colocou o Brasiliense Esporte Clube em evidência no cenário competitivo da Superliga C.",
  },
  {
    titulo: "Vice-Campeão Estadual 2025",
    categoria: "Feminino",
    medalha: "🥈",
    imagem: "/assets/conquista2.jpeg",
    descricao:
      "Resultado que reforça a consistência e a força da equipe feminina na temporada. A campanha foi marcada por dedicação, evolução técnica e protagonismo nas principais partidas do campeonato estadual.",
  },
  {
    titulo: "Vice-Campeão Estadual 2025",
    categoria: "Masculino",
    medalha: "🥈",
    imagem: "/assets/conquista3.jpeg",
    descricao:
      "Uma campanha de destaque da equipe masculina, mostrando competitividade, entrega e crescimento coletivo. O vice-campeonato estadual reafirma o clube como uma das referências da modalidade na região.",
  },
  {
    titulo: "3º Lugar Superliga C 2025 - Etapa Centro-Oeste",
    categoria: "Feminino",
    medalha: "🥉",
    imagem: "/assets/conquista4.jpeg",
    descricao:
      "Mais uma conquista nacional importante para o voleibol feminino do clube. O terceiro lugar na etapa Centro-Oeste da Superliga C 2025 reforça a tradição competitiva e a capacidade de disputar em alto nível.",
  },
  {
    titulo: "Eneacampeão Libravo 2025",
    categoria: "Feminino",
    medalha: "🥇",
    imagem: "/assets/conquista5.jpeg",
    descricao:
      "Um título que representa domínio, regularidade e excelência. O eneacampeonato na Libravo 2025 confirma a força histórica da equipe feminina e a continuidade de um trabalho vencedor dentro da competição.",
  },
  {
    titulo: "Vice-Campeão JUGs 2025",
    categoria: "Feminino",
    medalha: "🥈",
    imagem: "/assets/conquista6.jpeg",
    descricao:
      "Uma campanha competitiva e de grande entrega em uma disputa de alto nível. O vice-campeonato nos JUGs 2025 valoriza o desempenho do elenco e a capacidade do clube de brigar por títulos em diferentes frentes.",
  },
  {
    titulo: "Campeão Superliga C 2024",
    categoria: "Masculino",
    medalha: "🥇",
    imagem: "/assets/conquista7.jpeg",
    descricao:
      "Uma das conquistas mais emblemáticas da história do clube. O título da Superliga C 2024 com a equipe masculina representa excelência esportiva, força coletiva e um passo decisivo na projeção nacional do Brasiliense Esporte Clube.",
  },
];

const linhaDoTempo = [
  {
    ano: "2022",
    titulo: "Nascimento",
    resumo: "Início do projeto esportivo",
    icone: "🏐",
  },
  {
    ano: "2023",
    titulo: "Primeiro marco nacional",
    resumo: "3º lugar na Superliga C feminina",
    icone: "🥉",
  },
  {
    ano: "2024",
    titulo: "Título nacional",
    resumo: "Campeão da Superliga C masculina",
    icone: "🏆",
  },
  {
    ano: "2025",
    titulo: "Temporada de destaque",
    resumo: "Estaduais, Libravo e JUGs",
    icone: "⭐",
  },
  {
    ano: "Hoje",
    titulo: "Clube em expansão",
    resumo: "Vôlei, praia, futebol e basquete",
    icone: "🚀",
  },
];

const produtosLoja = [
  {
    nome: "Camisa Oficial BEC",
    preco: "R$ 149,90",
    categoria: "Uniforme",
    icone: "👕",
  },
  {
    nome: "Short de Treino",
    preco: "R$ 79,90",
    categoria: "Performance",
    icone: "🩳",
  },
  {
    nome: "Garrafa do Clube",
    preco: "R$ 49,90",
    categoria: "Acessório",
    icone: "🍼",
  },
  {
    nome: "Boné Oficial",
    preco: "R$ 69,90",
    categoria: "Lifestyle",
    icone: "🧢",
  },
];

const planosSocio = [
  {
    nome: "Nação Brasiliense",
    preco: "R$ 19,99",
    destaque: "Apoio ao clube",
    beneficios: [
      "Carteirinha digital",
      "Grupo exclusivo",
      "Sorteios mensais",
      "Conteúdos e bastidores",
      "Participação em clínicas e eventos",
      "1kg de alimento (conforme disponibilidade)",
    ],
  },
  {
    nome: "Força Brasiliense",
    preco: "R$ 39,99",
    destaque: "Mais proximidade",
    beneficios: [
      "Todos os benefícios do plano anterior",
      "Descontos com parceiros",
      "Conteúdos exclusivos",
      "Clínicas e eventos",
      "Acesso antecipado às inscrições",
      "Mais chances de garantir vaga",
    ],
  },
  {
    nome: "Orgulho Brasiliense",
    preco: "R$ 59,99",
    destaque: "Experiência completa",
    beneficios: [
      "Todos os benefícios anteriores",
      "Nome como Sócio Fundador",
      "Prioridade máxima nas ações",
    ],
    principal: true,
  },
];

const menuLateral = [
  { label: "O Clube", href: "#hero" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Conquistas", href: "#conquistas" },
  { label: "Linha do Tempo", href: "#timeline" },
  { label: "Faça Parte do Clube", href: "#treinar" },
  { label: "Loja Oficial", href: "#loja" },
  { label: "Programa de Sócios", href: "#socio" },
];

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
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
        boxShadow: "0 10px 30px rgba(19,50,46,.06)",
      }}
    >
      <p
        style={{
          margin: 0,
          color: COLORS.primaryDark,
          fontWeight: 900,
          fontSize: 42,
        }}
      >
        {count}
      </p>
      <p
        style={{
          margin: "8px 0 0",
          color: COLORS.muted,
          textTransform: "uppercase",
          letterSpacing: ".18em",
          fontSize: 12,
        }}
      >
        {label}
      </p>
    </div>
  );
}

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
    panel: {
      border: `1px solid ${COLORS.border}`,
      background: COLORS.card,
      borderRadius: 32,
      boxShadow: "0 10px 30px rgba(19,50,46,.06)",
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
  const [conquistaAtiva, setConquistaAtiva] = useState(null);

  const handleMenuItemClick = (item) => {
    setMenuOpen(false);
    if (item.label === "Programa de Sócios") {
      setSocioOpen(true);
      return;
    }
    const target = document.querySelector(item.href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={s.container}>
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
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
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

          <a
            href="#hero"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/assets/logo.jpeg"
              alt="Brasiliense Esporte Clube"
              style={{
                height: 86,
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </a>

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
              type="button"
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

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
          }}
        >
          <aside
            style={{
              width: 360,
              maxWidth: "88vw",
              background: "white",
              color: COLORS.text,
              boxShadow: "0 24px 60px rgba(0,0,0,.18)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 24,
                borderBottom: `1px solid ${COLORS.border}`,
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "transparent",
                  border: 0,
                  color: COLORS.primaryDark,
                  fontSize: 30,
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    color: COLORS.muted,
                    textTransform: "uppercase",
                    letterSpacing: ".3em",
                  }}
                >
                  Menu
                </p>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: ".2em",
                    color: COLORS.primaryDark,
                  }}
                >
                  Brasiliense EC
                </p>
              </div>
            </div>

            <nav style={{ padding: 24, display: "grid", gap: 10 }}>
              {menuLateral.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleMenuItemClick(item)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    color: COLORS.primaryDark,
                    border: 0,
                    borderBottom: `1px solid ${COLORS.border}`,
                    padding: "14px 0",
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: 800,
                    letterSpacing: ".06em",
                    cursor: "pointer",
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 300,
                      color: COLORS.muted,
                    }}
                  >
                    +
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            style={{ flex: 1, background: "rgba(0,0,0,.35)", border: 0 }}
          />
        </div>
      )}

      {socioOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            overflowY: "auto",
            background: COLORS.bg,
          }}
        >
          <div
            style={{
              ...s.section,
              minHeight: "100vh",
              paddingTop: 32,
              paddingBottom: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: `1px solid ${COLORS.border}`,
                paddingBottom: 20,
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    color: COLORS.muted,
                    textTransform: "uppercase",
                    letterSpacing: ".3em",
                  }}
                >
                  Programa de sócios
                </p>
                <h2
                  style={{
                    margin: "10px 0 0",
                    fontSize: 48,
                    lineHeight: 1,
                    fontWeight: 900,
                    color: COLORS.primaryDark,
                  }}
                >
                  Nação Brasiliense
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSocioOpen(false)}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  border: `1px solid ${COLORS.border}`,
                  background: COLORS.soft,
                  color: COLORS.primaryDark,
                  fontSize: 22,
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            <p
              style={{
                marginTop: 24,
                maxWidth: 760,
                color: COLORS.muted,
                fontSize: 20,
                lineHeight: 1.7,
              }}
            >
              Escolha o plano ideal para apoiar o Brasiliense Esporte Clube e
              viver mais de perto a evolução do clube.
            </p>

            <div
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 24,
              }}
            >
              {planosSocio.map((plano) => (
                <div
                  key={plano.nome}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 32,
                    border: plano.principal
                      ? `1px solid ${COLORS.primaryDark}`
                      : `1px solid ${COLORS.border}`,
                    background: plano.principal ? COLORS.primaryDark : COLORS.card,
                    color: plano.principal ? "white" : COLORS.text,
                    padding: 32,
                    boxShadow: plano.principal
                      ? "0 24px 60px rgba(0,0,0,.18)"
                      : "0 10px 30px rgba(19,50,46,.06)",
                    transform: plano.principal ? "scale(1.03)" : "none",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: ".25em",
                        color: plano.principal
                          ? "rgba(255,255,255,.7)"
                          : COLORS.muted,
                      }}
                    >
                      {plano.destaque}
                    </p>
                    <h3
                      style={{
                        margin: "14px 0 0",
                        fontSize: 34,
                        fontWeight: 900,
                      }}
                    >
                      {plano.nome}
                    </h3>
                    <div
                      style={{
                        marginTop: 28,
                        display: "flex",
                        alignItems: "end",
                        gap: 8,
                      }}
                    >
                      <span style={{ fontSize: 52, fontWeight: 900 }}>
                        {plano.preco}
                      </span>
                      <span
                        style={{
                          color: plano.principal
                            ? "rgba(255,255,255,.7)"
                            : COLORS.muted,
                        }}
                      >
                        /mês
                      </span>
                    </div>
                    <div style={{ marginTop: 28, display: "grid", gap: 14 }}>
                      {plano.beneficios.map((beneficio) => (
                        <div
                          key={beneficio}
                          style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "start",
                            lineHeight: 1.7,
                          }}
                        >
                          <span>✓</span>
                          <span>{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    style={{
                      marginTop: 28,
                      borderRadius: 999,
                      padding: "16px 24px",
                      fontWeight: 800,
                      border: 0,
                      cursor: "pointer",
                      background: plano.principal ? "white" : COLORS.primaryDark,
                      color: plano.principal ? COLORS.primaryDark : "white",
                    }}
                  >
                    Escolher plano
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {conquistaAtiva && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(8, 20, 18, 0.82)",
            backdropFilter: "blur(8px)",
            padding: 20,
            animation: "fadeIn .25s ease",
          }}
          onClick={() => setConquistaAtiva(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 1120,
              overflow: "hidden",
              borderRadius: 36,
              border: `1px solid ${COLORS.border}`,
              background: COLORS.card,
              boxShadow: "0 30px 80px rgba(0,0,0,.35)",
              transform: "translateY(0)",
              animation: "scaleIn .28s ease",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setConquistaAtiva(null)}
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                zIndex: 2,
                width: 46,
                height: 46,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.35)",
                background: "rgba(0,0,0,.28)",
                color: "white",
                fontSize: 22,
                cursor: "pointer",
                backdropFilter: "blur(8px)",
              }}
            >
              ✕
            </button>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr .9fr",
                minHeight: 620,
              }}
            >
              <div
                style={{
                  position: "relative",
                  background: "#0f1f1c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 24,
                }}
              >
                <img
                  src={conquistaAtiva.imagem}
                  alt={conquistaAtiva.titulo}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: 620,
                    objectFit: "contain",
                    display: "block",
                    borderRadius: 20,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    borderRadius: 999,
                    background: "rgba(255,255,255,.88)",
                    color: COLORS.primaryDark,
                    padding: "12px 18px",
                    fontWeight: 800,
                    boxShadow: "0 10px 30px rgba(0,0,0,.16)",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{conquistaAtiva.medalha}</span>
                  <span>Conquista oficial</span>
                </div>
              </div>

              <div
                style={{
                  padding: 42,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "linear-gradient(180deg, #ffffff 0%, #f8fbfa 100%)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    width: "fit-content",
                    alignItems: "center",
                    gap: 10,
                    background: `${COLORS.primary}12`,
                    color: COLORS.primaryDark,
                    padding: "10px 16px",
                    borderRadius: 999,
                    fontWeight: 800,
                    letterSpacing: ".04em",
                  }}
                >
                  <span>{conquistaAtiva.medalha}</span>
                  <span>{conquistaAtiva.categoria}</span>
                </div>

                <p
                  style={{
                    margin: "24px 0 0",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: ".28em",
                    color: COLORS.muted,
                    fontWeight: 700,
                  }}
                >
                  Galeria de conquistas
                </p>

                <h3
                  style={{
                    margin: "12px 0 0",
                    fontSize: 44,
                    lineHeight: 1.08,
                    fontWeight: 900,
                    color: COLORS.primaryDark,
                  }}
                >
                  {conquistaAtiva.titulo}
                </h3>

                <div
                  style={{
                    width: 80,
                    height: 4,
                    borderRadius: 999,
                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
                    marginTop: 24,
                    marginBottom: 24,
                  }}
                />

                <div
                  style={{
                    padding: 24,
                    borderRadius: 24,
                    background: "white",
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 10px 24px rgba(19,50,46,.05)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: ".22em",
                      color: COLORS.muted,
                      fontWeight: 700,
                    }}
                  >
                    Sobre a conquista
                  </p>

                  <p
                    style={{
                      marginTop: 16,
                      color: COLORS.text,
                      fontSize: 19,
                      lineHeight: 1.85,
                    }}
                  >
                    {conquistaAtiva.descricao}
                  </p>
                </div>

                <p
                  style={{
                    marginTop: 22,
                    color: COLORS.muted,
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  Clique fora da janela ou no botão de fechar para voltar à
                  galeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section
        id="hero"
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at top left, ${COLORS.primary}18, transparent 30%), radial-gradient(circle at top right, ${COLORS.primaryDark}12, transparent 28%)`,
          }}
        />
        <div
          style={{
            ...s.section,
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 48,
            alignItems: "center",
            paddingTop: 80,
            paddingBottom: 80,
          }}
        >
          <div>
            <span
              style={{
                display: "inline-flex",
                borderRadius: 999,
                padding: "10px 14px",
                fontSize: 14,
                fontWeight: 700,
                background: `${COLORS.primary}16`,
                color: COLORS.primaryDark,
              }}
            >
              Desde 2022 • Clube poliesportivo
            </span>

            <h1
              style={{
                margin: "24px 0 0",
                maxWidth: 760,
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 900,
                color: COLORS.primaryDark,
              }}
            >
              Formação, performance e identidade esportiva.
            </h1>

            <p
              style={{
                marginTop: 24,
                maxWidth: 760,
                fontSize: 21,
                lineHeight: 1.7,
                color: COLORS.muted,
              }}
            >
              O Brasiliense Esporte Clube nasceu com o voleibol e hoje cresce
              como um projeto poliesportivo, mantendo a excelência competitiva
              como essência e ampliando oportunidades para atletas em diferentes
              modalidades.
            </p>

            <div
              style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <a href="#conquistas" style={{ ...s.button }}>
                Ver conquistas
              </a>
              <a
                href="#treinar"
                style={{
                  borderRadius: 16,
                  border: `1px solid ${COLORS.border}`,
                  background: "white",
                  color: COLORS.text,
                  padding: "14px 24px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Quero treinar no clube
              </a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            <div style={{ ...s.panel, gridColumn: "span 2", padding: 24 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: ".3em",
                  color: COLORS.muted,
                }}
              >
                Identidade
              </p>
              <h2
                style={{
                  margin: "12px 0 0",
                  fontSize: 34,
                  fontWeight: 900,
                  color: COLORS.primaryDark,
                }}
              >
                Voleibol como carro-chefe
              </h2>
              <p
                style={{
                  margin: "12px 0 0",
                  lineHeight: 1.7,
                  color: COLORS.muted,
                }}
              >
                A modalidade que iniciou a história do clube segue como a
                principal força técnica, competitiva e institucional do BEC.
              </p>
            </div>

            <div style={{ ...s.panel, padding: 24 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 42,
                  fontWeight: 900,
                  color: COLORS.primaryDark,
                }}
              >
                2022
              </p>
              <p style={{ margin: "8px 0 0", color: COLORS.muted }}>
                Ano de fundação
              </p>
            </div>

            <div style={{ ...s.panel, padding: 24 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 42,
                  fontWeight: 900,
                  color: COLORS.primaryDark,
                }}
              >
                4
              </p>
              <p style={{ margin: "8px 0 0", color: COLORS.muted }}>
                Modalidades ativas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...s.section, paddingTop: 64, paddingBottom: 64 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {contadores.map((item) => (
            <Counter key={item.label} end={item.value} label={item.label} />
          ))}
        </div>
      </section>

      <section
        id="modalidades"
        style={{ ...s.section, paddingTop: 64, paddingBottom: 64 }}
      >
        <div style={{ maxWidth: 700 }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: ".3em",
              color: COLORS.muted,
            }}
          >
            Modalidades
          </p>
          <h2
            style={{
              margin: "12px 0 0",
              fontSize: 52,
              fontWeight: 900,
              color: COLORS.primaryDark,
            }}
          >
            Um clube, várias formas de competir
          </h2>
        </div>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {modalidades.map((item) => (
            <div key={item.nome} style={{ ...s.panel, padding: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 30 }}>{item.icone}</span>
                <span
                  style={{
                    borderRadius: 999,
                    padding: "6px 12px",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: ".18em",
                    background: `${COLORS.primary}16`,
                    color: COLORS.primaryDark,
                  }}
                >
                  {item.destaque}
                </span>
              </div>
              <h3
                style={{
                  margin: "20px 0 0",
                  fontSize: 30,
                  fontWeight: 900,
                  color: COLORS.primaryDark,
                }}
              >
                {item.nome}
              </h3>
              <p
                style={{
                  margin: "12px 0 0",
                  lineHeight: 1.7,
                  color: COLORS.muted,
                }}
              >
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="conquistas"
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
          background: COLORS.soft,
        }}
      >
        <div style={{ ...s.section, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 760 }}>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".3em",
                color: COLORS.muted,
              }}
            >
              Voleibol
            </p>
            <h2
              style={{
                margin: "12px 0 0",
                fontSize: 52,
                fontWeight: 900,
                color: COLORS.primaryDark,
              }}
            >
              Conquistas que constroem a história
            </h2>
          </div>

          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
            }}
          >
            {conquistas.map((item) => (
              <button
                key={item.titulo + item.categoria}
                type="button"
                onClick={() => setConquistaAtiva(item)}
                style={{
                  padding: 0,
                  borderRadius: 32,
                  overflow: "hidden",
                  border: `1px solid ${COLORS.border}`,
                  background: COLORS.card,
                  color: COLORS.text,
                  textAlign: "left",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(19,50,46,.06)",
                  transition: "transform .22s ease, box-shadow .22s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(19,50,46,.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(19,50,46,.06)";
                }}
              >
                <div style={{ position: "relative", height: 224, overflow: "hidden" }}>
                  <img
                    src={item.imagem}
                    alt={`${item.titulo} - ${item.categoria}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,0))",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 16,
                      top: 16,
                      borderRadius: 999,
                      background: "rgba(255,255,255,.86)",
                      color: COLORS.primaryDark,
                      padding: "8px 12px",
                      fontWeight: 700,
                    }}
                  >
                    {item.medalha}
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <span
                    style={{
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: ".18em",
                      color: COLORS.muted,
                    }}
                  >
                    {item.categoria}
                  </span>
                  <h3
                    style={{
                      margin: "12px 0 0",
                      fontSize: 24,
                      fontWeight: 900,
                      lineHeight: 1.2,
                      color: COLORS.primaryDark,
                    }}
                  >
                    {item.titulo}
                  </h3>
                  <p style={{ margin: "12px 0 0", color: COLORS.muted }}>
                    Clique para ver os detalhes
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        id="timeline"
        style={{ ...s.section, paddingTop: 80, paddingBottom: 80 }}
      >
        <div style={{ maxWidth: 760 }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: ".3em",
              color: COLORS.muted,
            }}
          >
            Linha do tempo
          </p>
          <h2
            style={{
              margin: "12px 0 0",
              fontSize: 52,
              fontWeight: 900,
              color: COLORS.primaryDark,
            }}
          >
            A evolução do BEC no esporte
          </h2>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {linhaDoTempo.map((item, i) => (
            <div key={item.ano} style={{ ...s.panel, padding: 20 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  background: COLORS.primary,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                {i + 1}
              </div>
              <div style={{ marginTop: 14, fontSize: 24 }}>{item.icone}</div>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 12,
                  fontWeight: 700,
                  color: COLORS.primaryDark,
                }}
              >
                {item.ano}
              </p>
              <h3
                style={{
                  margin: "8px 0 0",
                  fontSize: 20,
                  fontWeight: 900,
                  color: COLORS.primaryDark,
                }}
              >
                {item.titulo}
              </h3>
              <p
                style={{
                  margin: "10px 0 0",
                  lineHeight: 1.6,
                  color: COLORS.muted,
                }}
              >
                {item.resumo}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="treinar" style={{ ...s.section, paddingBottom: 80 }}>
        <div
          style={{
            borderRadius: 36,
            padding: 1,
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
          }}
        >
          <div
            style={{
              borderRadius: 35,
              background: COLORS.primaryDark,
              padding: 40,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: ".3em",
                  color: "rgba(255,255,255,.75)",
                }}
              >
                Faça parte do clube
              </p>
              <h2
                style={{
                  margin: "12px 0 0",
                  fontSize: 52,
                  fontWeight: 900,
                  color: "white",
                }}
              >
                Quer treinar no Brasiliense Esporte Clube?
              </h2>
              <p
                style={{
                  margin: "18px 0 0",
                  maxWidth: 720,
                  fontSize: 20,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,.78)",
                }}
              >
                Entre em contato para conhecer as turmas, categorias e
                oportunidades nas modalidades do clube.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <a
                href="https://wa.me/5500000000000"
                style={{ ...s.button, textAlign: "center" }}
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://www.instagram.com/brasiliienseesporteclube"
                target="_blank"
                rel="noreferrer"
                style={{
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "rgba(255,255,255,.10)",
                  color: "white",
                  padding: "14px 24px",
                  fontWeight: 700,
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Ver Instagram do clube
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="loja"
        style={{ ...s.section, paddingTop: 80, paddingBottom: 80 }}
      >
        <div style={{ maxWidth: 760 }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: ".3em",
              color: COLORS.muted,
            }}
          >
            Loja oficial
          </p>
          <h2
            style={{
              margin: "12px 0 0",
              fontSize: 52,
              fontWeight: 900,
              color: COLORS.primaryDark,
            }}
          >
            Vista a identidade do clube
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: 20,
              lineHeight: 1.7,
              color: COLORS.muted,
            }}
          >
            Produtos oficiais para atletas, torcedores e apoiadores do
            Brasiliense Esporte Clube.
          </p>
        </div>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {produtosLoja.map((produto) => (
            <div
              key={produto.nome}
              style={{
                borderRadius: 32,
                overflow: "hidden",
                border: `1px solid ${COLORS.border}`,
                background: COLORS.card,
                boxShadow: "0 10px 30px rgba(19,50,46,.06)",
              }}
            >
              <div
                style={{
                  height: 176,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(to bottom right, rgba(39,130,115,.10), rgba(31,95,85,.05))",
                  fontSize: 58,
                }}
              >
                {produto.icone}
              </div>
              <div style={{ padding: 24 }}>
                <span
                  style={{
                    borderRadius: 999,
                    background: COLORS.soft,
                    color: COLORS.primaryDark,
                    padding: "6px 12px",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".18em",
                  }}
                >
                  {produto.categoria}
                </span>
                <h3
                  style={{
                    margin: "16px 0 0",
                    fontSize: 28,
                    fontWeight: 900,
                    color: COLORS.primaryDark,
                  }}
                >
                  {produto.nome}
                </h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 24,
                    fontWeight: 900,
                    color: COLORS.primaryDark,
                  }}
                >
                  {produto.preco}
                </p>
                <a
                  href="#"
                  style={{
                    ...s.button,
                    display: "block",
                    textAlign: "center",
                    marginTop: 18,
                  }}
                >
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="socio"
        style={{ ...s.section, paddingTop: 80, paddingBottom: 80 }}
      >
        <div
          style={{
            borderRadius: 32,
            border: `1px solid ${COLORS.border}`,
            background: COLORS.primaryDark,
            padding: 32,
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(19,50,46,.08)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: ".3em",
              color: "rgba(255,255,255,.75)",
            }}
          >
            Programa de sócios
          </p>
          <h2
            style={{
              margin: "12px 0 0",
              fontSize: 52,
              fontWeight: 900,
              color: "white",
            }}
          >
            Entre para o Programa de Sócios
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              maxWidth: 760,
              fontSize: 20,
              lineHeight: 1.7,
              color: "rgba(255,255,255,.78)",
            }}
          >
            Clique abaixo para abrir a experiência completa com os planos e
            benefícios do clube.
          </p>
          <button
            type="button"
            onClick={() => setSocioOpen(true)}
            style={{ ...s.button, marginTop: 28 }}
          >
            Abrir tela de sócio
          </button>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translateY(14px) scale(.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
