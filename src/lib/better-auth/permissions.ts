import { createAccessControl } from 'better-auth/plugins/access';

export const statement = {
    "article": ["create", "share", "update", "delete"],
} as const;

export const ac = createAccessControl(statement);