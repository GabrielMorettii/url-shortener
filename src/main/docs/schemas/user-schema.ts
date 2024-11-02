export const userSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
      example: "47a92134-bbfd-440a-974d-2d4cbb1c75d3",
    },
    name: {
      type: "string",
      example: "dev",
    },
    email: {
      type: "string",
      format: "email",
      example: "dev@gmail.com",
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2024-11-02T18:00:10.225Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2024-11-02T18:00:10.225Z",
    },
  },
};
