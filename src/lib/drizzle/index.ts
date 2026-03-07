import { drizzle } from "drizzle-orm/neon-serverless";
import { env } from "@/lib/t3env/server";
import * as publicSchema from "./schemas/public-schema";
import * as authSchema from "./schemas/auth-schema";

export const db = drizzle(env.DATABASE_URL, { schema: { ...publicSchema, ...authSchema } });
