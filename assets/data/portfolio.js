/* Conteúdo do portfólio (versão PS3, index.html) */
/* =========================================================
   EDITE AQUI: todo o conteúdo do portfólio fica neste objeto.
   ========================================================= */
// Textos com duas versões usam { pt: "...", en: "..." }; textos simples valem para os dois idiomas.
const PORTFOLIO = {
  nome: "João Victor",
  // Currículo: coloque o arquivo em assets/docs/ com este nome (ou troque o caminho).
  // Deixe "" para esconder o item.
  curriculo: "assets/docs/curriculo.pdf",
  cargo: { pt: "Desenvolvedor FullStack", en: "Fullstack Developer" },
  bio: {
    pt: "Sou dev fullstack que adora aprender",
    en: "Hi! I'm a developer who likes building interfaces that feel alive — with motion, sound and details that remind me of the consoles I grew up with. This is sample text: replace it with your bio.",
  },
  info: [
    [{ pt: "Nome", en: "Name" }, "João Victor"],
    [{ pt: "Função", en: "Role" }, { pt: "Desenvolvedor Fullstack", en: "Fullstack Developer" }],
    [{ pt: "Localização", en: "Location" }, { pt: "Brasil", en: "Brazil" }],
    [{ pt: "Idiomas", en: "Languages" }, { pt: "Português, Inglês", en: "Portuguese, English" }],
    [{ pt: "Disponível para", en: "Available for" }, { pt: "Freelance e vagas", en: "Freelance and jobs" }],
    [{ pt: "Versão do sistema", en: "System version" }, "6.70"],
  ],
  habilidades: [
    ["Python", 90],
    ["JavaScript", 80],
    ["SQL", 80],
    ["Java", 70],
    ["Node.js", 70],
    ["UI / Design", 50],
    ["IA", 70]
  ],
  projetos: [
    { titulo: { pt: "API spotify", en: "Spotify API" }, ano: "2026", descricao: { pt: "Script para pegar dados de uma API do spotify para a construção de um grafo relacionando as musiscas e os artistas/colaborações", en: "Script that fetches data from the Spotify API to build a graph relating songs and artists/collaborations." }, tecnologias: ["REST APIs", "Python", "OAuth authentication"], links: { demo: "#", codigo: "https://github.com/jvfsouza/comunicacao-e-redes" }, cor: 215 },
    { titulo: { pt: "API em express.js", en: "Express.js API" }, ano: "2026", descricao: { pt: "Desenvolvimento de uma API em express.js para um sistema de catalogação de tarefas", en: "Development of an Express.js API for a task cataloging system." }, tecnologias: ["Express.js", "javascript"], links: { demo: "#", codigo: "https://github.com/jvfsouza/api-express" }, cor: 265 },
    { titulo: { pt: "Listas da Sirius", en: "SIRIUS Exercise Lists" }, ano: "2025", descricao: { pt: "Listas de exercícios do grupo SIRIUS da ufabc que faço parte", en: "Exercise lists from the SIRIUS group at UFABC that im part of" }, tecnologias: ["C/C++", "sitemas embarcados"], links: { codigo: "https://github.com/jvfsouza/listas-sirius" }, cor: 160 },
  ],
  contatos: [
    { rotulo: "E-mail", valor: "jvfs.ferreira@gmail.com", url: "mailto:jvfs.ferreira@gmail.com", icone: "mail" },
    { rotulo: "GitHub", valor: "github.com/jvfsouza", url: "https://github.com/jvfsouza", icone: "code" },
    { rotulo: "LinkedIn", valor: "linkedin.com/joaovfsouza", url: "https://www.linkedin.com/in/joaovfsouza/", icone: "link" },
  ],
};
/* ========================================================= */
