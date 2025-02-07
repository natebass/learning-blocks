import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

import {
  type Body_login_login_access_token as AccessToken,
  type ApiError,
  LoginService,
  type UserPublic,
  type UserRegister,
  UsersService,
} from '@/client'
import { AxiosError } from 'axios'

function useCustomToast() {
  // const toast = useToast()
  // return useCallback(
  //   (title: string, description: string, status: "success" | "error") => {
  //     toast({
  //       title,
  //       description,
  //       status,
  //       isClosable: true,
  //       position: "bottom-right",
  //     })
  //   },
  //   [toast],
  // )
}

const isLoggedIn = () => {
  return localStorage.getItem('access_token') !== null
}

/**
 * Custom hook for handling authentication-related operations.
 *
 * This hook provides utility functions and state for managing user
 * authentication, including sign-up, login, and logout functionality.
 * Additionally, it manages current user data and loading/error states.
 *
 * Features:
 * - Sign-up mutation for user registration
 * - Login mutation for authentication with access tokens
 * - Logout method to clear the session
 * - Retrieves the current user's information
 * - Handles errors and displays toast notifications for success/failure cases
 *
 * Dependencies:
 * - `@tanstack/react-query` for managing server state
 * - `@tanstack/react-router` for navigation
 * - `axios` for API interactions
 * - LocalStorage to persist the access token
 */
const useAuth2 = () => {
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const showToast = useCustomToast()
  const queryClient = useQueryClient()
  const { data: user, isLoading } = useQuery<UserPublic | null, Error>({
    queryKey: ['currentUser'],
    queryFn: UsersService.readUserMe,
    enabled: isLoggedIn(),
  })

  const signUpMutation = useMutation({
    mutationFn: (data: UserRegister) =>
      UsersService.registerUser({ requestBody: data }),

    onSuccess: () => {
      navigate({ to: '/login' })
      showToast(
        'Account created.',
        'Your account has been created successfully.',
        'success',
      )
    },
    onError: (err: ApiError) => {
      let errDetail = (err.body as any)?.detail

      if (err instanceof AxiosError) {
        errDetail = err.message
      }

      showToast('Something went wrong.', errDetail, 'error')
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const login = async (data: AccessToken) => {
    const response = await LoginService.loginAccessToken({
      formData: data,
    })
    localStorage.setItem('access_token', response.access_token)
  }

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate({ to: '/' })
    },
    onError: (err: ApiError) => {
      let errDetail = (err.body as any)?.detail

      if (err instanceof AxiosError) {
        errDetail = err.message
      }

      if (Array.isArray(errDetail)) {
        errDetail = 'Something went wrong'
      }

      setError(errDetail)
    },
  })

  const logout = () => {
    localStorage.removeItem('access_token')
    navigate({ to: '/login' })
  }

  return {
    signUpMutation,
    loginMutation,
    logout,
    user,
    isLoading,
    error,
    resetError: () => setError(null),
  }
}

export { isLoggedIn }
export default useAuth2
