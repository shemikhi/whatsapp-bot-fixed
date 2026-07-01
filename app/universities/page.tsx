"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Sample university data - in a real app, this would come from a database or API
const universities = [
  {
    id: "apu",
    name: "Asia Pacific University (APU)",
    slug: "asia-pacific-university",
    logo: "/images/universities/apu-logo.png",
    location: "Kuala Lumpur",
    type: "Private",
    programs: ["Computer Science", "Business", "Engineering", "Design"],
    hasEnglishCourses: true,
  },
  {
    id: "city",
    name: "City University Malaysia",
    slug: "city-university-malaysia",
    logo: "/images/universities/city-university.png",
    location: "Kuala Lumpur",
    type: "Private",
    programs: ["Business", "Education", "Hospitality", "Engineering"],
    hasEnglishCourses: true,
  },
  {
    id: "segi",
    name: "SEGi University",
    slug: "segi-university",
    logo: "/images/universities/segi-university.png",
    location: "Selangor",
    type: "Private",
    programs: ["Medicine", "Dentistry", "Business", "Engineering"],
    hasEnglishCourses: true,
  },
  {
    id: "taylor",
    name: "Taylor's University",
    slug: "taylors-university",
    logo: "/images/universities/taylors-university.png",
    location: "Selangor",
    type: "Private",
    programs: ["Business", "Hospitality", "Engineering", "Medicine"],
    hasEnglishCourses: true,
  },
  {
    id: "sunway",
    name: "Sunway University",
    slug: "sunway-university",
    logo: "/images/universities/sunway-university.png",
    location: "Selangor",
    type: "Private",
    programs: ["Business", "Arts", "Science", "Technology"],
    hasEnglishCourses: true,
  },
  {
    id: "cyberjaya",
    name: "University of Cyberjaya",
    slug: "university-of-cyberjaya",
    logo: "/images/universities/cyberjaya-logo.png",
    location: "Cyberjaya",
    type: "Private",
    programs: ["Medicine", "Pharmacy", "Psychology", "Business"],
    hasEnglishCourses: true,
  },
  {
    id: "help",
    name: "HELP University",
    slug: "help-university",
    logo: "/images/universities/help-university.png",
    location: "Kuala Lumpur",
    type: "Private",
    programs: ["Business", "Law", "Psychology", "Education"],
    hasEnglishCourses: true,
  },
  {
    id: "inti",
    name: "INTI University",
    slug: "inti-university",
    logo: "/images/universities/inti-university.png",
    location: "Selangor",
    type: "Private",
    programs: ["Business", "Engineering", "Health Sciences", "Art & Design"],
    hasEnglishCourses: true,
  },
  {
    id: "unikl",
    name: "Universiti Kuala Lumpur (UniKL)",
    slug: "universiti-kuala-lumpur",
    logo: "/images/universities/unikl-logo.png",
    location: "Multiple Campuses",
    type: "Government-Linked",
    programs: ["Engineering", "IT", "Business", "Medicine", "Aviation"],
    hasEnglishCourses: false,
  },
  {
    id: "mahsa",
    name: "MAHSA University",
    slug: "mahsa-university",
    logo: "/images/universities/mahsa-logo.png",
    location: "Kuala Lumpur & Selangor",
    type: "Private",
    programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing", "Engineering", "Business"],
    hasEnglishCourses: false,
  },
]

