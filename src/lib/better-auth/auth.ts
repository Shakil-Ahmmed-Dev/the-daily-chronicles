import { betterAuth } from "better-auth";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { organization } from "better-auth/plugins/organization";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../drizzle";
import { env } from "../t3env/server";
import { ac } from "./permissions";

export const auth = betterAuth({
    baseURL: env.VERCEL_URL,
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, {
        provider: "pg"
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [organization({
        ac,
        dynamicAccessControl: {
            enabled: true,
        },
        teams: {
            enabled: true,
        }
    }), tanstackStartCookies()]
})