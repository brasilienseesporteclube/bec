import { useEffect, useState } from "react";

const COLORS = {
  primary: "#278273",
  primaryDark: "#1f5f55",
  bg: "#ffffff",
  text: "#1f2937",
  light: "#f5f5f5"
};

const modalidades = [
  { nome: "Voleibol de Quadra", descricao: "A principal modalidade do clube, com foco em formação, competição e desenvolvimento técnico.", destaque: "Carro-chefe", icone: "🏐" },
  { nome: "Vôlei de Praia", descricao: "Treinamento dinâmico, preparação física e evolução em um ambiente competitivo e inspirador.", destaque: "Expansão natural", icone: "☀️" },
  { nome: "Futebol", descricao: "Disciplina, espírito coletivo e paixão pelo esporte em categorias de base e projetos esportivos.", destaque: "Formação esportiva", icone: "⚽" },
  { nome: "Basquete", descricao: "Velocidade, estratégia e trabalho em equipe para atletas em constante evolução.", destaque: "Nova geração", icone: "🏀" },
];

const contadores = [
  { label: "Conquistas no vôlei", value: 7 },
  { label: "Títulos femininos", value: 5 },
  { label: "Títulos masculinos", value: 2 },
  { label: "Modalidades", value: 4 },
];

const conquistas = [
  { titulo: "3º Lugar Superliga C 2023", categoria: "Feminino", medalha: "🥉", imagem: "/assets/conquista1.jpeg" },
  { titulo: "Vice-Campeão Estadual 2025", categoria: "Feminino", medalha: "🥈", imagem: "/assets/conquista2.jpeg" },
  { titulo: "Vice-Campeão Estadual 2025", categoria: "Masculino", medalha: "🥈", imagem: "/assets/conquista3.jpeg" },
  { titulo: "3º Lugar Superliga C 2025 - Etapa Centro-Oeste", categoria: "Feminino", medalha: "🥉", imagem: "/assets/conquista4.jpeg" },
  { titulo: "Eneacampeão Libravo 2025", categoria: "Feminino", medalha: "🥇", imagem: "/assets/conquista5.jpeg" },
  { titulo: "Vice-Campeão JUGs 2025", categoria: "Feminino", medalha: "🥈", imagem: "/assets/conquista6.jpeg" },
  { titulo: "Campeão Superliga C 2024", categoria: "Masculino", medalha: "🥇", imagem: "/assets/conquista7.jpeg" },
];

const linhaDoTempo = [
  { ano: "2022", titulo: "Nascimento", resumo: "Início do projeto esportivo", icone: "🏐" },
  { ano: "2023", titulo: "Primeiro marco nacional", resumo: "3º lugar na Superliga C feminina", icone: "🥉" },
  { ano: "2024", titulo: "Título nacional", resumo: "Campeão da Superliga C masculina", icone: "🏆" },
  { ano: "2025", titulo: "Temporada de destaque", resumo: "Estaduais, Libravo e JUGs", icone: "⭐" },
  { ano: "Hoje", titulo: "Clube em expansão", resumo: "Vôlei, praia, futebol e basquete", icone: "🚀" },
];

const produtosLoja = [
  { nome: "Camisa Oficial BEC", preco: "R$ 149,90", categoria: "Uniforme", icone: "👕" },
  { nome: "Short de Treino", preco: "R$ 79,90", categoria: "Performance", icone: "🩳" },
  { nome: "Garrafa do Clube", preco: "R$ 49,90", categoria: "Acessório", icone: "🍼" },
  { nome: "Boné Oficial", preco: "R$ 69,90", categoria: "Lifestyle", icone: "🧢" },
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
    <div style={{ border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.10)", borderRadius: 28, padding: 24 }}>
      <p style={{ margin: 0, color: "white", fontWeight: 900, fontSize: 42 }}>{count}</p>
      <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,.65)", textTransform: "uppercase", letterSpacing: ".18em", fontSize: 12 }}>{label}</p>
    </div>
  );
}

