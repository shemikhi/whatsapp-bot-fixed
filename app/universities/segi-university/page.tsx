"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, GraduationCap, MapPin, School } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UniversitySearch } from "@/components/university-search"

// Sample university data - in a real app, this would come from a database or API
const universityData = {
  id: "segi",
  name: "SEGi University",
  logo: "/images/universities/segi-university.png",
  location: "Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia",
  type: "Private",
  established: "1977",
  website: "https://www.segi.edu.my",
  description:
    "SEGi University is one of Malaysia's leading private higher education institutions, offering a wide range of programs from foundation to postgraduate levels. With over 40 years of excellence, SEGi is known for its quality education, industry partnerships, and global recognition.",
  programs: [
    {
      category: "Medicine & Health Sciences",
      degrees: [
        {
          name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
          duration: "5 Years",
          tuitionFee: "RM 388,800",
          intake: "April, September",
        },
        {
          name: "Bachelor of Dental Surgery (BDS)",
          duration: "5 Years",
          tuitionFee: "RM 398,000",
          intake: "April, September",
        },
        {
          name: "Bachelor of Pharmacy (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 108,000",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Biomedical Science (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 79,800",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Nursing (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 83,520",
          intake: "January, May, September",
        },
      ],
    },
    {
      category: "Business & Accounting",
      degrees: [
        {
          name: "Bachelor of Business Administration (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 61,470",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Accounting (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 61,470",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Finance (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 61,470",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Marketing (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 61,470",
          intake: "January, May, September",
        },
      ],
    },
    {
      category: "Engineering & Technology",
      degrees: [
        {
          name: "Bachelor of Engineering (Hons) in Mechanical Engineering",
          duration: "4 Years",
          tuitionFee: "RM 83,520",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Engineering (Hons) in Civil Engineering",
          duration: "4 Years",
          tuitionFee: "RM 83,520",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Engineering (Hons) in Electrical & Electronic Engineering",
          duration: "4 Years",
          tuitionFee: "RM 83,520",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Computer Science (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 68,040",
          intake: "January, May, September",
        },
      ],
    },
    {
      category: "Creative Arts & Design",
      degrees: [
        {
          name: "Bachelor of Arts (Hons) in Graphic Design",
          duration: "3 Years",
          tuitionFee: "RM 68,040",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Arts (Hons) in Interior Architecture",
          duration: "3 Years",
          tuitionFee: "RM 68,040",
          intake: "January, May, September",
        },
        {
          name: "Bachelor of Arts (Hons) in Creative Multimedia",
          duration: "3 Years",
          tuitionFee: "RM 68,040",
          intake: "January, May, September",
        },
      ],
    },
  ],
  englishCourses: [
    {
      name: "Intensive English Programme",
      duration: "3 Months per level",
      fee: "RM 2,800 per level",
      description:
        "Designed to improve English language proficiency for students who need to meet the English language requirements for academic programs.",
      levels: "Level 1 to Level 4",
    },
    {
      name: "IELTS Preparation Course",
      duration: "2 Months",
      fee: "RM 3,200",
      description:
        "Specifically designed to prepare students for the IELTS examination, focusing on test-taking strategies and language skills development.",
      levels: "Intermediate to Advanced",
    },
    {
      name: "English for Academic Purposes",
      duration: "3 Months",
      fee: "RM 3,000",
      description:
        "Focuses on academic English skills needed for university study, including academic writing, presentation skills, and research methods.",
      levels: "Upper Intermediate to Advanced",
    },
  ],
  admissionRequirements: {
    international: [
      "Completed secondary education equivalent to Malaysian STPM/A-Levels",
      "Meet specific program entry requirements",
      "English proficiency (IELTS 5.5-6.5 or equivalent, depending on the program)",
      "Valid passport with at least 1 year validity",
      "Health declaration and medical check-up",
    ],
    documents: [
      "Completed application form",
      "Certified copies of academic certificates and transcripts",
      "Copy of passport (international students)",
      "Passport-sized photographs",
      "English proficiency test results (if applicable)",
      "Application fee payment receipt",
    ],
  },
  facilities: [
    "Modern lecture halls and classrooms",
    "State-of-the-art laboratories",
    "Library and resource center",
    "On-campus accommodation",
    "Sports complex and swimming pool",
    "Student center and cafeteria",
    "Healthcare center",
    "Prayer rooms",
    "Free campus-wide Wi-Fi",
    "Career center",
  ],
}

export default function UniversityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // If search is not empty, switch to programs tab which is most likely what they're searching for
    if (query) {
      setActiveTab("programs")
    }
  }

  // Filter programs based on search query
  const filteredPrograms = universityData.programs
    .map((category) => {
      if (!searchQuery) return category

      return {
        ...category,
        degrees: category.degrees.filter(
          (degree) =>
            degree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            degree.duration.toLowerCase().includes(searchQuery.toLowerCase()) ||
            degree.tuitionFee.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      }
    })
    .filter((category) => category.degrees.length > 0)

  // Filter English courses based on search query
  const filteredEnglishCourses = !searchQuery
    ? universityData.englishCourses
    : universityData.englishCourses.filter(
        (course) =>
          course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.duration.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.fee.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.levels.toLowerCase().includes(searchQuery.toLowerCase()),
      )

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
      <main className="flex-1 container py-12">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link href="/universities">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Universities
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="w-24 h-24 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
              <img
                src={universityData.logo || "/placeholder.svg"}
                alt={`${universityData.name} Logo`}
                className="max-h-full max-w-full"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#272153]">{universityData.name}</h1>
              <div className="flex items-center text-gray-500 mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{universityData.location}</span>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mb-8">
            <UniversitySearch onSearch={handleSearch} placeholder="Search programs, fees, English courses..." />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs & Fees</TabsTrigger>
            <TabsTrigger value="english">English Courses</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {universityData.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{universityData.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h3 className="font-medium text-[#272153] mb-2">University Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">Type:</span> {universityData.type}
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">Established:</span> {universityData.established}
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">Website:</span>{" "}
                        <a
                          href={universityData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#272153] hover:underline"
                        >
                          {universityData.website.replace("https://www.", "")}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#272153] mb-2">Facilities</h3>
                    <ul className="space-y-1 text-gray-700">
                      {universityData.facilities.map((facility, index) => (
                        <li key={index} className="flex items-center">
                          <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                          <span>{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <GraduationCap className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">Programs Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {universityData.programs.reduce((total, category) => total + category.degrees.length, 0)}+ academic
                    programs across multiple disciplines including Medicine, Business, Engineering, and Creative Arts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <BookOpen className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">English Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Comprehensive English language programs including Intensive English Programme, IELTS Preparation,
                    and English for Academic Purposes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <School className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">Admission Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Yaz Education provides comprehensive support for admission to {universityData.name}, including
                    application assistance and visa guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="programs" className="space-y-8">
            {filteredPrograms.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium text-gray-500">No programs found matching your search criteria.</h2>
                <p className="mt-2 text-gray-400">Try adjusting your search terms or browse all programs.</p>
              </div>
            ) : (
              filteredPrograms.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-[#272153] mb-4">{category.category}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left">Program</th>
                          <th className="py-3 px-4 text-left">Duration</th>
                          <th className="py-3 px-4 text-left">Tuition Fee</th>
                          <th className="py-3 px-4 text-left">Intake</th>
                          <th className="py-3 px-4 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.degrees.map((degree, degreeIndex) => (
                          <tr key={degreeIndex} className="border-b">
                            <td className="py-3 px-4">{degree.name}</td>
                            <td className="py-3 px-4">{degree.duration}</td>
                            <td className="py-3 px-4">{degree.tuitionFee}</td>
                            <td className="py-3 px-4">{degree.intake}</td>
                            <td className="py-3 px-4">
                              <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                                <Link href="/#contact">Inquire</Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="english" className="space-y-6">
            {filteredEnglishCourses.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium text-gray-500">
                  No English courses found matching your search criteria.
                </h2>
                <p className="mt-2 text-gray-400">Try adjusting your search terms or browse all courses.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#272153] mb-4">English Language Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredEnglishCourses.map((course, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{course.name}</CardTitle>
                        <CardDescription>
                          {course.duration} | {course.fee}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{course.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">Levels: {course.levels}</span>
                          <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                            <Link href="/#contact">Inquire</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="admission" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admission Requirements for International Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {universityData.admissionRequirements.international.map((requirement, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {universityData.admissionRequirements.documents.map((document, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                      <span>{document}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Submit completed application form with all required documents</li>
                  <li>Pay application fee</li>
                  <li>Application review by the university (2-4 weeks)</li>
                  <li>Receive conditional offer letter</li>
                  <li>Pay tuition fee deposit to secure your place</li>
                  <li>Receive official offer letter and visa approval letter</li>
                  <li>Apply for student visa</li>
                  <li>Arrive in Malaysia and complete registration at the university</li>
                </ol>
                <div className="mt-6">
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/#contact">Get Application Assistance</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
