import { createServerFn } from "@tanstack/react-start"
import { signInEmailServerSchema, signUpEmailServerSchema } from "../types"
import { auth } from "@/lib/better-auth/auth";
import { getRequestHeaders } from "@tanstack/react-start/server";

export const signUpEmailServer = createServerFn({
    method: "POST"
}).inputValidator(signUpEmailServerSchema).handler(async ({ data }) => {
    await auth.api.signUpEmail({
        body: {
            name: data.name,
            email: data.email,
            password: data.password,
        }
    })
});

export const signInEmailServer = createServerFn({
    method: "POST"
}).inputValidator(signInEmailServerSchema).handler(async ({ data }) => {
    await auth.api.signInEmail({
        body: data
    });
});

export const signOutServer = createServerFn().handler(async () => {
    await auth.api.signOut({
        headers: await getRequestHeaders()
    });
});

export const getSessionServer = createServerFn().handler(async () => {
    const session = await auth.api.getSession({
        headers: await getRequestHeaders()
    });
    return session;
});

export const getUserServer = createServerFn().handler(async () => {
    const session = await getSessionServer();
    if (session?.user === undefined) {
        return null;
    }
    return session.user;
});

export const getIsAuthenticatedServer = createServerFn().handler(async () => {
    const session = await getSessionServer();
    return (session !== null);
});