"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, LogOut, Menu } from "lucide-react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login")
    }
  }, [status])

  // Show loading state while checking session
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-sm sm:text-base">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <h1 className="text-lg sm:text-2xl font-bold text-slate-800">EduTech Academy</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/dashboard" className="text-blue-600 font-medium">
                Dashboard
              </Link>
              <Link href="/courses" className="text-slate-600 hover:text-blue-600 font-medium">
                Courses
              </Link>
              <Link href="/profile" className="text-slate-600 hover:text-blue-600 font-medium">
                Profile
              </Link>
            </nav>

            {/* Desktop Logout */}
            <div className="hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 hover:bg-slate-50"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Logout */}
          <div className="sm:hidden mt-3">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-slate-300 hover:bg-slate-50"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
            Welcome, {session?.user?.name || "Student"}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">Here's an overview of your learning journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">My Courses</CardTitle>
              <CardDescription className="text-sm sm:text-base">Courses you're currently enrolled in</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">0</p>
              <p className="text-slate-600 text-sm sm:text-base">No courses yet</p>
              <Link href="/courses">
                <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base h-9 sm:h-10">
                  Browse Courses
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">Progress</CardTitle>
              <CardDescription className="text-sm sm:text-base">Your overall learning progress</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">0%</p>
              <p className="text-slate-600 text-sm sm:text-base">Start learning to track progress</p>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">Certificates</CardTitle>
              <CardDescription className="text-sm sm:text-base">Certificates you've earned</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">0</p>
              <p className="text-slate-600 text-sm sm:text-base">Complete courses to earn certificates</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg">Recommended Courses</CardTitle>
            <CardDescription className="text-sm sm:text-base">Courses that match your interests</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <p className="text-slate-600 text-sm sm:text-base">
              Start exploring courses to get personalized recommendations.
            </p>
            <Link href="/courses">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base h-9 sm:h-10">
                Explore Courses
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
