import { createAuthClient } from "better-auth/react";
import { env } from "../t3env/client";
import { organizationClient } from "better-auth/client/plugins";
import { ac } from "./permissions";

export const authClient = createAuthClient({
    baseURL: env.VERCEL_URL,
    plugins: [organizationClient({
        ac,
        dynamicAccessControl: {
            enabled: true
        },
        teams: {
            enabled: true
        }
    })],
});