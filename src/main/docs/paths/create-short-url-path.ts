export const createShortUrlPath = {
  post: {
    security: [
      {
        BearerAuth: [],
      },
    ],
    tags: ["ShortUrl"],
    summary: "Endpoint para criar uma url encurtada",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              url: {
                type: "string",
                example:
                  "https://teddy360.com.br/material/marco-legal-das-garantias-sancionado-entenda-o-que-muda/",
              },
            },
            required: ["url"],
          },
        },
      },
    },
    responses: {
      201: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                shortUrl: {
                  type: "string",
                  example: "http://localhost:3030/jxuW9i",
                },
              },
            },
          },
        },
      },
      400: {
        $ref: "#/components/badRequest",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
};
