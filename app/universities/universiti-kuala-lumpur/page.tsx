"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, GraduationCap, MapPin, School, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const universityData = {
  id: "unikl",
  name: "Universiti Kuala Lumpur (UniKL)",
  logo: "/images/universities/unikl-logo.png",
  location: "Kuala Lumpur, Malaysia (12 campuses nationwide)",
  type: "Government-Linked University (GLU)",
  established: "2002",
  website: "https://www.unikl.edu.my",
  description:
    "Universiti Kuala Lumpur (UniKL) is Malaysia's premier government-linked technical university specializing in Higher Technical and Vocational Education and Training (HTVET). With 12 specialized campuses across Malaysia, UniKL offers over 150 programs from Foundation to PhD levels, emphasizing hands-on learning, industry linkages, and innovation. With over 25,000 students and more than 91,000 graduates from 70+ countries, UniKL is recognized for its industry-driven curriculum and practical approach to education.",
  campuses: [
    {
      name: "MIIT - Malaysian Institute of Information Technology",
      location: "Kuala Lumpur",
      specialization: "Information Technology, Cybersecurity, IoT, Multimedia",
    },
    {
      name: "Business School (UBIS)",
      location: "Kuala Lumpur",
      specialization: "Accounting, Entrepreneurship, Marketing, Islamic Finance",
    },
    {
      name: "MIDI - Malaysian Institute of Industrial Design",
      location: "Cheras",
      specialization: "Industrial Design, Fashion, Railway Systems",
    },
    {
      name: "MFI - Malaysian France Institute",
      location: "Bangi",
      specialization: "Mechanical, Manufacturing, Robotics, Water Technology",
    },
    {
      name: "MIMET - Malaysian Institute of Marine Engineering Technology",
      location: "Lumut",
      specialization: "Marine & Offshore Engineering",
    },
    {
      name: "MITEC - Malaysian Institute of Industrial Technology",
      location: "Pasir Gudang",
      specialization: "Industrial Technology, Petroleum, Logistics",
    },
    {
      name: "MIAT - Malaysian Institute of Aviation Technology",
      location: "Sepang",
      specialization: "Aviation and Aircraft Maintenance",
    },
    {
      name: "MICET - Malaysian Institute of Chemical & Bioengineering Technology",
      location: "Melaka",
      specialization: "Food, Chemical & Bioengineering",
    },
    {
      name: "MESTECH - Malaysian Spanish Institute",
      location: "Kajang",
      specialization: "Biomedical and Health Sciences",
    },
    {
      name: "RCMP - Royal College of Medicine Perak",
      location: "Ipoh",
      specialization: "Medicine, Pharmacy, Psychology, Physiotherapy",
    },
    {
      name: "MSI - Malaysian Swiss Institute",
      location: "Kulim",
      specialization: "Mechatronics, Automotive, Manufacturing",
    },
    {
      name: "BMI - British Malaysian Institute",
      location: "Gombak",
      specialization: "Electrical, Electronics, and Medical Electronics",
    },
  ],
  programs: [
    {
      category: "Information Technology & Computing (MIIT)",
      degrees: [
        {
          name: "Bachelor of Computer Engineering (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 78,000 (Total) / ~RM 19,500 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Information Technology (Hons) in Software Engineering",
          duration: "3 Years",
          tuitionFee: "RM 58,500 (Total) / ~RM 19,500 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Information Technology (Hons) in Cybersecurity",
          duration: "3 Years",
          tuitionFee: "RM 58,500 (Total) / ~RM 19,500 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Computer Science (Hons) in Data Analytics",
          duration: "3 Years",
          tuitionFee: "RM 58,500 (Total) / ~RM 19,500 per year",
          intake: "January, April, July, October",
        },
      ],
    },
    {
      category: "Business & Management (UBIS)",
      degrees: [
        {
          name: "Bachelor of Business Administration (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 46,800 (Total) / ~RM 15,600 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Accounting (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 46,800 (Total) / ~RM 15,600 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Entrepreneurship (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 46,800 (Total) / ~RM 15,600 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Islamic Finance (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 46,800 (Total) / ~RM 15,600 per year",
          intake: "January, April, July, October",
        },
      ],
    },
    {
      category: "Medicine & Health Sciences (RCMP)",
      degrees: [
        {
          name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
          duration: "5 Years",
          tuitionFee: "RM 360,000 (Total) / ~RM 72,000 per year",
          intake: "January, July",
        },
        {
          name: "Bachelor of Pharmacy (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 120,000 (Total) / ~RM 30,000 per year",
          intake: "January, July",
        },
        {
          name: "Bachelor of Psychology (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 75,000 (Total) / ~RM 25,000 per year",
          intake: "January, July",
        },
        {
          name: "Bachelor of Physiotherapy (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 100,000 (Total) / ~RM 25,000 per year",
          intake: "January, July",
        },
      ],
    },
    {
      category: "Engineering & Technology",
      degrees: [
        {
          name: "Bachelor of Engineering (Hons) in Mechanical",
          duration: "4 Years",
          tuitionFee: "RM 80,000 (Total) / ~RM 20,000 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Engineering (Hons) in Electrical & Electronics",
          duration: "4 Years",
          tuitionFee: "RM 80,000 (Total) / ~RM 20,000 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Engineering (Hons) in Manufacturing",
          duration: "4 Years",
          tuitionFee: "RM 80,000 (Total) / ~RM 20,000 per year",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Engineering (Hons) in Marine",
          duration: "4 Years",
          tuitionFee: "RM 80,000 (Total) / ~RM 20,000 per year",
          intake: "January, July",
        },
      ],
    },
    {
      category: "Aviation & Aerospace (MIAT)",
      degrees: [
        {
          name: "Bachelor of Engineering (Hons) in Aircraft Maintenance",
          duration: "4 Years",
          tuitionFee: "RM 100,000 (Total) / ~RM 25,000 per year",
          intake: "January, July",
        },
        {
          name: "Diploma in Aircraft Maintenance Engineering",
          duration: "3 Years",
          tuitionFee: "RM 60,000 (Total) / ~RM 20,000 per year",
          intake: "January, July",
        },
      ],
    },
  ],
  admissionRequirements: {
    foundation: [
      "11 years of schooling (O-Levels or equivalent)",
      "Minimum Grade C in 5 subjects including Mathematics and English",
      "Valid passport",
    ],
    diploma: [
      "11 years of schooling (O-Levels or equivalent)",
      "Minimum Grade C in Mathematics, English, and one Science/Technical subject",
      "IELTS 5.0 or equivalent",
      "Valid passport",
    ],
    bachelor: [
      "12 years of schooling (A-Levels, STPM, or equivalent)",
      "Minimum Grade C (60%) in 2 relevant subjects",
      "IELTS 5.0-6.0 depending on program",
      "Valid passport",
    ],
    postgraduate: [
      "Master's: Bachelor's degree with minimum CGPA 2.50",
      "PhD: Master's degree or equivalent",
      "IELTS 6.0 or equivalent",
      "Valid passport",
    ],
    documents: [
      "Completed application form",
      "Certified copies of academic certificates and transcripts",
      "Copy of passport (all pages)",
      "Passport-sized photographs (white background)",
      "English proficiency test results",
      "Medical check-up report",
      "Financial guarantee letter (if applicable)",
    ],
  },
  fees: {
    initial: [
      { item: "Visa Application (EMGS)", amount: "RM 2,200" },
      { item: "International Student Fee", amount: "RM 1,000" },
      { item: "Registration Fee", amount: "RM 2,040" },
      { item: "Total Estimated Initial Payment", amount: "RM 5,240 (~USD 1,165)" },
    ],
  },
  facilities: [
    "12 specialized campuses across Malaysia",
    "State-of-the-art laboratories and workshops",
    "Industry-standard equipment and tools",
    "Modern library and learning resource centers",
    "Student accommodation at selected campuses",
    "Sports and recreation facilities",
    "Student lounges and cafeterias",
    "Prayer rooms and meditation spaces",
    "Free campus Wi-Fi",
    "Student support services and counseling",
    "Career development center",
    "International student office",
  ],
  whyChoose: [
    "Government-Linked University (GLU) with strong national reputation",
    "Industry-driven curriculum aligned with market needs",
    "Hands-on approach with high percentage of practical work",
    "Embedded professional certifications in many programs",
    "Expert academic and industrial lecturers",
    "Strong alumni network of 91,000+ graduates from 70+ countries",
    "12 specialized campuses - 'One Institute, One Specialization'",
    "Medium of instruction: English",
    "50% scholarships available for eligible students",
    "Flexible intake periods (up to 4 intakes per year for some programs)",
    "Strong industry partnerships and internship opportunities",
    "International student support services",
  ],
}

