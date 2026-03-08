import { useMutation, useQuery } from "@tanstack/react-query";
import { getIsAuthenticatedServer, getSessionServer, getUserServer, signInEmailServer, signOutServer, signUpEmailServer } from "./server";
import { toast } from "sonner";
import type { SignInEmailServerType, SignUpEmailServerType } from "../types";
import { useRouter } from "@tanstack/react-router";

export const useSignUpEmailClient = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: SignUpEmailServerType) => {
            await signUpEmailServer({ data });
        },
        onSettled: (_, __, ___, ____, { client }) => {
            client.invalidateQueries({ queryKey: ["auth"] });
        },
        onSuccess: () => {
            toast.success("Signed Up Successfully");
            router.navigate({ to: "/sign-in" });
        },
        onError: (error) => toast.error(error.message),
    })
};

export const useSignInEmailClient = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: SignInEmailServerType) => {
            const res = await signInEmailServer({ data });
            return res;
        },
        onSettled: (_, __, ___, ____, { client }) => {
            client.invalidateQueries({ queryKey: ["auth"] });
        },
        onSuccess: (res) => {
            toast.success("Signed In Successfully");
            if (res.url !== undefined) {
                router.navigate({ to: res.url });
            }
        },
        onError: (error) => toast.error(error.message),
    })
};

export const useSignOutClient = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: signOutServer,
        onSettled: (_, __, ___, ____, { client }) => {
            client.invalidateQueries({ queryKey: ["auth"] });
        },
        onSuccess: () => {
            toast.success("Signed Out Successfully");
            router.navigate({ to: "/sign-in" });
        },
        onError: (error) => toast.error(error.message),
    })
};

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