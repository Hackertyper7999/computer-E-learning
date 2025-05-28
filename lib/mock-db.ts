import { hash, compare } from "bcryptjs"

// In-memory storage for users
const users = new Map()

// Add default user
const defaultUser = {
  id: 1,
  email: "piyushsadar99@gmail.com",
  password: "$2a$10$8DqVJ.GHC9Iy0Pp9QEzEZOX3JXQcIw7yVMRf/pKrFOzOVbvpgTKJi", // hashed "piyush_sadar_99"
  firstName: "Piyush",
  lastName: "Sadar",
  createdAt: new Date().toISOString(),
}

users.set(defaultUser.email, defaultUser)

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  createdAt: string
  provider?: string
  providerAccountId?: string
}

export interface UserCredentials {
  email: string
  password?: string
  firstName?: string
  lastName?: string
  provider?: string
  providerAccountId?: string
}

export const mockUserService = {
  // Create a new user
  async createUser(userData: UserCredentials): Promise<{ success: boolean; message: string; user?: User }> {
    try {
      // Check if user already exists
      if (users.has(userData.email)) {
        return { success: false, message: "User with this email already exists" }
      }

      // Hash the password if provided
      const hashedPassword = userData.password ? await hash(userData.password, 10) : null

      // Create new user
      const newUser = {
        id: users.size + 1,
        email: userData.email,
        password: hashedPassword,
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        createdAt: new Date().toISOString(),
      }

      users.set(userData.email, newUser)

      // Return user without password
      const { password, ...userWithoutPassword } = newUser

      return {
        success: true,
        message: "User created successfully",
        user: userWithoutPassword as User,
      }
    } catch (error) {
      console.error("Error creating user:", error)
      return { success: false, message: "An error occurred while creating user" }
    }
  },

  // Create a new OAuth user
  async createOAuthUser(userData: UserCredentials): Promise<{ success: boolean; message: string; user?: User }> {
    try {
      // Check if user already exists
      if (users.has(userData.email)) {
        const existingUser = users.get(userData.email)

        // Update provider info
        existingUser.provider = userData.provider
        existingUser.providerAccountId = userData.providerAccountId

        // Return user without password
        const { password, ...userWithoutPassword } = existingUser

        return {
          success: true,
          message: "User updated successfully",
          user: userWithoutPassword as User,
        }
      }

      // Create new OAuth user
      const newUser = {
        id: users.size + 1,
        email: userData.email,
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        provider: userData.provider,
        providerAccountId: userData.providerAccountId,
        createdAt: new Date().toISOString(),
      }

      users.set(userData.email, newUser)

      return {
        success: true,
        message: "OAuth user created successfully",
        user: newUser as User,
      }
    } catch (error) {
      console.error("Error creating OAuth user:", error)
      return { success: false, message: "An error occurred while creating OAuth user" }
    }
  },

  // Find user by email
  findUserByEmail(email: string): User | null {
    return users.get(email) || null
  },

  // Authenticate a user
  async loginUser(credentials: { email: string; password: string }): Promise<{
    success: boolean
    message: string
    user?: User
  }> {
    try {
      // Find the user
      const user = users.get(credentials.email)

      if (!user) {
        return { success: false, message: "Invalid email or password" }
      }

      // If user was created with OAuth and has no password
      if (!user.password) {
        return {
          success: false,
          message: "This account uses social login. Please sign in with Google or Facebook.",
        }
      }

      // Compare passwords
      const passwordMatch = await compare(credentials.password, user.password)

      if (!passwordMatch) {
        return { success: false, message: "Invalid email or password" }
      }

      // Return user without password
      const { password, ...userWithoutPassword } = user

      return {
        success: true,
        message: "Login successful",
        user: userWithoutPassword as User,
      }
    } catch (error) {
      console.error("Error logging in:", error)
      return { success: false, message: "An error occurred during login" }
    }
  },

  // Generate password reset token
  async generateResetToken(email: string): Promise<{ success: boolean; message: string }> {
    return {
      success: true,
      message: "If your email exists in our system, you will receive a password reset link",
    }
  },

  // Reset password using token
  async resetPassword(token: string, newPassword: string): Promise<{ success: boolean; message: string }> {
    return {
      success: true,
      message: "Password has been reset successfully",
    }
  },

  // Get all users (for admin purposes)
  getAllUsers(): User[] {
    return Array.from(users.values()).map((user) => {
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword as User
    })
  },

  // Get user by ID
  getUserById(id: number): User | null {
    for (const user of users.values()) {
      if (user.id === id) {
        const { password, ...userWithoutPassword } = user
        return userWithoutPassword as User
      }
    }
    return null
  },
}
