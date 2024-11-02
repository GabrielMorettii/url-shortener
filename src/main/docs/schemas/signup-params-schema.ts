export const signUpParamsSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "dev",
    },
    email: {
      type: "string",
      format: "email",
      example: "dev@gmail.com",
    },
    password: {
      type: "string",
      example: "123123",
    },
  },
  required: ["name", "email", "password"],
};
