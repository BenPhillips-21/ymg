import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import { createClient } from '@libsql/client';

config({ path: '.env' }); // or .env.local

const client = createClient({
    url: "libsql://ymg-benphillips-21.aws-ap-northeast-1.turso.io",
  authToken: process.env.TURSO_AUTH_TOKEN!
})

export const db = drizzle(client, { schema })