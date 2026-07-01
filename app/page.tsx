'use client'

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Instagram,
  LocateFixed,
  Mail,
  MapPin,
  Phone,
  Search,
  Star,
  Users,
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { InquiryForm } from "@/components/inquiry-form"
import { FeedbackSection } from "@/components/feedback-section"


export default function Home() {
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
            <Link href="#services" className="text-sm font-medium hover:text-[#272153]">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#272153]">
              About Us
            </Link>
            <Link href="/universities" className="text-sm font-medium hover:text-[#272153]">
              Universities
            </Link>
            <Link href="/fees" className="text-sm font-medium hover:text-[#272153]">
              Fees
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-[#272153]">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#272153]">
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
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-100 via-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-10">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#272153] mb-6">
                Find the Right University{" "}
                <span className="inline-block">
                  for You <span className="text-3xl">🎓</span> in Malaysia
                </span>
              </h1>
              <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed mb-8">
                Yaz Education provides expert guidance for students seeking quality education in Malaysia. Let us help
                you navigate your educational journey.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-3xl bg-white p-2 rounded-full shadow-lg mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search universities, programs, fees..."
                    className="pl-12 py-6 text-lg rounded-full border-none"
                  />
                  <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#272153] hover:bg-[#373163] rounded-full px-6 py-6">
                    Search
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#272153] hover:bg-[#373163] rounded-full">
                  <Link href="#services">
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-600/10 rounded-full bg-transparent"
                >
                  <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Education Level Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-12">
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

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">
                  Comprehensive Educational Solutions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a wide range of services to help students achieve their educational goals in Malaysia and
                  beyond.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <GraduationCap className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">University Admissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Expert guidance on university selection, application process, and admission requirements for
                    Malaysian and international institutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <BookOpen className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">Study Abroad Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Comprehensive support for students looking to study abroad, including visa assistance,
                    accommodation, and pre-departure orientation.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <Users className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">Career Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Personalized career guidance to help students make informed decisions about their academic and
                    professional paths.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <LocateFixed className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">Visa Assistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Complete support with student visa applications, documentation, and interview preparation for
                    studying in Malaysia.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <Star className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">Scholarship Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Information and assistance with scholarship applications to help finance your education in Malaysia
                    and internationally.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <MapPin className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">Accommodation Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Help finding suitable and affordable accommodation options near your chosen educational institution
                    in Kuala Lumpur and beyond.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] flex items-center justify-center">
                <div className="bg-[#272153] text-white p-8 rounded-xl text-center">
                  <div className="text-5xl font-bold mb-2">KL</div>
                  <div className="text-xl">Kuala Lumpur</div>
                  <div className="mt-4 text-sm">Malaysia's Capital of Education</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#272153]">
                  Why Choose Yaz Education?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  With years of experience in the education sector, we have helped thousands of students achieve their
                  academic dreams in Malaysia and abroad.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Expert consultants with in-depth knowledge of Malaysian education system</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Partnerships with top universities and colleges in Malaysia</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Personalized guidance tailored to your academic goals</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>Comprehensive support from application to graduation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>High success rate in university placements</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="#contact">Contact Us Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="universities"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  Partner Universities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">
                  Top Malaysian Universities
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We partner with Malaysia's leading educational institutions to provide you with the best
                  opportunities.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-8 mb-10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search universities, programs, fees..."
                  className="pl-10 py-6 text-lg rounded-lg border-gray-300 shadow-sm"
                />
              </div>
              <p className="text-center mt-2 text-gray-500">
                <Link href="/universities" className="text-[#272153] hover:underline">
                  View all universities and programs
                </Link>
              </p>
            </div>

            {/* University Logos Grid - First Row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-items-center">
              <Link href="/universities/taylors-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/taylors-university.png"
                      alt="Taylor's University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Taylor's University
                  </span>
                </div>
              </Link>

              <Link href="/universities/newcastle-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/newcastle-university.png"
                      alt="Newcastle University Medicine Malaysia Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Newcastle University
                  </span>
                </div>
              </Link>

              <Link href="/universities/asia-pacific-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/apu-logo.png"
                      alt="Asia Pacific University (APU) Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Asia Pacific University
                  </span>
                </div>
              </Link>

              <Link href="/universities/help-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/help-university.png"
                      alt="HELP University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">HELP University</span>
                </div>
              </Link>

              <Link href="/universities/imu" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/imu.png"
                      alt="International Medical University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    International Medical University
                  </span>
                </div>
              </Link>

              <Link href="/universities/infrastructure-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/infrastructure-university.png"
                      alt="Infrastructure University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Infrastructure University
                  </span>
                </div>
              </Link>

              {/* Second Row */}
              <Link href="/universities/uow-malaysia" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/uow-malaysia.png"
                      alt="UOW Malaysia KDU Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">UOW Malaysia KDU</span>
                </div>
              </Link>

              <Link href="/universities/msu" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/msu.png"
                      alt="Management & Science University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Management & Science University
                  </span>
                </div>
              </Link>

              <Link href="/universities/multimedia-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/mmu-logo.png"
                      alt="Multimedia University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Multimedia University
                  </span>
                </div>
              </Link>

              <Link href="/universities/sunway-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/sunway-university.png"
                      alt="Sunway University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">Sunway University</span>
                </div>
              </Link>

              <Link href="/universities/ucsi-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/ucsi-university.png"
                      alt="UCSI University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">UCSI University</span>
                </div>
              </Link>

              <Link href="/universities/university-of-cyberjaya" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/cyberjaya-university.png"
                      alt="University of Cyberjaya Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    University of Cyberjaya
                  </span>
                </div>
              </Link>

              {/* Third Row */}
              <Link href="/universities/utp" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/utp.png"
                      alt="Universiti Teknologi PETRONAS Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Universiti Teknologi PETRONAS
                  </span>
                </div>
              </Link>

              <Link href="/universities/unimy" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img src="/images/universities/unimy.png" alt="UNIMY Logo" className="max-h-full max-w-full" />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">UNIMY</span>
                </div>
              </Link>

              <Link href="/universities/curtin-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/curtin-university.png"
                      alt="Curtin University Malaysia Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Curtin University Malaysia
                  </span>
                </div>
              </Link>

              <Link href="/universities/monash-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/monash-university.png"
                      alt="Monash University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">Monash University</span>
                </div>
              </Link>

              <Link href="/universities/swinburne-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/swinburne-university.png"
                      alt="Swinburne University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Swinburne University
                  </span>
                </div>
              </Link>

              <Link href="/universities/heriot-watt-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/heriot-watt-university.png"
                      alt="Heriot-Watt University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Heriot-Watt University
                  </span>
                </div>
              </Link>

              {/* UniKL University Card */}
              <Link href="/universities/universiti-kuala-lumpur" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/unikl-logo.png"
                      alt="Universiti Kuala Lumpur Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    Universiti Kuala Lumpur
                  </span>
                </div>
              </Link>

              {/* MAHSA University Card */}
              <Link href="/universities/mahsa-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/mahsa-logo.png"
                      alt="MAHSA University Logo"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">MAHSA University</span>
                </div>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-[#272153] hover:bg-[#373163] rounded-full">
                <Link href="/universities">
                  View All Universities <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[800px] mx-auto">
                Our consultancy has established strong relationships with these universities and many more across
                Malaysia. We can help you navigate the application process and find the perfect institution for your
                academic goals.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#272153] mb-4">
                Study in Malaysia's Dynamic Capital
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience world-class education in Kuala Lumpur, a vibrant and modern city offering the perfect blend
                of culture, technology, and opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/kl-petronas-day.jpg"
                  alt="Kuala Lumpur Petronas Towers at sunset"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">Iconic Landmarks</h3>
                    <p className="text-sm text-white/90">Home to the famous Petronas Twin Towers</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/kl-skyline-night.jpg"
                  alt="Kuala Lumpur skyline at night"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">Modern Infrastructure</h3>
                    <p className="text-sm text-white/90">A fast-growing global education hub</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/kl-blue-river.jpg"
                  alt="Kuala Lumpur beautiful night scene"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">Vibrant Lifestyle</h3>
                    <p className="text-sm text-white/90">Experience culture, entertainment & more</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-[#272153] hover:bg-[#373163] rounded-full">
                <Link href="/universities">
                  Explore Universities in Malaysia <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#272153]/5 dark:bg-[#272153]/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  Discover Malaysia
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">
                  Study in Beautiful Kuala Lumpur
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience world-class education in one of Southeast Asia's most vibrant and multicultural cities.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/kl-city-center.jpg"
                  alt="Kuala Lumpur City Center"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 text-sm text-center font-medium">Modern City Center</p>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/kl-university-campus.jpg"
                  alt="University Campus in Kuala Lumpur"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 text-sm text-center font-medium">World-Class Campuses</p>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/kl-culture.jpg"
                  alt="Cultural Experience in Kuala Lumpur"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 text-sm text-center font-medium">Rich Cultural Experience</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 dark:text-gray-400 max-w-[800px] mx-auto">
                Kuala Lumpur offers students a unique blend of modern infrastructure, affordable living costs, and a
                safe environment. The city is home to many top-ranked universities and provides an excellent quality of
                life for international students.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#272153] text-[#272153] hover:bg-[#272153]/10 rounded-full bg-transparent"
                >
                  <Link href="#contact">Learn More About Student Life in KL</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from students who have successfully achieved their educational goals with our help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="/images/student-1.jpg" alt="Student" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#272153]">Ahmed M.</CardTitle>
                      <CardDescription>International Student from Jordan</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Yaz Education made my dream of studying in Malaysia a reality. Their guidance throughout the
                    application process was invaluable, and they helped me secure a scholarship at a top university in
                    Kuala Lumpur."
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="/images/student-2.jpg" alt="Student" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#272153]">Sarah L.</CardTitle>
                      <CardDescription>Local Malaysian Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The career counseling services at Yaz helped me choose the right program for my interests and
                    career goals. Their personalized approach and attention to detail made all the difference in my
                    educational journey."
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="/images/student-3.jpg" alt="Student" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#272153]">Mohammed K.</CardTitle>
                      <CardDescription>Graduate Student from UAE</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I was struggling with my visa application until I found Yaz Education. Their expert team guided me
                    through every step, and I'm now successfully completing my Master's degree in Malaysia."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions about our services? Reach out to us today and take the first step towards your
                  educational success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader>
                  <CardTitle className="text-[#272153]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#272153]" />
                    <a
                      href="https://wa.me/60102282144"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#272153] hover:underline"
                    >
                      +60 10-228 2144 (WhatsApp)
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#272153]" />
                    <a href="mailto:yazan.connect@gmail.com" className="text-[#272153] hover:underline">
                      yazan.connect@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-[#272153]" />
                    <a
                      href="https://instagram.com/Yaz.Education"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#272153] hover:underline"
                    >
                      Yaz.Education
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#272153] mt-1" />
                    <p className="text-gray-500 dark:text-gray-400">Kuala Lumpur City Center, Malaysia</p>
                  </div>
                  <div className="pt-4">
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 rounded-full" size="lg">
                      <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                        Contact via WhatsApp
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <InquiryForm />
            </div>
          </div>
        </section>

        <FeedbackSection />

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
