export const bearerAuthSchema = {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
  description:
    "JWT Authorization header using the Bearer scheme. Example: 'Authorization: Bearer {token}'",
};
