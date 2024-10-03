import { loadEnvConfig } from '@next/env'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client/web'

import * as schema from '@/service/drizzle/schema'
import { checkEnvTurso } from './utilities/turso'

// Set the environment variables that are used by the Drizzle client.
// Use @next/env instead of dotenv package.
// TODO (Feature): Use development environment variables by default.
const projectDir = process.cwd()
loadEnvConfig(projectDir)
checkEnvTurso(process.env)

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

export const sqliteTursoDb = drizzle(client, { schema })
