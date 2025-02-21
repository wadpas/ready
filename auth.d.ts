// auth.d.ts
declare module '#auth-utils' {
  interface User {
    id: string
    email: string
    username: string | null
    firstname: string | null
    lastname: string | null
    role: $Enums.UserRole
    avatarUrl: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
  }

  interface UserSession {
    // Add your own fields
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {}
