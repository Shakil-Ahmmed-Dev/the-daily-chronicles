import { createMiddleware } from "@tanstack/react-start";
import { getIsAuthenticatedServer } from "./server";
import { redirect } from "@tanstack/react-router";

export const authMiddleware = createMiddleware().server(async ({ next }) => {
    const isAuthenticated = await getIsAuthenticatedServer();
    if (!isAuthenticated) {
        throw redirect({ to: "/sign-in" });
    }

    return next();
});

export const avoidRedundantAuthMiddleware = createMiddleware().server(async ({ next }) => {
    const isAuthenticated = await getIsAuthenticatedServer();
    if (isAuthenticated) {
        throw redirect({ to: "/admin/dashboard" });
    }

    return next();
});