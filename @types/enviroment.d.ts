declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /** Porta para ouvir HTTP (3030 por padrão). */
      HTTP_PORT?: `${number}`;

      // Configuração do banco de dados
      DATABASE_URL?: string;
    }
  }
}

export {};