export default function UniKLPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query) {
      setActiveTab("programs")
    }
  }

  const filteredPrograms = universityData.programs
    .map((category) => {
      if (!searchQuery) return category

      return {
        ...category,
        degrees: category.degrees.filter(
          (degree) =>
            degree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            degree.duration.toLowerCase().includes(searchQuery.toLowerCase()) ||
            degree.tuitionFee.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.category.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      }
    })
    .filter((category) => category.degrees.length > 0)

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
        <section className="w-full py-8 bg-gradient-to-br from-purple-100 via-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <Button asChild variant="outline" className="mb-4 bg-transparent">
              <Link href="/universities">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Universities
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-32 h-24 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                <img
                  src={universityData.logo || "/placeholder.svg"}
                  alt={`${universityData.name} Logo`}
                  className="max-h-full max-w-full"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#272153]">
                  {universityData.name}
                </h1>
                <div className="flex items-center text-gray-500 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{universityData.location}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-xs font-medium text-green-700">
                    {universityData.type}
                  </span>
                  <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-xs font-medium text-blue-700">
                    12 Specialized Campuses
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mb-8 bg-white p-2 rounded-full shadow-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search programs, campuses, specializations..."
                  className="pl-12 py-6 text-lg rounded-full border-none"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#272153] hover:bg-[#373163] rounded-full px-6 py-6">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 rounded-full p-1 bg-gray-100">
              <TabsTrigger
                value="overview"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="campuses"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Campuses
              </TabsTrigger>
              <TabsTrigger
                value="programs"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Programs & Fees
              </TabsTrigger>
              <TabsTrigger
                value="admission"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Admission
              </TabsTrigger>
              <TabsTrigger
                value="fees"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Initial Fees
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">About {universityData.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg mb-6">{universityData.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-[#272153]/5 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[#272153]">12</div>
                      <div className="text-sm text-gray-600 mt-1">Specialized Campuses</div>
                    </div>
                    <div className="bg-[#272153]/5 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[#272153]">25,000+</div>
                      <div className="text-sm text-gray-600 mt-1">Current Students</div>
                    </div>
                    <div className="bg-[#272153]/5 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[#272153]">150+</div>
                      <div className="text-sm text-gray-600 mt-1">Programs Offered</div>
                    </div>
                    <div className="bg-[#272153]/5 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[#272153]">91,000+</div>
                      <div className="text-sm text-gray-600 mt-1">Alumni Worldwide</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-[#272153] text-xl mb-3">University Information</h3>
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
                        <li className="flex items-start">
                          <span className="font-medium mr-2">Medium of Instruction:</span> English
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#272153] text-xl mb-3">Why Choose UniKL</h3>
                      <ul className="space-y-1 text-gray-700">
                        {universityData.whyChoose.slice(0, 6).map((reason, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 h-4 w-4 text-[#272153] mt-0.5">✓</div>
                            <span className="text-sm">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Campus Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {universityData.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                        <span className="text-sm">{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6 text-[#272153]" />
                    </div>
                    <CardTitle className="text-[#272153]">Specialized Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      12 specialized campuses each focusing on specific technical fields - "One Institute, One
                      Specialization" approach ensuring deep expertise.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-[#272153]" />
                    </div>
                    <CardTitle className="text-[#272153]">Hands-On Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Industry-driven curriculum with high emphasis on practical work, embedded professional
                      certifications, and real-world applications.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4">
                      <School className="h-6 w-6 text-[#272153]" />
                    </div>
                    <CardTitle className="text-[#272153]">Scholarships Available</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      50% scholarships available for eligible international students. Contact Yaz Education for
                      scholarship application assistance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="campuses" className="space-y-6">
              <h2 className="text-2xl font-bold text-[#272153] mb-4">
                UniKL's 12 Specialized Campuses Across Malaysia
              </h2>
              <p className="text-gray-600 mb-6">
                Each campus specializes in specific technical fields, following UniKL's "One Institute, One
                Specialization" philosophy to ensure focused expertise and industry relevance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {universityData.campuses.map((campus, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{campus.name}</CardTitle>
                      <CardDescription className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {campus.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        <span className="font-medium">Specializations:</span> {campus.specialization}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="programs" className="space-y-8">
              {filteredPrograms.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h2 className="text-xl font-medium text-gray-700">
                    No programs found matching your search criteria.
                  </h2>
                  <p className="mt-2 text-gray-500">Try adjusting your search terms or browse all programs.</p>
                  <Button
                    variant="outline"
                    className="mt-4 border-[#272153] text-[#272153] bg-transparent"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                filteredPrograms.map((category, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-[#272153] mb-4">{category.category}</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="py-3 px-4 text-left font-bold">Program</th>
                            <th className="py-3 px-4 text-left font-bold">Duration</th>
                            <th className="py-3 px-4 text-left font-bold">Tuition Fee</th>
                            <th className="py-3 px-4 text-left font-bold">Intake</th>
                            <th className="py-3 px-4 text-left font-bold">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.degrees.map((degree, degreeIndex) => (
                            <tr key={degreeIndex} className="border-b hover:bg-gray-50">
                              <td className="py-4 px-4 font-medium">{degree.name}</td>
                              <td className="py-4 px-4">{degree.duration}</td>
                              <td className="py-4 px-4 font-medium text-green-700">{degree.tuitionFee}</td>
                              <td className="py-4 px-4">{degree.intake}</td>
                              <td className="py-4 px-4">
                                <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 rounded-full">
                                  <Link href="/#contact">Inquire Now</Link>
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
              <div className="text-center mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#272153] mb-2">Multiple Intake Periods Available</h3>
                <p className="text-gray-700">
                  UniKL offers flexible intake periods throughout the year. Most programs have intakes in January,
                  April, July, and October, making it easier for international students to plan their studies.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="admission" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Admission Requirements for International Students</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#272153] mb-3">Foundation Programs</h3>
                    <ul className="space-y-2 text-gray-700">
                      {universityData.admissionRequirements.foundation.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 h-4 w-4 text-[#272153] mt-0.5">✓</div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#272153] mb-3">Diploma Programs</h3>
                    <ul className="space-y-2 text-gray-700">
                      {universityData.admissionRequirements.diploma.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 h-4 w-4 text-[#272153] mt-0.5">✓</div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#272153] mb-3">Bachelor's Degree Programs</h3>
                    <ul className="space-y-2 text-gray-700">
                      {universityData.admissionRequirements.bachelor.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 h-4 w-4 text-[#272153] mt-0.5">✓</div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#272153] mb-3">Postgraduate Programs</h3>
                    <ul className="space-y-2 text-gray-700">
                      {universityData.admissionRequirements.postgraduate.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 h-4 w-4 text-[#272153] mt-0.5">✓</div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    {universityData.admissionRequirements.documents.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 h-4 w-4 text-[#272153] mt-0.5">✓</div>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">7 Steps to Enroll at UniKL</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li className="font-medium">
                      Apply Online
                      <p className="font-normal text-sm text-gray-600 mt-1">
                        Submit your application through UniKL's online portal or via Yaz Education
                      </p>
                    </li>
                    <li className="font-medium">
                      Receive and Accept Offer
                      <p className="font-normal text-sm text-gray-600 mt-1">
                        Review your conditional offer letter and accept within the specified timeframe
                      </p>
                    </li>
                    <li className="font-medium">
                      Visa Processing via EMGS
                      <p className="font-normal text-sm text-gray-600 mt-1">
                        Complete visa application and submit documents through Education Malaysia Global Services (EMGS)
                      </p>
                    </li>
                    <li className="font-medium">
                      Pre-Arrival Briefing
                      <p className="font-normal text-sm text-gray-600 mt-1">
                        Attend online orientation about life in Malaysia and UniKL
                      </p>
                    </li>
                    <li className="font-medium">
                      Credit Transfer (if applicable)
                      <p className="font-normal text-sm text-gray-600 mt-1">
                        Submit previous academic credits for evaluation and potential transfer
                      </p>
                    </li>
                    <li className="font-medium">
                      Arrival at KLIA Terminals
                      <p className="font-normal text-sm text-gray-600 mt-1">
                        Airport pickup service available upon request
                      </p>
                    </li>
                    <li className="font-medium">
                      Registration & Orientation
                      <p className="font-normal text-sm text-gray-600 mt-1">
                        Complete registration formalities and attend campus orientation program
                      </p>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="bg-[#272153]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#272153] mb-4">How Yaz Education Can Help</h3>
                <p className="text-gray-700 mb-4">
                  Our expert consultants will guide you through every step of the UniKL application process:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Free consultation and program selection advice</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Document preparation and verification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Application submission and follow-up</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Visa guidance and EMGS support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Scholarship application assistance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Accommodation arrangements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Pre-departure orientation and arrival support</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 rounded-full">
                    <Link href="/#contact">Get Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fees" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Initial Fees for International Students</CardTitle>
                  <CardDescription>
                    These are the approximate initial fees required before starting your studies at UniKL
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-bold">Fee Item</th>
                          <th className="py-3 px-4 text-right font-bold">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {universityData.fees.initial.map((fee, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4">{fee.item}</td>
                            <td className={`py-3 px-4 text-right ${index === 3 ? "font-bold text-lg" : ""}`}>
                              {fee.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-bold text-yellow-800 mb-2">Important Notes:</h3>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Exchange rate: 1 USD ≈ RM 4.50 (subject to change)</li>
                      <li>• Tuition fees vary by program and campus</li>
                      <li>• Subsequent fees depend on program duration and accommodation choices</li>
                      <li>• 50% scholarships available for eligible students</li>
                      <li>• Contact Yaz Education for detailed fee breakdown specific to your chosen program</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tuition Fee Range by Program Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-900 mb-2">Foundation Programs</h3>
                      <p className="text-blue-800">RM 10,000 - RM 15,000 per year</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-bold text-green-900 mb-2">Diploma Programs</h3>
                      <p className="text-green-800">RM 15,000 - RM 20,000 per year</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-bold text-purple-900 mb-2">Bachelor's Degree</h3>
                      <p className="text-purple-800">RM 15,600 - RM 72,000 per year</p>
                      <p className="text-xs text-purple-700 mt-1">(varies by field of study)</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-bold text-orange-900 mb-2">Postgraduate</h3>
                      <p className="text-orange-800">Contact for details</p>
                      <p className="text-xs text-orange-700 mt-1">(Master's & PhD programs)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 rounded-full">
                  <Link href="/#contact">Contact for Detailed Fee Information</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 border-[#272153]/20">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <img src="/images/yaz-logo.jpeg" alt="Yaz Education Logo" className="w-8 h-8 object-contain" />
            <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
              © 2025 Yaz Education. All rights reserved.
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
