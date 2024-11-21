'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@/types/user'

type UserContextType = {
  user: User | null
  isLoading: boolean
  error: Error | null
}

const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: false,
  error: null
})

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user')
        if (!response.ok) throw new Error('Failed to fetch user')
        const userData = await response.json()
        setUser(userData)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, isLoading, error }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
