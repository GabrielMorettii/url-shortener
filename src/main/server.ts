import "express-async-errors";

import env from "@/main/config/env";
import { setupApp } from "@/main/config/app";

const app = setupApp();

app.listen(env.port, () => {
  console.log(`Server running at http://localhost:${env.port}`);
});
