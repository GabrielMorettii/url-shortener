import config from "../../jest.config";

config.rootDir = "../../";
config.testMatch = ["**/*.test.ts"];
config.setupFilesAfterEnv = ["./tests/config/jest.setup.ts"];

export default config;
