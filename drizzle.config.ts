import { env } from '@/lib/t3env/server';
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './src/lib/drizzle/generated',
    schema: ['./src/lib/drizzle/schemas/public-schema.ts', './src/lib/drizzle/schemas/auth-schema.ts'],
    dialect: 'postgresql',
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});
