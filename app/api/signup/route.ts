import { userService } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, password } = body

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 8 characters long" },
        { status: 400 }
      )
    }

    // Create user
    const result = await userService.createUser({
      email,
      password,
      firstName,
      lastName,
    })

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error in signup API:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while creating user" },
      { status: 500 }
    )
  }
}
