import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../prisma/client";
import { organization } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { ac, adminRole, editorRole, reporterRole } from "./permissions";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    organization({
      ac,
      roles: {
        adminRole,
        editorRole,
        reporterRole,
      },
    }),
    tanstackStartCookies(),
  ],
});
