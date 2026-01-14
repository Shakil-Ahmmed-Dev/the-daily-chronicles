import { createAccessControl } from "better-auth/plugins/access";

// Define all resources and the possible actions on each.
// These are generic verbs; your app logic can still enforce
// finer-grained rules like "own vs any" based on record ownership.
const statement = {
  article: ["create", "read", "update", "delete", "publish"] as const,
  category: ["create", "read", "update", "delete"] as const,
  subCategory: ["create", "read", "update", "delete"] as const,
  tag: ["create", "read", "update", "delete"] as const,
  media: ["upload", "read", "update", "delete"] as const,
  edition: ["create", "read", "update", "delete", "publish"] as const,
  comment: ["read", "moderate", "delete"] as const,
  user: ["read", "invite", "deactivate"] as const,
} as const;

export const ac = createAccessControl(statement);

// Organization / staff roles for the newsroom.
// These are NOT stored in Prisma; they are handled by Better Auth.

// Full control over everything, including staff management.
export const adminRole = ac.newRole({
  article: ["create", "read", "update", "delete", "publish"],
  category: ["create", "read", "update", "delete"],
  subCategory: ["create", "read", "update", "delete"],
  tag: ["create", "read", "update", "delete"],
  media: ["upload", "read", "update", "delete"],
  edition: ["create", "read", "update", "delete", "publish"],
  comment: ["read", "moderate", "delete"],
  user: ["read", "invite", "deactivate"],
});

// Runs the day‑to‑day desk: manages content but not staff accounts.
export const editorRole = ac.newRole({
  article: ["create", "read", "update", "delete", "publish"],
  category: ["create", "read", "update", "delete"],
  subCategory: ["create", "read", "update", "delete"],
  tag: ["create", "read", "update", "delete"],
  media: ["upload", "read", "update", "delete"],
  edition: ["create", "read", "update", "delete", "publish"],
  comment: ["read", "moderate", "delete"],
  user: ["read"],
});

// Staff writer / reporter: can create and edit stories, but not publish.
export const reporterRole = ac.newRole({
  article: ["create", "read", "update"],
  category: ["read"],
  subCategory: ["read"],
  tag: ["read"],
  media: ["upload", "read"],
  edition: ["read"],
  comment: ["read"],
  user: ["read"],
});