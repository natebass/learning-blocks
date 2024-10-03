export function checkEnvTurso(env: NodeJS.ProcessEnv) {
  let errorMessage = `
 Make sure you have a .env file in the root of your project with TURSO_CONNECTION_URL and TURSO_AUTH_TOKEN.
 `

  if (!env.TURSO_CONNECTION_URL)
    throw new Error('TURSO_CONNECTION_URL is not set.' + errorMessage)
  if (!env.TURSO_AUTH_TOKEN)
    throw new Error('TURSO_AUTH_TOKEN is not set' + errorMessage)
}
