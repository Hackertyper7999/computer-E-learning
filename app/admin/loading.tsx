import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-800">EduTech Academy - Admin</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <div className="h-5 w-16 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-5 w-20 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-5 w-16 bg-slate-200 animate-pulse rounded"></div>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-8 w-64 bg-slate-200 animate-pulse rounded mb-2"></div>
          <div className="h-5 w-48 bg-slate-200 animate-pulse rounded"></div>
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <div className="h-4 w-24 bg-slate-200 animate-pulse rounded"></div>
                <div className="h-4 w-4 bg-slate-200 animate-pulse rounded"></div>
              </div>
              <div className="h-8 w-16 bg-slate-200 animate-pulse rounded mb-1"></div>
              <div className="h-3 w-20 bg-slate-200 animate-pulse rounded"></div>
            </div>
          ))}
        </div>

        {/* Users List Skeleton */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <div className="h-6 w-32 bg-slate-200 animate-pulse rounded mb-2"></div>
            <div className="h-4 w-64 bg-slate-200 animate-pulse rounded"></div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-slate-200 animate-pulse rounded-full"></div>
                    <div>
                      <div className="h-5 w-32 bg-slate-200 animate-pulse rounded mb-1"></div>
                      <div className="h-4 w-48 bg-slate-200 animate-pulse rounded mb-1"></div>
                      <div className="h-3 w-24 bg-slate-200 animate-pulse rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-16 bg-slate-200 animate-pulse rounded"></div>
                    <div className="h-6 w-12 bg-slate-200 animate-pulse rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
