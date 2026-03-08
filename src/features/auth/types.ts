import z from "zod";

export const signUpEmailServerSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

export type SignUpEmailServerType = z.infer<typeof signUpEmailServerSchema>;

export const signInEmailServerSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
});

export type SignInEmailServerType = z.infer<typeof signInEmailServerSchema>;