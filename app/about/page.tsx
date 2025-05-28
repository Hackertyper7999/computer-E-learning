import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Target,
  Heart,
  Lightbulb,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Piyush S",
      role: "Founder & CEO",
      bio: "Former Google engineer with 15+ years in tech education. PhD in Computer Science from MIT.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["AI/ML", "Software Engineering", "Leadership"],
    },
    {
      name: "Prof. Suraj Mehetre",
      role: "Head of Curriculum",
      bio: "Stanford professor and curriculum designer. Expert in creating engaging learning experiences.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Web Development", "Data Science", "Pedagogy"],
    },
    {
      name: "Rutuja Sawale",
      role: "Chief Technology Officer",
      bio: "Former Microsoft architect. Specializes in scalable learning platforms and educational technology.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Cloud Computing", "DevOps", "Platform Architecture"],
    },
    {
      name: "Youtube",
      role: "Head of Student Success",
      bio: "Education specialist focused on student outcomes and career development in tech.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Career Coaching", "Student Support", "Industry Relations"],
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence in Education",
      description: "We maintain the highest standards in course quality, instructor expertise, and learning outcomes.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Inclusive Learning",
      description: "Education should be accessible to everyone, regardless of background or experience level.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and teaching methods to enhance the learning experience.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Student-Centered",
      description: "Every decision we make prioritizes student success and career advancement.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Community",
      description: "Building a worldwide network of learners, instructors, and industry professionals.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Continuous Growth",
      description: "We constantly evolve our platform and content to meet industry demands.",
    },
  ]

  const achievements = [
    { number: "50,000+", label: "Students Graduated", icon: <Users className="h-6 w-6" /> },
    { number: "95%", label: "Job Placement Rate", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "500+", label: "Industry Partners", icon: <Globe className="h-6 w-6" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="h-6 w-6" /> },
  ]

  const milestones = [
    {
      year: "2018",
      title: "EduTech Academy Founded",
      description: "Started with a vision to democratize tech education",
    },
    {
      year: "2019",
      title: "First 1,000 Students",
      description: "Reached our first major milestone in student enrollment",
    },
    { year: "2020", title: "Global Expansion", description: "Launched international programs and partnerships" },
    { year: "2021", title: "Industry Recognition", description: "Won 'Best Online Learning Platform' award" },
    {
      year: "2022",
      title: "Corporate Partnerships",
      description: "Established partnerships with Fortune 500 companies",
    },
    {
      year: "2023",
      title: "AI-Powered Learning",
      description: "Integrated AI tutoring and personalized learning paths",
    },
    { year: "2024", title: "50,000+ Graduates", description: "Celebrated our 50,000th successful graduate" },
  ]

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
              <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/courses" className="text-slate-600 hover:text-blue-600 font-medium">
                Courses
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About EduTech Academy</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're on a mission to make quality computer science education accessible to everyone, everywhere. Since
            2018, we've been empowering learners to build successful careers in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Explore Our Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg mb-6">
                To democratize access to high-quality computer science education and empower individuals worldwide to
                build successful careers in technology. We believe that everyone deserves the opportunity to learn,
                grow, and thrive in the digital age.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Accessible Education</h3>
                    <p className="text-slate-600">Making quality tech education available to learners globally</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Industry-Relevant Skills</h3>
                    <p className="text-slate-600">Teaching practical skills that employers actually need</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Career Success</h3>
                    <p className="text-slate-600">Supporting students from learning to landing their dream job</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students learning together"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Impact</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to student success and educational excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-slate-200">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{achievement.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-slate-600">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Passionate educators and industry experts dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform tech education
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="bg-blue-600 w-4 h-4 rounded-full absolute left-6 top-2"></div>
                    <div className="ml-16">
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                        <div className="flex items-center mb-2">
                          <Badge className="bg-blue-600 text-white mr-3">{milestone.year}</Badge>
                          <h3 className="text-lg font-semibold text-slate-800">{milestone.title}</h3>
                        </div>
                        <p className="text-slate-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join our community of learners and take the first step towards your dream career in technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Learning Today
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">EduTech Academy</span>
              </div>
              <p className="text-slate-400">Empowering learners worldwide with quality computer science education.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Programming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mobile Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 EduTech Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
