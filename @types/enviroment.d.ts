declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";

      /** Porta para ouvir HTTP (3030 por padrão). */
      HTTP_PORT?: `${number}`;

      // Configuração do banco de dados
      DATABASE_URL: string;

      JWT_SECRET: string;
    }
  }
}

export {};
