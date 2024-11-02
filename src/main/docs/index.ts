import paths from "./paths";
import components from "./components";
import schemas from "./schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "Encurtador de Urls em NodeJS",
    description:
      "Essa é a documentação da API feita por Gabriel Moretti, com intuito de auxiliar no uso da API por terceiros.",
    version: "1.0.0",
    contact: {
      name: "Gabriel Moretti",
      email: "gabrielmoretitsilva@gmail.com",
      url: "https://www.linkedin.com/in/gabriel-morettii",
    },
  },
  servers: [
    {
      url: "/",
      description: "Servidor Principal",
    },
  ],
  tags: [
    {
      name: "Auth",
      description: "Endpoints relacionados a autenticação",
    },
    {
      name: "ShortUrl",
      description: "Endpoints relacionados ao encurtamento de URL",
    },
  ],
  paths,
  schemas,
  components,
};
