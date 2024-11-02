export const shortUrlSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
      example: "276fb527-a522-4161-9dce-b3398cdc2061",
    },
    originalUrl: {
      type: "string",
      format: "uri",
      example:
        "https://teddy360.com.br/material/o-que-e-mercado-livre-de-energia-quais-sao-vantagens",
    },
    shortUrl: {
      type: "string",
      example: "jxuW9i",
    },
    clicks: {
      type: "integer",
      example: 5,
    },
    userId: {
      type: "string",
      format: "uuid",
      example: "fae4d54c-fdf6-4584-a93d-0ab18b6a4f91",
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2024-11-02T11:54:00.581Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2024-11-02T13:59:22.658Z",
    },
    deletedAt: {
      type: ["string", "null"],
      format: "date-time",
      example: null,
    },
  },
};
