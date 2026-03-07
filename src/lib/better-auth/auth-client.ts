import { createAuthClient } from "better-auth/react";
import { env } from "../t3env/client";

export const authClient = createAuthClient({
    baseURL: env.VERCEL_URL,
});