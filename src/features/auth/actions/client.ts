import { useMutation, useQuery } from "@tanstack/react-query";
import { getIsAuthenticatedServer, getSessionServer, getUserServer, signInEmailServer, signOutServer, signUpEmailServer } from "./server";
import { toast } from "sonner";
import type { SignInEmailServerType, SignUpEmailServerType } from "../types";

export const useSignUpEmailClient = () => useMutation({
    mutationFn: async (data: SignUpEmailServerType) => {
        await signUpEmailServer({ data });
    },
    onSettled: (_, __, ___, ____, { client }) => {
        client.invalidateQueries({ queryKey: ["auth"] });
    },
    onSuccess: () => toast.success("Signed Up Successfully"),
    onError: (error) => toast.error(error.message),
});

export const useSignInEmailClient = () => useMutation({
    mutationFn: async (data: SignInEmailServerType) => {
        await signInEmailServer({ data });
    },
    onSettled: (_, __, ___, ____, { client }) => {
        client.invalidateQueries({ queryKey: ["auth"] });
    },
    onSuccess: () => toast.success("Signed In Successfully"),
    onError: (error) => toast.error(error.message),
});

export const useSignOutClient = () => useMutation({
    mutationFn: signOutServer,
    onSettled: (_, __, ___, ____, { client }) => {
        client.invalidateQueries({ queryKey: ["auth"] });
    },
    onSuccess: () => toast.success("Signed Out Successfully"),
    onError: (error) => toast.error(error.message),
});

export const useGetSessionClient = () => useQuery({
    queryKey: ["auth", "session"],
    queryFn: getSessionServer
});

export const useGetUserClient = () => useQuery({
    queryKey: ["auth", "user"],
    queryFn: getUserServer
});

export const useGetIsAuthenticatedClient = () => useQuery({
    queryKey: ["auth", "isAuthenticated"],
    queryFn: getIsAuthenticatedServer
});