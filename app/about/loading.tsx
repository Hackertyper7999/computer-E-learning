import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function AboutLoading() {
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
              <div className="h-5 w-16 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-5 w-16 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-5 w-16 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-5 w-16 bg-slate-200 animate-pulse rounded"></div>
            </nav>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-20 bg-slate-200 animate-pulse rounded-md"></div>
              <div className="h-10 w-24 bg-slate-200 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="h-12 w-96 bg-blue-500 animate-pulse rounded mx-auto mb-6"></div>
          <div className="h-6 w-full max-w-3xl bg-blue-500 animate-pulse rounded mx-auto mb-4"></div>
          <div className="h-6 w-2/3 bg-blue-500 animate-pulse rounded mx-auto mb-8"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 w-48 bg-blue-500 animate-pulse rounded"></div>
            <div className="h-12 w-48 bg-blue-500 animate-pulse rounded"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="h-8 w-48 bg-slate-200 animate-pulse rounded mb-6"></div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-200 animate-pulse rounded"></div>
                <div className="h-4 w-full bg-slate-200 animate-pulse rounded"></div>
                <div className="h-4 w-3/4 bg-slate-200 animate-pulse rounded"></div>
              </div>
            </div>
            <div className="h-64 bg-slate-200 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-slate-200 animate-pulse rounded mx-auto mb-4"></div>
            <div className="h-4 w-96 bg-slate-200 animate-pulse rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
                <div className="w-16 h-16 bg-slate-200 animate-pulse rounded-full mx-auto mb-4"></div>
                <div className="h-8 w-20 bg-slate-200 animate-pulse rounded mx-auto mb-2"></div>
                <div className="h-4 w-24 bg-slate-200 animate-pulse rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
