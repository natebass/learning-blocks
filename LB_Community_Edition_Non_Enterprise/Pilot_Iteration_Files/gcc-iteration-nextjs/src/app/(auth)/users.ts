import 'server-only'
import { COOKIE_NAME } from '../../utilities/constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { getUserFromToken } from '@/services/drizzle/utilities/user'

export const getCurrentUser = cache(async () => {
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')

  const user = await getUserFromToken(token)
  if (!user) redirect('/signin')

  return user
})