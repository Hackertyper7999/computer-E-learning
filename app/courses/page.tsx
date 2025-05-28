import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Users, Clock, Star, Search, Filter, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the fundamentals of programming with Python. Perfect for beginners with no prior experience.",
      duration: "8 weeks",
      students: 1250,
      rating: 4.8,
      price: "$99",
      level: "Beginner",
      category: "Programming",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      description: "Complete guide to HTML, CSS, JavaScript and React. Build real-world projects.",
      duration: "12 weeks",
      students: 890,
      rating: 4.9,
      price: "$149",
      level: "Intermediate",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      description: "Master data analysis, visualization and machine learning with Python and R.",
      duration: "10 weeks",
      students: 675,
      rating: 4.7,
      price: "$129",
      level: "Intermediate",
      category: "Data Science",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build iOS and Android apps using React Native. Deploy to app stores.",
      duration: "14 weeks",
      students: 542,
      rating: 4.6,
      price: "$179",
      level: "Advanced",
      category: "Mobile Development",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Database Design & SQL",
      description: "Learn database concepts, design principles, and master SQL queries.",
      duration: "6 weeks",
      students: 823,
      rating: 4.5,
      price: "$89",
      level: "Beginner",
      category: "Database",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Understand security principles, ethical hacking, and network protection.",
      duration: "16 weeks",
      students: 456,
      rating: 4.8,
      price: "$199",
      level: "Advanced",
      category: "Security",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    "All",
    "Programming",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Database",
    "Security",
  ]

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
              <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/courses" className="text-blue-600 font-medium">
                Courses
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
              <Link href="/login">
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">All Courses</h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Discover our comprehensive collection of computer science courses designed to advance your career
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search courses..."
                className="pl-10 border-slate-300 focus:border-blue-500 h-10 sm:h-11 text-sm sm:text-base"
              />
            </div>
            <Button variant="outline" className="border-slate-300 hover:bg-slate-50 h-10 sm:h-11 text-sm sm:text-base">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className={`cursor-pointer px-2 sm:px-3 py-1 text-xs sm:text-sm ${
                  category === "All"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow border-slate-200 bg-white">
              <div className="relative">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <Badge className="bg-white text-slate-700 hover:bg-white text-xs sm:text-sm">{course.level}</Badge>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white px-2 py-1 rounded text-xs sm:text-sm font-semibold text-blue-600">
                  {course.price}
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xs sm:text-sm text-slate-600">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-slate-800 line-clamp-2 text-base sm:text-lg">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm sm:text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {course.students}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base h-9 sm:h-10">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8 sm:mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 text-sm sm:text-base px-6 sm:px-8"
          >
            Load More Courses
          </Button>
        </div>
      </div>
    </div>
  )
}
