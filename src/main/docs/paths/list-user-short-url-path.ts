export const getUserShortUrlPath = {
  get: {
    security: [
      {
        BearerAuth: [],
      },
    ],
    tags: ["ShortUrl"],
    summary: "Endpoint para listar todas as urls encurtadas de um usuário",
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/schemas/shortUrl",
              },
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
};
