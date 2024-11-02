export const getShortUrlPath = {
  get: {
    tags: ["ShortUrl"],
    summary: "Endpoint para visitar uma url encurtada",
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
      200: {
        description: "Sucesso",
        content: {
          "text/html": {
            schema: {
              type: "string",
              example:
                "<p>Your short URL is: <a href='http://localhost:3030/jxuW9i'>http://localhost:3030/jxuW9i</a></p>",
            },
          },
        },
      },
      400: {
        $ref: "#/components/badRequest",
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
