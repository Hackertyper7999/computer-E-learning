"use server"

import Database from "better-sqlite3"

// Initialize the database
const db = new Database("edutech.db")

// Create contact messages table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  if (name.length < 2) {
    return {
      success: false,
      message: "Name must be at least 2 characters long",
    }
  }

  if (message.length < 10) {
    return {
      success: false,
      message: "Message must be at least 10 characters long",
    }
  }

  try {
    // Insert the message into the database
    const stmt = db.prepare("INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)")
    const result = stmt.run(name, email, subject, message)

    if (result.changes > 0) {
      return {
        success: true,
        message: "Your message has been sent successfully. We'll get back to you soon!",
      }
    }

    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "An error occurred while sending your message. Please try again later.",
    }
  }
}
