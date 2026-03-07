import { createEnv } from "@t3-oss/env-core";
import { vercel } from "@t3-oss/env-core/presets-zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {},
  runtimeEnv: process.env,
  extends: [vercel()]
});