function styles() {
  return {
    container: { minHeight: "100vh", color: "white", background: COLORS.bg },
    section: { maxWidth: 1240, margin: "0 auto", padding: "0 24px" },
    panel: { border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.10)", borderRadius: 32 },
    button: { background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`, color: "white", border: 0, borderRadius: 16, padding: "14px 24px", fontWeight: 800, cursor: "pointer" },
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
      <header style={{ position: "sticky", top: 0, zIndex: 30, borderBottom: "1px solid rgba(255,255,255,.10)", background: "rgba(31,95,85,.95)", backdropFilter: "blur(14px)" }}>
        <div style={{ ...s.section, display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16 }}>
          <button onClick={() => setMenuOpen(true)} aria-label="Abrir menu" style={{ width: 48, height: 48, borderRadius: 999, border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.10)", color: "white", fontSize: 22, cursor: "pointer" }}>☰</button>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: 999, overflow: "hidden", border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.10)", padding: 4 }}>
              <img src="/assets/logo.jpeg" alt="Brasiliense Esporte Clube" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <div style={{ display: "none" }} className="md-brand"></div>
            <div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 800, letterSpacing: ".35em" }}>BRASILIENSE</p>
              <p style={{ margin: "4px 0 0", fontSize: 11, color: "rgba(255,255,255,.6)", letterSpacing: ".35em" }}>ESPORTE CLUBE</p>
            </div>
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a href="#treinar">Treinar</a>
            <a href="#loja">Loja</a>
            <button type="button" onClick={() => setSocioOpen(true)} style={{ ...s.button, borderRadius: 999, padding: "12px 20px" }}>Seja Sócio</button>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex" }}>
          <aside style={{ width: 360, maxWidth: "88vw", background: COLORS.primaryDark, color: "white", boxShadow: "0 24px 60px rgba(0,0,0,.35)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 24, borderBottom: "1px solid rgba(255,255,255,.10)" }}>
              <button onClick={() => setMenuOpen(false)} style={{ background: "transparent", border: 0, color: "white", fontSize: 30, cursor: "pointer" }}>✕</button>
              <div style={{ textAlign: "right" }}>
                <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: ".3em" }}>Menu</p>
                <p style={{ margin: "6px 0 0", fontSize: 14, fontWeight: 800, letterSpacing: ".2em" }}>Brasiliense EC</p>
              </div>
            </div>
            <nav style={{ padding: 24, display: "grid", gap: 10 }}>
              {menuLateral.map((item) => (
                <button key={item.label} type="button" onClick={() => handleMenuItemClick(item)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", color: "white", border: 0, borderBottom: "1px solid rgba(255,255,255,.10)", padding: "14px 0", textAlign: "left", textTransform: "uppercase", fontWeight: 800, letterSpacing: ".06em", cursor: "pointer" }}>
                  <span>{item.label}</span>
                  <span style={{ fontSize: 24, fontWeight: 300, color: "rgba(255,255,255,.7)" }}>+</span>
                </button>
              ))}
            </nav>
          </aside>
          <button type="button" onClick={() => setMenuOpen(false)} style={{ flex: 1, background: "rgba(0,0,0,.5)", border: 0 }} />
        </div>
      )}

      {socioOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 60, overflowY: "auto", background: COLORS.bg }}>
          <div style={{ ...s.section, minHeight: "100vh", paddingTop: 32, paddingBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,.10)", paddingBottom: 20 }}>
              <div>
                <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,.7)", textTransform: "uppercase", letterSpacing: ".3em" }}>Programa de sócios</p>
                <h2 style={{ margin: "10px 0 0", fontSize: 48, lineHeight: 1, fontWeight: 900 }}>Nação Brasiliense</h2>
              </div>
              <button type="button" onClick={() => setSocioOpen(false)} style={{ width: 48, height: 48, borderRadius: 999, border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.10)", color: "white", fontSize: 22, cursor: "pointer" }}>✕</button>
            </div>
            <p style={{ marginTop: 24, maxWidth: 760, color: "rgba(255,255,255,.75)", fontSize: 20, lineHeight: 1.7 }}>Escolha o plano ideal para apoiar o Brasiliense Esporte Clube e viver mais de perto a evolução do clube.</p>
            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}>
              {planosSocio.map((plano) => (
                <div key={plano.nome} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: 32, border: plano.principal ? "1px solid white" : "1px solid rgba(255,255,255,.10)", background: plano.principal ? "white" : COLORS.primaryDark, color: plano.principal ? COLORS.primaryDark : "white", padding: 32, boxShadow: plano.principal ? "0 24px 60px rgba(0,0,0,.28)" : "none", transform: plano.principal ? "scale(1.03)" : "none" }}>
                  <div>
                    <p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".25em", color: plano.principal ? "rgba(31,95,85,.6)" : "rgba(255,255,255,.6)" }}>{plano.destaque}</p>
                    <h3 style={{ margin: "14px 0 0", fontSize: 34, fontWeight: 900 }}>{plano.nome}</h3>
                    <div style={{ marginTop: 28, display: "flex", alignItems: "end", gap: 8 }}>
                      <span style={{ fontSize: 52, fontWeight: 900 }}>{plano.preco}</span>
                      <span style={{ color: plano.principal ? "rgba(31,95,85,.7)" : "rgba(255,255,255,.6)" }}>/mês</span>
                    </div>
                    <div style={{ marginTop: 28, display: "grid", gap: 14 }}>
                      {plano.beneficios.map((beneficio) => (
                        <div key={beneficio} style={{ display: "flex", gap: 10, alignItems: "start", lineHeight: 1.7 }}>
                          <span>✓</span><span>{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button type="button" style={{ marginTop: 28, borderRadius: 999, padding: "16px 24px", fontWeight: 800, border: 0, cursor: "pointer", background: plano.principal ? COLORS.primaryDark : "white", color: plano.principal ? "white" : COLORS.primaryDark }}>Escolher plano</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {conquistaAtiva && (
        <div style={{ position: "fixed", inset: 0, zIndex: 70, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,.8)", padding: 16 }} onClick={() => setConquistaAtiva(null)}>
          <div style={{ width: "100%", maxWidth: 1100, overflow: "hidden", borderRadius: 32, border: "1px solid rgba(255,255,255,.10)", background: COLORS.primaryDark, boxShadow: "0 24px 60px rgba(0,0,0,.35)" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr" }}>
              <div><img src={conquistaAtiva.imagem} alt={conquistaAtiva.titulo} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
              <div style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "inline-flex", width: "fit-content", background: "rgba(255,255,255,.10)", padding: "10px 14px", borderRadius: 999, fontWeight: 700 }}>{conquistaAtiva.medalha} {conquistaAtiva.categoria}</div>
                <h3 style={{ margin: "18px 0 0", fontSize: 42, lineHeight: 1.1, fontWeight: 900 }}>{conquistaAtiva.titulo}</h3>
                <p style={{ marginTop: 20, color: "rgba(255,255,255,.75)", fontSize: 20, lineHeight: 1.7 }}>Galeria de conquistas do Brasiliense Esporte Clube.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="hero" style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,.10)" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at top left, ${COLORS.primary}33, transparent 30%), radial-gradient(circle at top right, #ffffff22, transparent 28%)` }} />
        <div style={{ ...s.section, position: "relative", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 48, alignItems: "center", paddingTop: 80, paddingBottom: 80 }}>
          <div>
            <span style={{ display: "inline-flex", borderRadius: 999, padding: "10px 14px", fontSize: 14, fontWeight: 700, background: `${COLORS.primary}22` }}>Desde 2022 • Clube poliesportivo</span>
            <h1 style={{ margin: "24px 0 0", maxWidth: 760, fontSize: 72, lineHeight: 1.02, fontWeight: 900 }}>Formação, performance e identidade esportiva.</h1>
            <p style={{ marginTop: 24, maxWidth: 760, fontSize: 21, lineHeight: 1.7, color: "rgba(255,255,255,.75)" }}>O Brasiliense Esporte Clube nasceu com o voleibol e hoje cresce como um projeto poliesportivo, mantendo a excelência competitiva como essência e ampliando oportunidades para atletas em diferentes modalidades.</p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#conquistas" style={{ ...s.button }}>Ver conquistas</a>
              <a href="#treinar" style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.10)", color: "white", padding: "14px 24px", fontWeight: 700 }}>Quero treinar no clube</a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
            <div style={{ ...s.panel, gridColumn: "span 2", padding: 24 }}>
              <p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".3em", color: "rgba(255,255,255,.5)" }}>Identidade</p>
              <h2 style={{ margin: "12px 0 0", fontSize: 34, fontWeight: 900 }}>Voleibol como carro-chefe</h2>
              <p style={{ margin: "12px 0 0", lineHeight: 1.7, color: "rgba(255,255,255,.75)" }}>A modalidade que iniciou a história do clube segue como a principal força técnica, competitiva e institucional do BEC.</p>
            </div>
            <div style={{ ...s.panel, padding: 24 }}><p style={{ margin: 0, fontSize: 42, fontWeight: 900 }}>2022</p><p style={{ margin: "8px 0 0", color: "rgba(255,255,255,.75)" }}>Ano de fundação</p></div>
            <div style={{ ...s.panel, padding: 24 }}><p style={{ margin: 0, fontSize: 42, fontWeight: 900 }}>4</p><p style={{ margin: "8px 0 0", color: "rgba(255,255,255,.75)" }}>Modalidades ativas</p></div>
          </div>
        </div>
      </section>

      <section style={{ ...s.section, paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 20 }}>{contadores.map((item) => <Counter key={item.label} end={item.value} label={item.label} />)}</div>
      </section>

      <section id="modalidades" style={{ ...s.section, paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ maxWidth: 700 }}><p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".3em" }}>Modalidades</p><h2 style={{ margin: "12px 0 0", fontSize: 52, fontWeight: 900 }}>Um clube, várias formas de competir</h2></div>
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24 }}>
          {modalidades.map((item) => (
            <div key={item.nome} style={{ ...s.panel, padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><span style={{ fontSize: 30 }}>{item.icone}</span><span style={{ borderRadius: 999, padding: "6px 12px", fontSize: 11, textTransform: "uppercase", letterSpacing: ".18em", background: `${COLORS.primary}22` }}>{item.destaque}</span></div>
              <h3 style={{ margin: "20px 0 0", fontSize: 30, fontWeight: 900 }}>{item.nome}</h3>
              <p style={{ margin: "12px 0 0", lineHeight: 1.7, color: "rgba(255,255,255,.75)" }}>{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="conquistas" style={{ borderTop: "1px solid rgba(255,255,255,.10)", borderBottom: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.03)" }}>
        <div style={{ ...s.section, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 760 }}><p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".3em" }}>Voleibol</p><h2 style={{ margin: "12px 0 0", fontSize: 52, fontWeight: 900 }}>Conquistas que constroem a história</h2></div>
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
            {conquistas.map((item) => (
              <button key={item.titulo + item.categoria} type="button" onClick={() => setConquistaAtiva(item)} style={{ padding: 0, borderRadius: 32, overflow: "hidden", border: "1px solid rgba(255,255,255,.10)", background: "rgba(31,95,85,.80)", color: "white", textAlign: "left", cursor: "pointer" }}>
                <div style={{ position: "relative", height: 224, overflow: "hidden" }}>
                  <img src={item.imagem} alt={`${item.titulo} - ${item.categoria}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0))" }} />
                  <div style={{ position: "absolute", left: 16, top: 16, borderRadius: 999, background: "rgba(255,255,255,.15)", padding: "8px 12px", fontWeight: 700 }}>{item.medalha}</div>
                </div>
                <div style={{ padding: 24 }}>
                  <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".18em", color: "rgba(255,255,255,.60)" }}>{item.categoria}</span>
                  <h3 style={{ margin: "12px 0 0", fontSize: 24, fontWeight: 900, lineHeight: 1.2 }}>{item.titulo}</h3>
                  <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,.60)" }}>Clique para ampliar</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" style={{ ...s.section, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760 }}><p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".3em" }}>Linha do tempo</p><h2 style={{ margin: "12px 0 0", fontSize: 52, fontWeight: 900 }}>A evolução do BEC no esporte</h2></div>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 24 }}>
          {linhaDoTempo.map((item, i) => (
            <div key={item.ano} style={{ ...s.panel, padding: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: 999, background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800 }}>{i + 1}</div>
              <div style={{ marginTop: 14, fontSize: 24 }}>{item.icone}</div>
              <p style={{ margin: "10px 0 0", fontSize: 12, fontWeight: 700 }}>{item.ano}</p>
              <h3 style={{ margin: "8px 0 0", fontSize: 20, fontWeight: 900 }}>{item.titulo}</h3>
              <p style={{ margin: "10px 0 0", lineHeight: 1.6, color: "rgba(255,255,255,.75)" }}>{item.resumo}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="treinar" style={{ ...s.section, paddingBottom: 80 }}>
        <div style={{ borderRadius: 36, padding: 1, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
          <div style={{ borderRadius: 35, background: COLORS.primaryDark, padding: 40, display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
            <div>
              <p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".3em" }}>Faça parte do clube</p>
              <h2 style={{ margin: "12px 0 0", fontSize: 52, fontWeight: 900 }}>Quer treinar no Brasiliense Esporte Clube?</h2>
              <p style={{ margin: "18px 0 0", maxWidth: 720, fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,.75)" }}>Entre em contato para conhecer as turmas, categorias e oportunidades nas modalidades do clube.</p>
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              <a href="https://wa.me/5500000000000" style={{ ...s.button, textAlign: "center" }}>Falar no WhatsApp</a>
              <a href="https://www.instagram.com/brasiliienseesporteclube" target="_blank" rel="noreferrer" style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.10)", color: "white", padding: "14px 24px", fontWeight: 700, textAlign: "center" }}>Ver Instagram do clube</a>
            </div>
          </div>
        </div>
      </section>

      <section id="loja" style={{ ...s.section, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760 }}><p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".3em", color: "rgba(255,255,255,.8)" }}>Loja oficial</p><h2 style={{ margin: "12px 0 0", fontSize: 52, fontWeight: 900 }}>Vista a identidade do clube</h2><p style={{ margin: "18px 0 0", fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,.75)" }}>Produtos oficiais para atletas, torcedores e apoiadores do Brasiliense Esporte Clube.</p></div>
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24 }}>
          {produtosLoja.map((produto) => (
            <div key={produto.nome} style={{ borderRadius: 32, overflow: "hidden", border: "1px solid rgba(255,255,255,.10)", background: "rgba(31,95,85,.80)" }}>
              <div style={{ height: 176, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(to bottom right, rgba(255,255,255,.10), rgba(0,0,0,.10))", fontSize: 58 }}>{produto.icone}</div>
              <div style={{ padding: 24 }}>
                <span style={{ borderRadius: 999, background: "rgba(255,255,255,.10)", padding: "6px 12px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em", color: "rgba(255,255,255,.7)" }}>{produto.categoria}</span>
                <h3 style={{ margin: "16px 0 0", fontSize: 28, fontWeight: 900 }}>{produto.nome}</h3>
                <p style={{ margin: "12px 0 0", fontSize: 24, fontWeight: 900 }}>{produto.preco}</p>
                <a href="#" style={{ ...s.button, display: "block", textAlign: "center", marginTop: 18 }}>Comprar</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="socio" style={{ ...s.section, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ borderRadius: 32, border: "1px solid rgba(255,255,255,.10)", background: "rgba(31,95,85,.80)", padding: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 12, textTransform: "uppercase", letterSpacing: ".3em", color: "rgba(255,255,255,.7)" }}>Programa de sócios</p>
          <h2 style={{ margin: "12px 0 0", fontSize: 52, fontWeight: 900 }}>Entre para o Programa de Sócios</h2>
          <p style={{ margin: "18px auto 0", maxWidth: 760, fontSize: 20, lineHeight: 1.7, color: "rgba(255,255,255,.75)" }}>Clique abaixo para abrir a experiência completa com os planos e benefícios do clube.</p>
          <button type="button" onClick={() => setSocioOpen(true)} style={{ ...s.button, marginTop: 28 }}>Abrir tela de sócio</button>
        </div>
      </section>
    </div>
  );
}