export default function UniversitiesPage() {
  const [filteredUniversities, setFilteredUniversities] = useState(universities)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (!query) {
      setFilteredUniversities(universities)
      return
    }

    const lowercaseQuery = query.toLowerCase()
    const filtered = universities.filter(
      (uni) =>
        uni.name.toLowerCase().includes(lowercaseQuery) ||
        uni.location.toLowerCase().includes(lowercaseQuery) ||
        uni.type.toLowerCase().includes(lowercaseQuery) ||
        uni.programs.some((program) => program.toLowerCase().includes(lowercaseQuery)) ||
        (uni.hasEnglishCourses && "english courses".includes(lowercaseQuery)),
    )

    setFilteredUniversities(filtered)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img src="/images/yaz-logo.jpeg" alt="Yaz Education Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-[#272153]">Yaz Education</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#services" className="text-sm font-medium hover:text-[#272153]">
              Services
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-[#272153]">
              About Us
            </Link>
            <Link href="/universities" className="text-sm font-medium text-[#272153]">
              Universities
            </Link>
            <Link href="/fees" className="text-sm font-medium hover:text-[#272153]">
              Fees
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-[#272153]">
              Contact
            </Link>
            <Link href="/ar" className="text-sm font-medium hover:text-[#272153]">
              العربية
            </Link>
          </nav>
          <div>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <section className="w-full py-12 bg-gradient-to-br from-purple-100 via-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <Button asChild variant="outline" className="mb-4 bg-transparent">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#272153] mb-4">
                Find the Right University in Malaysia
              </h1>
              <p className="text-gray-600 max-w-[800px] mb-8">
                Explore top universities in Malaysia. Find information about programs, fees, and English courses.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-3xl bg-white p-2 rounded-full shadow-lg mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search by university name, location, program..."
                    className="pl-12 py-6 text-lg rounded-full border-none"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#272153] hover:bg-[#373163] rounded-full px-6 py-6">
                    Search
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Try searching for: Medicine, Business, Engineering, Kuala Lumpur, English courses
              </p>
            </div>

            {/* Education Level Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
              <Link href="/universities?level=foundation" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">Foundation</div>
                </div>
              </Link>
              <Link href="/universities?level=a-level" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">A-Level</div>
                </div>
              </Link>
              <Link href="/universities?level=diploma" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">Diploma</div>
                </div>
              </Link>
              <Link href="/universities?level=bachelor" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">Bachelor's Degree</div>
                </div>
              </Link>
              <Link href="/universities?level=master" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">Master's Degree</div>
                </div>
              </Link>
              <Link href="/universities?level=phd" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">Doctoral Degree (PhD)</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-12">
          {filteredUniversities.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-medium text-gray-700">
                No universities found matching your search criteria.
              </h2>
              <p className="mt-2 text-gray-500">Try adjusting your search terms or browse all universities.</p>
              <Button
                variant="outline"
                className="mt-4 border-[#272153] text-[#272153] bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setFilteredUniversities(universities)
                }}
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((university) => (
                <Link key={university.id} href={`/universities/${university.slug}`} className="group">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-[#272153]/50 cursor-pointer overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#272153] text-white px-3 py-1 text-xs rounded-bl-lg">
                      Click to View Details
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-24 w-24 flex items-center justify-center p-2 mb-4 bg-white rounded-full shadow-sm group-hover:shadow-md">
                          <img
                            src={university.logo || "/placeholder.svg"}
                            alt={`${university.name} Logo`}
                            className="max-h-full max-w-full"
                          />
                        </div>
                        <h2 className="text-xl font-bold text-[#272153] mb-2 group-hover:underline">
                          {university.name}
                        </h2>
                        <div className="text-sm text-gray-500 mb-4">
                          <p>
                            {university.location} • {university.type}
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                          {university.programs.slice(0, 3).map((program, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700"
                            >
                              {program}
                            </span>
                          ))}
                          {university.programs.length > 3 && (
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                              +{university.programs.length - 3} more
                            </span>
                          )}
                        </div>
                        {university.hasEnglishCourses && (
                          <span className="mt-3 inline-block bg-green-100 rounded-full px-3 py-1 text-xs font-medium text-green-700">
                            English Courses Available
                          </span>
                        )}
                        <div className="mt-4 w-full">
                          <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-700 rounded-full">
                            View Programs & Fees <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 border-[#272153]/20">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <img src="/images/yaz-logo.jpeg" alt="Yaz Education Logo" className="w-8 h-8 object-contain" />
            <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
              © 2024 Yaz Education. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-[#272153]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#272153]">
              Terms of Service
            </Link>
            <Link href="/ar" className="text-sm font-medium hover:text-[#272153]">
              العربية
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
