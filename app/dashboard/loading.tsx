import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-800">EduTech Academy</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <div className="h-5 w-20 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-5 w-20 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-5 w-20 bg-slate-200 animate-pulse rounded"></div>
            </nav>
            <div className="h-10 w-24 bg-slate-200 animate-pulse rounded-md"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="h-8 w-48 bg-slate-200 animate-pulse rounded mb-2"></div>
        <div className="h-5 w-64 bg-slate-200 animate-pulse rounded mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
            <div className="h-6 w-32 bg-slate-200 animate-pulse rounded mb-2"></div>
            <div className="h-4 w-40 bg-slate-200 animate-pulse rounded mb-4"></div>
            <div className="h-8 w-16 bg-slate-200 animate-pulse rounded mb-2"></div>
            <div className="h-4 w-24 bg-slate-200 animate-pulse rounded mb-4"></div>
            <div className="h-10 w-full bg-slate-200 animate-pulse rounded"></div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
            <div className="h-6 w-32 bg-slate-200 animate-pulse rounded mb-2"></div>
            <div className="h-4 w-40 bg-slate-200 animate-pulse rounded mb-4"></div>
            <div className="h-8 w-16 bg-slate-200 animate-pulse rounded mb-2"></div>
            <div className="h-4 w-24 bg-slate-200 animate-pulse rounded"></div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
            <div className="h-6 w-32 bg-slate-200 animate-pulse rounded mb-2"></div>
            <div className="h-4 w-40 bg-slate-200 animate-pulse rounded mb-4"></div>
            <div className="h-8 w-16 bg-slate-200 animate-pulse rounded mb-2"></div>
            <div className="h-4 w-24 bg-slate-200 animate-pulse rounded"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <div className="h-6 w-48 bg-slate-200 animate-pulse rounded mb-2"></div>
          <div className="h-4 w-64 bg-slate-200 animate-pulse rounded mb-4"></div>
          <div className="h-5 w-full max-w-md bg-slate-200 animate-pulse rounded mb-4"></div>
          <div className="h-10 w-32 bg-slate-200 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  )
}
