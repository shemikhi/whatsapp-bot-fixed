"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, MapPin, School, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample university data - in a real app, this would come from a database or API
const universityData = {
  id: "cyberjaya",
  name: "University of Cyberjaya",
  logo: "/images/universities/cyberjaya-logo.png",
  location: "Persiaran Multimedia, 63000 Cyberjaya, Selangor, Malaysia",
  type: "Private",
  established: "2005",
  website: "https://cyberjaya.edu.my",
  description:
    "University of Cyberjaya is a top-tier Malaysian university known for its excellence in healthcare education, particularly in medicine, pharmacy, and psychology. Located in the heart of Malaysia's Silicon Valley, the university combines cutting-edge technology with comprehensive academic programs.",
  administrativeFees: {
    processingFee: "RM 1,500",
    visaFee: "RM 2,200",
    registrationFee: "RM 2,000",
    initialPayment: "RM 3,700",
    mbbsInitialPayment: "RM 14,000",
  },
  englishPrograms: [
    {
      name: "English Enhancement Program (EEP)",
      level: "General",
      duration: "3 Months",
      tuitionFee: "RM 2,500",
      description:
        "Designed to improve general English proficiency for students who need to enhance their language skills.",
    },
    {
      name: "IELTS Preparatory Program (IPP) - Level 1",
      level: "Level 1",
      duration: "3 Months",
      tuitionFee: "RM 2,500",
      description:
        "Prepares students for the IELTS examination. Examination fee is paid separately to the external body.",
    },
    {
      name: "IELTS Preparatory Program (IPP) - Level 2",
      level: "Level 2",
      duration: "3 Months",
      tuitionFee: "RM 2,500",
      description: "Intermediate level IELTS preparation focusing on all four language skills.",
    },
    {
      name: "IELTS Preparatory Program (IPP) - Level 3",
      level: "Level 3",
      duration: "3 Months",
      tuitionFee: "RM 2,500",
      description: "Advanced IELTS preparation for higher band scores.",
    },
    {
      name: "IELTS Preparatory Program (IPP) - Level 4",
      level: "Level 4",
      duration: "3 Months",
      tuitionFee: "RM 2,500",
      description: "Expert level IELTS preparation for academic and professional purposes.",
    },
  ],
  foundationPrograms: [
    {
      name: "Foundation in Science leading to Medicine & Pharmacy",
      duration: "1 Year",
      administrativeFee: "RM 3,000",
      resourceFee: "RM 2,400",
      tuitionFee: "RM 25,000",
      totalFee: "RM 30,400",
    },
    {
      name: "Foundation in Allied Science",
      duration: "1 Year",
      administrativeFee: "RM 3,000",
      resourceFee: "RM 2,400",
      tuitionFee: "RM 25,000",
      totalFee: "RM 30,400",
    },
    {
      name: "Foundation in Arts",
      duration: "1 Year",
      administrativeFee: "RM 3,000",
      resourceFee: "RM 2,400",
      tuitionFee: "RM 18,000",
      totalFee: "RM 23,400",
    },
  ],
  diplomaPrograms: [
    {
      name: "Diploma in Business Administration",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 50,000",
      totalFee: "RM 64,000",
    },
    {
      name: "Diploma in Accounting",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 50,000",
      totalFee: "RM 64,000",
    },
    {
      name: "Diploma in Information Technology",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 5,400",
      tuitionFee: "RM 55,000",
      totalFee: "RM 68,400",
    },
    {
      name: "Diploma in Psychology",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 55,000",
      totalFee: "RM 69,000",
    },
    {
      name: "Diploma in Occupational Safety & Health",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 55,000",
      totalFee: "RM 69,000",
    },
    {
      name: "Diploma in Cosmetics",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 55,000",
      totalFee: "RM 69,000",
    },
    {
      name: "Diploma in Graphic Design",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,200",
      tuitionFee: "RM 45,000",
      totalFee: "RM 59,200",
    },
    {
      name: "Diploma in 3D Animation",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,200",
      tuitionFee: "RM 45,000",
      totalFee: "RM 59,200",
    },
    {
      name: "Diploma in Digital Creative Content",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,200",
      tuitionFee: "RM 45,000",
      totalFee: "RM 59,200",
    },
    {
      name: "Diploma in Early Childhood Education",
      duration: "2.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 55,000",
      totalFee: "RM 69,000",
    },
    {
      name: "Diploma in Medical and Health Science",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 7,200",
      tuitionFee: "RM 65,000",
      totalFee: "RM 80,200",
    },
    {
      name: "Diploma in Nursing",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 7,200",
      tuitionFee: "RM 67,400",
      totalFee: "RM 82,600",
    },
  ],
  bachelorPrograms: [
    {
      name: "Bachelor of Business Administration (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 75,000",
      totalFee: "RM 92,000",
    },
    {
      name: "Bachelor of International Business Management (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 75,000",
      totalFee: "RM 92,000",
    },
    {
      name: "Bachelor of Occupational Safety & Health (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 90,000",
      totalFee: "RM 107,000",
    },
    {
      name: "Bachelor of Psychology (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 76,500",
      totalFee: "RM 93,500",
    },
    {
      name: "Bachelor of Information Technology (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 76,500",
      totalFee: "RM 93,500",
    },
    {
      name: "Bachelor of Arts in Graphic Design (Advertising) (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 85,000",
      totalFee: "RM 102,000",
    },
    {
      name: "Bachelor of Multimedia in 3D Animation (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 85,000",
      totalFee: "RM 102,000",
    },
    {
      name: "Bachelor in Creative Multimedia (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 85,000",
      totalFee: "RM 102,000",
    },
    {
      name: "Bachelor of Education in Early Childhood Education (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 76,500",
      totalFee: "RM 93,500",
    },
    {
      name: "Bachelor Of Education in Teaching English as A Second Language (Hons)",
      duration: "3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 76,500",
      totalFee: "RM 93,500",
    },
    {
      name: "Bachelor of Accounting and Finance (Hons)",
      duration: "3.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 10,250",
      tuitionFee: "RM 76,500",
      totalFee: "RM 94,750",
    },
    {
      name: "Bachelor of Biomedical Engineering Technology (Hons)",
      duration: "4 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 12,000",
      tuitionFee: "RM 84,000",
      totalFee: "RM 104,000",
    },
    {
      name: "Bachelor of Dietetics (Hons)",
      duration: "4 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 12,000",
      tuitionFee: "RM 165,000",
      totalFee: "RM 185,000",
    },
    {
      name: "Bachelor of Nursing (Hons)",
      duration: "4 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 12,000",
      tuitionFee: "RM 100,000",
      totalFee: "RM 120,000",
    },
    {
      name: "Bachelor of Physiotherapy (Hons)",
      duration: "4 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 12,000",
      tuitionFee: "RM 120,000",
      totalFee: "RM 140,000",
    },
    {
      name: "Bachelor of Pharmacy (Hons)",
      duration: "4 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 12,000",
      tuitionFee: "RM 150,000",
      totalFee: "RM 170,000",
    },
    {
      name: "Bachelor of Homeopathic Medical Science (Hons)",
      duration: "5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 15,000",
      tuitionFee: "RM 76,500",
      totalFee: "RM 99,500",
    },
    {
      name: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
      duration: "5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 15,000",
      tuitionFee: "RM 450,000",
      totalFee: "RM 473,000",
    },
  ],
  postgraduatePrograms: [
    {
      name: "Master of Clinical Pharmacy (By Coursework)",
      duration: "1 Year",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 3,000",
      tuitionFee: "RM 45,000",
      totalFee: "RM 56,000",
    },
    {
      name: "Master of Science in Public Health (Global Health)",
      duration: "1 Year",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 3,000",
      tuitionFee: "RM 50,000",
      totalFee: "RM 61,000",
    },
    {
      name: "Master of Business Administration (MBA)",
      duration: "1 Year",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 3,000",
      tuitionFee: "RM 35,000",
      totalFee: "RM 46,000",
    },
    {
      name: "Master of Business Administration (MBA - ODL)",
      duration: "1 Year",
      administrativeFee: "RM 5,000",
      resourceFee: "RM 1,800",
      tuitionFee: "RM 35,000",
      totalFee: "RM 41,800",
    },
    {
      name: "Master of Business Data Science",
      duration: "1 Year",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 3,000",
      tuitionFee: "RM 45,000",
      totalFee: "RM 56,000",
    },
    {
      name: "Master in Islamic Finance",
      duration: "1 Year",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 3,000",
      tuitionFee: "RM 45,000",
      totalFee: "RM 56,000",
    },
    {
      name: "Master of Physiotherapy",
      duration: "1.5 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 4,500",
      tuitionFee: "RM 35,000",
      totalFee: "RM 47,500",
    },
    {
      name: "Master of Clinical Psychology",
      duration: "23 Months",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 5,750",
      tuitionFee: "RM 82,000",
      totalFee: "RM 95,750",
    },
    {
      name: "Master of Science in Occupational Safety and Health Management",
      duration: "2 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 50,000",
      totalFee: "RM 64,000",
    },
    {
      name: "Master of Pharmaceutical Sciences (By Research)",
      duration: "Min 2 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 32,500",
      totalFee: "RM 46,500",
    },
    {
      name: "Master of Science (By Research)",
      duration: "Min 2 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 35,000",
      totalFee: "RM 49,000",
    },
    {
      name: "Master of Medical Sciences (By Research)",
      duration: "Min 2 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 27,500",
      totalFee: "RM 41,500",
    },
    {
      name: "Doctor of Pharmacy (PharmD)",
      duration: "2 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 6,000",
      tuitionFee: "RM 52,500",
      totalFee: "RM 66,500",
    },
    {
      name: "Doctor of Philosophy (PhD)",
      duration: "Min 3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 37,500",
      totalFee: "RM 54,500",
    },
    {
      name: "Doctor of Philosophy (PhD) in Medical Sciences",
      duration: "Min 3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 35,000",
      totalFee: "RM 52,000",
    },
    {
      name: "Doctor of Philosophy (PhD) in Pharmaceutical Sciences",
      duration: "Min 3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 52,500",
      totalFee: "RM 69,500",
    },
    {
      name: "Doctor of Philosophy (PhD) in Management",
      duration: "Min 3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 40,000",
      totalFee: "RM 57,000",
    },
    {
      name: "Doctor of Business Administration",
      duration: "Min 3 Years",
      administrativeFee: "RM 8,000",
      resourceFee: "RM 9,000",
      tuitionFee: "RM 50,000",
      totalFee: "RM 67,000",
    },
  ],
  bankingDetails: {
    beneficiaryName: "UOC SDN. BHD.",
    beneficiaryBank: "Malayan Banking Berhad",
    accountNo: "5686-0302-8978",
    swiftCode: "MBBEMYKL",
    bankAddress:
      "No. P1-13, Shaftsbury Square, Lot No. 2350 Cyber 6, Persiaran Multimedia, 63000, Cyberjaya, Selangor, Malaysia.",
  },
  contactDetails: {
    department: "International Student Recruitment Department",
    phone: "+603 8313 7000",
    email: "isr@cyberjaya.edu.my",
  },
  programs: [
    {
      category: "Medicine & Health Sciences",
      degrees: [
        {
          name: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
          duration: "5 Years",
          tuitionFee: "RM 450,000",
          intake: "January, July",
        },
        {
          name: "Bachelor of Pharmacy (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 150,000",
          intake: "January, July",
        },
        {
          name: "Bachelor of Physiotherapy (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 120,000",
          intake: "January, July",
        },
        {
          name: "Bachelor of Dietetics (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 165,000",
          intake: "January, July",
        },
        {
          name: "Bachelor of Nursing (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 100,000",
          intake: "January, July",
        },
      ],
    },
    {
      category: "Business & Management",
      degrees: [
        {
          name: "Bachelor of Business Administration (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 75,000",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of International Business Management (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 75,000",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Accounting and Finance (Hons)",
          duration: "3.5 Years",
          tuitionFee: "RM 76,500",
          intake: "January, April, July, October",
        },
      ],
    },
    {
      category: "Psychology & Education",
      degrees: [
        {
          name: "Bachelor of Psychology (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 76,500",
          intake: "January, July",
        },
        {
          name: "Bachelor of Education in Early Childhood Education (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 76,500",
          intake: "January, July",
        },
        {
          name: "Bachelor Of Education in Teaching English as A Second Language (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 76,500",
          intake: "January, July",
        },
      ],
    },
    {
      category: "Engineering & Technology",
      degrees: [
        {
          name: "Bachelor of Information Technology (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 76,500",
          intake: "January, April, July, October",
        },
        {
          name: "Bachelor of Biomedical Engineering Technology (Hons)",
          duration: "4 Years",
          tuitionFee: "RM 84,000",
          intake: "January, July",
        },
        {
          name: "Bachelor of Occupational Safety & Health (Hons)",
          duration: "3 Years",
          tuitionFee: "RM 90,000",
          intake: "January, July",
        },
      ],
    },
  ],
  englishCourses: [
    {
      name: "English Enhancement Program (EEP)",
      duration: "3 Months",
      fee: "RM 2,500",
      description:
        "Designed to improve general English proficiency for students who need to enhance their language skills before beginning academic programs.",
      levels: "Basic to Intermediate",
    },
    {
      name: "IELTS Preparatory Program (IPP)",
      duration: "3 Months per level",
      fee: "RM 2,500 per level",
      description:
        "Specifically designed to prepare students for the IELTS examination, focusing on all four language skills: reading, writing, listening, and speaking.",
      levels: "Level 1 to Level 4",
    },
  ],
  admissionRequirements: {
    international: [
      "Completed secondary education equivalent to Malaysian STPM/A-Levels",
      "Meet specific program entry requirements",
      "English proficiency (IELTS 6.0 or equivalent for most programs)",
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
    "Well-equipped laboratories",
    "Library and resource center",
    "Student accommodation",
    "Sports facilities",
    "Cafeteria and dining options",
    "Student lounge and recreation areas",
    "Prayer rooms",
    "Free campus-wide Wi-Fi",
  ],
}

export default function UniversityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    // If search is not empty, switch to programs tab which is most likely what they're searching for
    if (query) {
      setActiveTab("fees")
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
      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <section className="w-full py-8 bg-gradient-to-br from-purple-100 via-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <Button asChild variant="outline" className="mb-4 bg-transparent">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#272153]">
                  {universityData.name}
                </h1>
                <div className="flex items-center text-gray-500 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{universityData.location}</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-3xl mb-8 bg-white p-2 rounded-full shadow-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search programs, fees, English courses..."
                  className="pl-12 py-6 text-lg rounded-full border-none"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#272153] hover:bg-[#373163] rounded-full px-6 py-6">
                  Search
                </Button>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center">
                Try searching for: Medicine, Business, IELTS, RM 75,000
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 rounded-full p-1 bg-gray-100">
              <TabsTrigger
                value="overview"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="programs"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Programs
              </TabsTrigger>
              <TabsTrigger
                value="fees"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Fees
              </TabsTrigger>
              <TabsTrigger
                value="english"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                English
              </TabsTrigger>
              <TabsTrigger
                value="admission"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Admission
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="text-base py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Contact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">About {universityData.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">{universityData.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h3 className="font-medium text-[#272153] text-xl mb-2">University Information</h3>
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
                            {universityData.website.replace("https://", "")}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#272153] text-xl mb-2">Facilities</h3>
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
                      {universityData.programs.reduce((total, category) => total + category.degrees.length, 0)}+
                      academic programs across multiple disciplines including Medicine, Business, Engineering, and more.
                    </p>
                    <Button
                      onClick={() => setActiveTab("programs")}
                      variant="link"
                      className="mt-2 p-0 text-[#272153] hover:underline"
                    >
                      View All Programs <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
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
                      Comprehensive English language programs including English Enhancement Program (EEP) and IELTS
                      Preparatory Program (IPP).
                    </p>
                    <Button
                      onClick={() => setActiveTab("english")}
                      variant="link"
                      className="mt-2 p-0 text-[#272153] hover:underline"
                    >
                      View English Courses <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
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
                    <Button
                      onClick={() => setActiveTab("admission")}
                      variant="link"
                      className="mt-2 p-0 text-[#272153] hover:underline"
                    >
                      View Admission Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
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
                          </tr>
                        </thead>
                        <tbody>
                          {category.degrees.map((degree, degreeIndex) => (
                            <tr key={degreeIndex} className="border-b">
                              <td className="py-3 px-4">{degree.name}</td>
                              <td className="py-3 px-4">{degree.duration}</td>
                              <td className="py-3 px-4 font-medium">{degree.tuitionFee}</td>
                              <td className="py-3 px-4">{degree.intake}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              )}
            </TabsContent>

            <TabsContent value="fees" className="space-y-8">
              {/* Administrative Fees */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">Administrative Fees</CardTitle>
                  <CardDescription>Required fees for all international students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-bold">Fee Type</th>
                          <th className="py-3 px-4 text-left font-bold">Amount</th>
                          <th className="py-3 px-4 text-left font-bold">Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">International Student Processing Fee</td>
                          <td className="py-3 px-4 font-medium">{universityData.administrativeFees.processingFee}</td>
                          <td className="py-3 px-4 text-red-600">Non-refundable</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Visa Application Fee (EMGS)</td>
                          <td className="py-3 px-4 font-medium">{universityData.administrativeFees.visaFee}</td>
                          <td className="py-3 px-4">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Registration Fee</td>
                          <td className="py-3 px-4 font-medium">{universityData.administrativeFees.registrationFee}</td>
                          <td className="py-3 px-4 text-red-600">Non-refundable</td>
                        </tr>
                        <tr className="border-b bg-yellow-50">
                          <td className="py-3 px-4 font-bold">Initial Payment (Most Programs)</td>
                          <td className="py-3 px-4 font-bold text-lg text-[#272153]">
                            {universityData.administrativeFees.initialPayment}
                          </td>
                          <td className="py-3 px-4 text-sm">Processing + Visa Fees</td>
                        </tr>
                        <tr className="border-b bg-yellow-50">
                          <td className="py-3 px-4 font-bold">Initial Payment (MBBS Program)</td>
                          <td className="py-3 px-4 font-bold text-lg text-[#272153]">
                            {universityData.administrativeFees.mbbsInitialPayment}
                          </td>
                          <td className="py-3 px-4 text-sm">Includes part of 1st semester fees</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* English Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">English Programs</CardTitle>
                  <CardDescription>English enhancement and IELTS preparation courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-bold">Program</th>
                          <th className="py-3 px-4 text-left font-bold">Level</th>
                          <th className="py-3 px-4 text-left font-bold">Duration</th>
                          <th className="py-3 px-4 text-left font-bold">Tuition Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {universityData.englishPrograms.map((program, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4">{program.name}</td>
                            <td className="py-3 px-4">{program.level}</td>
                            <td className="py-3 px-4">{program.duration}</td>
                            <td className="py-3 px-4 font-medium">{program.tuitionFee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    * IPP prepares students for the IELTS examination. Fees do not include IELTS examination fee which
                    is paid separately to the external examining body.
                  </p>
                </CardContent>
              </Card>

              {/* Foundation Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">Foundation Studies</CardTitle>
                  <CardDescription>Pre-university foundation programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-bold">Program</th>
                          <th className="py-3 px-4 text-left font-bold">Duration</th>
                          <th className="py-3 px-4 text-left font-bold">Admin Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Resource Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Tuition Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {universityData.foundationPrograms.map((program, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4">{program.name}</td>
                            <td className="py-3 px-4">{program.duration}</td>
                            <td className="py-3 px-4">{program.administrativeFee}</td>
                            <td className="py-3 px-4">{program.resourceFee}</td>
                            <td className="py-3 px-4">{program.tuitionFee}</td>
                            <td className="py-3 px-4 font-bold text-[#272153]">{program.totalFee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Diploma Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">Diploma Programs</CardTitle>
                  <CardDescription>Comprehensive diploma programs across various disciplines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-bold">Program</th>
                          <th className="py-3 px-4 text-left font-bold">Duration</th>
                          <th className="py-3 px-4 text-left font-bold">Admin Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Resource Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Tuition Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {universityData.diplomaPrograms.map((program, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4">{program.name}</td>
                            <td className="py-3 px-4">{program.duration}</td>
                            <td className="py-3 px-4">{program.administrativeFee}</td>
                            <td className="py-3 px-4">{program.resourceFee}</td>
                            <td className="py-3 px-4">{program.tuitionFee}</td>
                            <td className="py-3 px-4 font-bold text-[#272153]">{program.totalFee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Bachelor Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">Bachelor's Degree Programs</CardTitle>
                  <CardDescription>Undergraduate programs across all faculties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-bold">Program</th>
                          <th className="py-3 px-4 text-left font-bold">Duration</th>
                          <th className="py-3 px-4 text-left font-bold">Admin Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Resource Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Tuition Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {universityData.bachelorPrograms.map((program, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{program.name}</td>
                            <td className="py-3 px-4">{program.duration}</td>
                            <td className="py-3 px-4">{program.administrativeFee}</td>
                            <td className="py-3 px-4">{program.resourceFee}</td>
                            <td className="py-3 px-4">{program.tuitionFee}</td>
                            <td className="py-3 px-4 font-bold text-[#272153]">{program.totalFee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Postgraduate Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">Postgraduate Programs</CardTitle>
                  <CardDescription>Master's and Doctoral degree programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-bold">Program</th>
                          <th className="py-3 px-4 text-left font-bold">Duration</th>
                          <th className="py-3 px-4 text-left font-bold">Admin Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Resource Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Tuition Fee</th>
                          <th className="py-3 px-4 text-left font-bold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {universityData.postgraduatePrograms.map((program, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{program.name}</td>
                            <td className="py-3 px-4">{program.duration}</td>
                            <td className="py-3 px-4">{program.administrativeFee}</td>
                            <td className="py-3 px-4">{program.resourceFee}</td>
                            <td className="py-3 px-4">{program.tuitionFee}</td>
                            <td className="py-3 px-4 font-bold text-[#272153]">{program.totalFee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">Terms & Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 list-decimal list-inside text-gray-700">
                    <li>Payments can be made by telegraphic transfer or bank draft payable to 'UOC SDN. BHD.'</li>
                    <li className="text-red-600 font-medium">
                      International Student Processing, Registration, & Administrative Fees for International Students
                      are NON-REFUNDABLE at any circumstances.
                    </li>
                    <li>
                      Initial payment is {universityData.administrativeFees.initialPayment} (International Student
                      Processing & Visa Application Fees).
                    </li>
                    <li>
                      Initial payment for the MBBS program is {universityData.administrativeFees.mbbsInitialPayment}{" "}
                      (International Student Processing, Registration, Visa Application, Administration, and Part of the
                      1st Semester Tuition Fees).
                    </li>
                    <li>
                      The information provided in this fee structure is correct at the time of printing and UoC reserves
                      the right to make any changes that are deemed necessary.
                    </li>
                    <li>
                      All fees are to be paid before the start of the academic year or in accordance with the payment
                      structure as approved by the university failing which the UoC has the right to terminate the
                      students.
                    </li>
                    <li>All fees are payable in Malaysian Ringgit (MYR).</li>
                    <li>
                      Students shall refer to the 'International Student Financial Handbook Policy' for additional Terms
                      & Conditions and must abide by the terms and conditions stated therein.
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="english" className="space-y-6">
              {filteredEnglishCourses.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h2 className="text-xl font-medium text-gray-700">
                    No English courses found matching your search criteria.
                  </h2>
                  <p className="mt-2 text-gray-500">Try adjusting your search terms or browse all courses.</p>
                  <Button
                    variant="outline"
                    className="mt-4 border-[#272153] text-[#272153] bg-transparent"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">English Language Programs</CardTitle>
                      <CardDescription>
                        Improve your English proficiency before starting your degree program or prepare for IELTS.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {filteredEnglishCourses.map((course, index) => (
                        <div key={index} className="border-l-4 border-[#272153] pl-4">
                          <h3 className="text-xl font-semibold text-[#272153]">{course.name}</h3>
                          <div className="mt-2 space-y-1 text-gray-700">
                            <p>
                              <span className="font-medium">Duration:</span> {course.duration}
                            </p>
                            <p>
                              <span className="font-medium">Fee:</span> {course.fee}
                            </p>
                            <p>
                              <span className="font-medium">Levels:</span> {course.levels}
                            </p>
                            <p className="mt-2">{course.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-xl text-[#272153]">
                        Why Study English at University of Cyberjaya?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-5 w-5 text-[#272153]">✓</div>
                          <span>Experienced instructors specializing in English language teaching</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-5 w-5 text-[#272153]">✓</div>
                          <span>Small class sizes for personalized attention</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-5 w-5 text-[#272153]">✓</div>
                          <span>Comprehensive curriculum covering all language skills</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-5 w-5 text-[#272153]">✓</div>
                          <span>Flexible start dates throughout the year</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-5 w-5 text-[#272153]">✓</div>
                          <span>On-campus location with access to all university facilities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </>
              )}
            </TabsContent>

            <TabsContent value="admission" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Admission Requirements for International Students</CardTitle>
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
                  <CardTitle className="text-2xl">Required Documents</CardTitle>
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
                  <CardTitle className="text-2xl">Application Process</CardTitle>
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
                    <Button asChild className="bg-green-600 hover:bg-green-700 rounded-full">
                      <Link href="/#contact">Get Application Assistance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-[#272153]/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#272153] mb-4">How Yaz Education Can Help</h3>
                <p className="text-gray-700 mb-4">
                  Our expert consultants will guide you through every step of the application process, from document
                  preparation to visa application. We provide:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Free consultation and university selection advice</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Document verification and preparation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Application submission and follow-up</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Visa guidance and support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Pre-departure orientation</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 rounded-full">
                    <Link href="/#contact">Contact Us for Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">Banking Details</CardTitle>
                  <CardDescription>Bank account information for tuition fee payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-[#272153] mb-3">Account Information</h3>
                      <div className="space-y-3 text-gray-700">
                        <div>
                          <p className="text-sm text-gray-500">Beneficiary Name</p>
                          <p className="font-medium">{universityData.bankingDetails.beneficiaryName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Beneficiary Bank</p>
                          <p className="font-medium">{universityData.bankingDetails.beneficiaryBank}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Account Number</p>
                          <p className="font-medium text-lg">{universityData.bankingDetails.accountNo}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Swift Code</p>
                          <p className="font-medium text-lg">{universityData.bankingDetails.swiftCode}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#272153] mb-3">Bank Address</h3>
                      <p className="text-gray-700">{universityData.bankingDetails.bankAddress}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#272153]">Contact Information</CardTitle>
                  <CardDescription>Get in touch with the university for more information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-medium text-[#272153]">{universityData.contactDetails.department}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium text-lg">{universityData.contactDetails.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{universityData.contactDetails.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-[#272153]">Need Assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Yaz Education provides comprehensive support for your application to {universityData.name}. We can
                    help you with:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-green-600">✓</div>
                      <span>Application process and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-green-600">✓</div>
                      <span>Visa application and EMGS process</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-green-600">✓</div>
                      <span>Fee payment guidance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-green-600">✓</div>
                      <span>Accommodation arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-green-600">✓</div>
                      <span>Arrival and orientation support</span>
                    </li>
                  </ul>
                  <Button asChild className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                    <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                      Contact Yaz Education on WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
