"use server"

import { userService } from "@/lib/db"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Sign up action
export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string

  // Basic validation
  if (!email || !password || !confirmPassword || !firstName || !lastName) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  if (password !== confirmPassword) {
    return {
      success: false,
      message: "Passwords do not match",
    }
  }

  if (password.length < 8) {
    return {
      success: false,
      message: "Password must be at least 8 characters long",
    }
  }

  // Create user
  const result = await userService.createUser({
    email,
    password,
    firstName,
    lastName,
  })

  if (result.success && result.user) {
    // Set session cookie
    cookies().set("userId", String(result.user.id), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    // Redirect to dashboard
    redirect("/dashboard")
  }

  return result
}

// Login action
export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const rememberMe = formData.get("rememberMe") === "on"

  // Basic validation
  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required",
    }
  }

  // Authenticate user
  const result = await userService.loginUser({
    email,
    password,
  })

  if (result.success && result.user) {
    // Set session cookie
    cookies().set("userId", String(result.user.id), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24, // 30 days if remember me, else 1 day
      path: "/",
    })

    // Redirect to dashboard
    redirect("/dashboard")
  }

  return result
}

// Forgot password action
export async function forgotPassword(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Email is required",
    }
  }

  // Generate reset token
  const result = await userService.generateResetToken(email)

  return result
}

// Reset password action
export async function resetPassword(formData: FormData) {
  const token = formData.get("token") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string

  // Basic validation
  if (!token || !password || !confirmPassword) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  if (password !== confirmPassword) {
    return {
      success: false,
      message: "Passwords do not match",
    }
  }

  if (password.length < 8) {
    return {
      success: false,
      message: "Password must be at least 8 characters long",
    }
  }

  // Reset password
  const result = await userService.resetPassword(token, password)

  if (result.success) {
    // Redirect to login page
    redirect("/login")
  }

  return result
}

// Logout action
export async function logout() {
  cookies().delete("userId")
  redirect("/")
}
