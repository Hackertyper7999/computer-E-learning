import Database from "better-sqlite3"
import { hash, compare } from "bcryptjs"
import { randomBytes } from "crypto"

// Initialize the database
const db = new Database("edutech.db")

// Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    resetToken TEXT,
    resetTokenExpiry DATETIME,
    provider TEXT,
    providerAccountId TEXT
  );
`)

// Initialize default user
async function initializeDefaultUser() {
  try {
    const defaultEmail = "piyushsadar99@gmail.com"
    const existingUser = db.prepare("SELECT * FROM users WHERE email = ?").get(defaultEmail)

    if (!existingUser) {
      const hashedPassword = await hash("piyush_sadar_99", 10)
      const stmt = db.prepare("INSERT INTO users (email, password, firstName, lastName) VALUES (?, ?, ?, ?)")
      stmt.run(defaultEmail, hashedPassword, "Piyush", "Sadar")
      console.log("Default user created successfully")
    }
  } catch (error) {
    console.error("Error creating default user:", error)
  }
}

// Call initialization
initializeDefaultUser()

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

export const userService = {
  // Create a new user
  async createUser(userData: UserCredentials): Promise<{ success: boolean; message: string; user?: User }> {
    try {
      // Check if user already exists
      const existingUser = db.prepare("SELECT * FROM users WHERE email = ?").get(userData.email)

      if (existingUser) {
        return { success: false, message: "User with this email already exists" }
      }

      // Hash the password if provided
      const hashedPassword = userData.password ? await hash(userData.password, 10) : null

      // Insert the new user
      const stmt = db.prepare("INSERT INTO users (email, password, firstName, lastName) VALUES (?, ?, ?, ?)")

      const result = stmt.run(userData.email, hashedPassword, userData.firstName || "", userData.lastName || "")

      if (result.changes > 0) {
        const newUser = db
          .prepare("SELECT id, email, firstName, lastName, createdAt FROM users WHERE id = ?")
          .get(result.lastInsertRowid)
        return {
          success: true,
          message: "User created successfully",
          user: newUser as User,
        }
      }

      return { success: false, message: "Failed to create user" }
    } catch (error) {
      console.error("Error creating user:", error)
      return { success: false, message: "An error occurred while creating user" }
    }
  },

  // Create a new OAuth user
  async createOAuthUser(userData: UserCredentials): Promise<{ success: boolean; message: string; user?: User }> {
    try {
      // Check if user already exists
      const existingUser = db.prepare("SELECT * FROM users WHERE email = ?").get(userData.email)

      if (existingUser) {
        // Update provider info if user exists
        const updateStmt = db.prepare("UPDATE users SET provider = ?, providerAccountId = ? WHERE email = ?")
        updateStmt.run(userData.provider, userData.providerAccountId, userData.email)

        return {
          success: true,
          message: "User updated successfully",
          user: existingUser as User,
        }
      }

      // Insert the new OAuth user
      const stmt = db.prepare(
        "INSERT INTO users (email, firstName, lastName, provider, providerAccountId) VALUES (?, ?, ?, ?, ?)",
      )

      const result = stmt.run(
        userData.email,
        userData.firstName || "",
        userData.lastName || "",
        userData.provider,
        userData.providerAccountId,
      )

      if (result.changes > 0) {
        const newUser = db
          .prepare("SELECT id, email, firstName, lastName, createdAt, provider FROM users WHERE id = ?")
          .get(result.lastInsertRowid)
        return {
          success: true,
          message: "OAuth user created successfully",
          user: newUser as User,
        }
      }

      return { success: false, message: "Failed to create OAuth user" }
    } catch (error) {
      console.error("Error creating OAuth user:", error)
      return { success: false, message: "An error occurred while creating OAuth user" }
    }
  },

  // Find user by email
  findUserByEmail(email: string): User | null {
    try {
      return (db.prepare("SELECT * FROM users WHERE email = ?").get(email) as User) || null
    } catch (error) {
      console.error("Error finding user by email:", error)
      return null
    }
  },

  // Authenticate a user
  async loginUser(credentials: { email: string; password: string }): Promise<{
    success: boolean
    message: string
    user?: User
  }> {
    try {
      // Find the user
      const user = db.prepare("SELECT * FROM users WHERE email = ?").get(credentials.email)

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
      const { password, resetToken, resetTokenExpiry, ...userWithoutPassword } = user

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
    try {
      // Check if user exists
      const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email)

      if (!user) {
        // For security reasons, don't reveal that the email doesn't exist
        return { success: true, message: "If your email exists in our system, you will receive a password reset link" }
      }

      // Generate token
      const resetToken = randomBytes(32).toString("hex")
      const resetTokenExpiry = new Date()
      resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1) // Token valid for 1 hour

      // Save token to database
      const stmt = db.prepare("UPDATE users SET resetToken = ?, resetTokenExpiry = ? WHERE email = ?")
      stmt.run(resetToken, resetTokenExpiry.toISOString(), email)

      // In a real application, you would send an email with the reset link
      // For this example, we'll just return the token
      return {
        success: true,
        message: "If your email exists in our system, you will receive a password reset link",
      }
    } catch (error) {
      console.error("Error generating reset token:", error)
      return { success: false, message: "An error occurred" }
    }
  },

  // Reset password using token
  async resetPassword(token: string, newPassword: string): Promise<{ success: boolean; message: string }> {
    try {
      // Find user with this token
      const user = db.prepare("SELECT * FROM users WHERE resetToken = ?").get(token)

      if (!user) {
        return { success: false, message: "Invalid or expired reset token" }
      }

      // Check if token is expired
      const tokenExpiry = new Date(user.resetTokenExpiry)
      if (tokenExpiry < new Date()) {
        return { success: false, message: "Reset token has expired" }
      }

      // Hash the new password
      const hashedPassword = await hash(newPassword, 10)

      // Update password and clear token
      const stmt = db.prepare("UPDATE users SET password = ?, resetToken = NULL, resetTokenExpiry = NULL WHERE id = ?")
      stmt.run(hashedPassword, user.id)

      return { success: true, message: "Password has been reset successfully" }
    } catch (error) {
      console.error("Error resetting password:", error)
      return { success: false, message: "An error occurred while resetting password" }
    }
  },

  // Get all users (for admin purposes)
  getAllUsers(): User[] {
    try {
      return db.prepare("SELECT id, email, firstName, lastName, createdAt, provider FROM users").all() as User[]
    } catch (error) {
      console.error("Error getting all users:", error)
      return []
    }
  },

  // Get user by ID
  getUserById(id: number): User | null {
    try {
      return (
        (db
          .prepare("SELECT id, email, firstName, lastName, createdAt, provider FROM users WHERE id = ?")
          .get(id) as User) || null
      )
    } catch (error) {
      console.error("Error getting user by ID:", error)
      return null
    }
  },
}
