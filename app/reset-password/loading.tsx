import { BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ResetPasswordLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">EduTech Academy</span>
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-slate-800">Reset Password</CardTitle>
            <CardDescription className="text-slate-600">Create a new password for your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-10 bg-slate-200 animate-pulse rounded-md"></div>
              <div className="h-10 bg-slate-200 animate-pulse rounded-md"></div>
              <div className="h-10 bg-slate-200 animate-pulse rounded-md"></div>
              <div className="h-5 w-48 mx-auto bg-slate-200 animate-pulse rounded"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
