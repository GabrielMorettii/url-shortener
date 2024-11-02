export const shortUrlPath = {
  put: {
    security: [
      {
        BearerAuth: [],
      },
    ],
    tags: ["ShortUrl"],
    summary: "Endpoint para atualizar uma url encurtada",
    parameters: [
      {
        in: "path",
        name: "shortUrl",
        description: "Valor da url encurtada",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    requestBody: {
      required: false,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              originalUrl: {
                type: "string",
                example:
                  "https://teddy360.com.br/material/marco-legal-das-garantias-sancionado-entenda-o-que-muda/",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/shortUrl",
            },
          },
        },
      },
      400: {
        $ref: "#/components/badRequest",
      },
      401: {
        $ref: "#/components/unauthorized",
      },
      404: {
        $ref: "#/components/notFound",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
  delete: {
    security: [
      {
        BearerAuth: [],
      },
    ],
    tags: ["ShortUrl"],
    summary: "Endpoint para deletar uma url encurtada",
    parameters: [
      {
        in: "path",
        name: "shortUrl",
        description: "Valor da url encurtada",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      204: {
        description: "Sucesso",
      },
      400: {
        $ref: "#/components/badRequest",
      },
      401: {
        $ref: "#/components/unauthorized",
      },
      404: {
        $ref: "#/components/notFound",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
};
