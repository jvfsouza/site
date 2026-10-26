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
    pt: "faço programa por dinheiro. me contrate.",
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
    ["HTML & CSS", 90],
    ["JavaScript", 80],
    ["Aquelas la tlgd", "kkk"],
    ["Node.js", 60],
    ["UI / Design", 65],
  ],
  projetos: [
    { titulo: { pt: "Projeto Alpha", en: "Project Alpha" }, ano: "2026", descricao: { pt: "Aplicação web de exemplo. Descreva aqui o problema, o que você construiu e o resultado.", en: "Sample web app. Describe the problem, what you built and the result." }, tecnologias: ["HTML", "CSS", "JavaScript"], links: { demo: "#", codigo: "https://github.com/jvfsouza" }, cor: 215 },
    { titulo: { pt: "Projeto Beta", en: "Project Beta" }, ano: "2025", descricao: { pt: "Dashboard com gráficos em tempo real. Substitua por um projeto seu.", en: "Real-time charts dashboard. Replace it with one of your projects." }, tecnologias: ["React", "TypeScript"], links: { demo: "#", codigo: "https://github.com/jvfsouza" }, cor: 265 },
    { titulo: { pt: "Projeto Gamma", en: "Project Gamma" }, ano: "2025", descricao: { pt: "API REST com autenticação e banco de dados. Texto de exemplo.", en: "REST API with authentication and a database. Sample text." }, tecnologias: ["Node.js", "PostgreSQL"], links: { codigo: "https://github.com/jvfsouza" }, cor: 160 },
    { titulo: { pt: "Projeto Delta", en: "Project Delta" }, ano: "2024", descricao: { pt: "Jogo de navegador feito com Canvas. Texto de exemplo.", en: "Browser game made with Canvas. Sample text." }, tecnologias: ["Canvas", "JavaScript"], links: { demo: "#" }, cor: 330 },
    { titulo: { pt: "Portfólio PS2", en: "PS2 Portfolio" }, ano: "2026", descricao: { pt: "A versão anterior deste portfólio, inspirada no boot e no menu do PlayStation 2.", en: "The previous version of this portfolio, inspired by the PlayStation 2 boot and menu." }, tecnologias: ["Canvas", "CSS 3D", "Web Audio"], links: { demo: "ps2.html", codigo: "https://github.com/jvfsouza/site" }, cor: 225 },
  ],
  contatos: [
    { rotulo: "E-mail", valor: "jvfs.ferreira@gmail.com", url: "mailto:jvfs.ferreira@gmail.com", icone: "mail" },
    { rotulo: "GitHub", valor: "github.com/jvfsouza", url: "https://github.com/jvfsouza", icone: "code" },
    { rotulo: "LinkedIn", valor: "linkedin.com/joaovfsouza", url: "https://www.linkedin.com/in/joaovfsouza/", icone: "link" },
  ],
};
/* ========================================================= */
