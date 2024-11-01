export default {
  enviroment: process.env.NODE_ENV ?? "development",
  port: process.env.HTTP_PORT ?? 3030,
  jwtSecret: process.env.JWT_SECRET ?? "any-secret",
};
