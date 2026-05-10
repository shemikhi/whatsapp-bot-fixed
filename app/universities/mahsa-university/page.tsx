import Link from "next/link"
import { ArrowLeft, MapPin, Globe, Phone, GraduationCap, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function MahsaUniversityPage() {
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
        <div className="container mx-auto py-8 px-4">
          <Button asChild variant="outline" className="mb-6 bg-transparent">
            <Link href="/universities">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Universities
            </Link>
          </Button>

          {/* Hero Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/universities/mahsa-logo.png"
                  alt="MAHSA University Logo"
                  className="w-32 h-32 object-contain bg-white p-4 rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-[#272153] mb-4">MAHSA University</h1>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>Kuala Lumpur & Selangor, Malaysia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>Private University</span>
                  </div>
                </div>
                <p className="text-gray-600 max-w-3xl mb-4">
                  MAHSA University is a leading private university in Malaysia offering comprehensive healthcare,
                  engineering, business, and hospitality programs with state-of-the-art facilities and dual award
                  opportunities with international universities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Medicine & Dentistry</Badge>
                  <Badge variant="secondary">Health Sciences</Badge>
                  <Badge variant="secondary">Pharmacy</Badge>
                  <Badge variant="secondary">Engineering</Badge>
                  <Badge variant="secondary">Business</Badge>
                  <Badge variant="secondary">Dual Award Programs</Badge>
                  <Badge className="bg-green-600">2024 Scholarships Available</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="programs">Programs & Fees</TabsTrigger>
              <TabsTrigger value="english">English Programs</TabsTrigger>
              <TabsTrigger value="initial-fees">Initial Fees</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About MAHSA University</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    MAHSA University (Malaysian Allied Health Sciences Academy) is one of Malaysia's premier private
                    universities, established to provide world-class education in healthcare, engineering, business, and
                    hospitality management. With campuses in both Kuala Lumpur City and Selangor, MAHSA offers students
                    access to modern facilities and a comprehensive learning environment.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-[#272153]">Key Highlights</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Dual Award Programs with international universities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Comprehensive healthcare programs (Medicine, Dentistry, Pharmacy, Nursing)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>State-of-the-art medical and dental facilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Engineering programs accredited by professional bodies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>2024 Intake Scholarships available for all programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Online Distance Learning (ODL) options available</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-[#272153]">Faculties & Schools</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#272153]">•</span>
                          <span>Faculty of Medicine</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#272153]">•</span>
                          <span>Faculty of Dentistry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#272153]">•</span>
                          <span>Faculty of Health Sciences, Nursing & Education</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#272153]">•</span>
                          <span>Faculty of Pharmacy & Biomedical Sciences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#272153]">•</span>
                          <span>Faculty of Engineering, Built Environment & IT</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#272153]">•</span>
                          <span>Faculty of Business, Accounting, Finance, Law & Humanity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#272153]">•</span>
                          <span>Centre for Hospitality & Tourism Management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#272153]">•</span>
                          <span>Centre for Pre-University Studies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose MAHSA University?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-3">
                        <GraduationCap className="h-6 w-6 text-[#272153]" />
                      </div>
                      <h3 className="font-semibold mb-2">Quality Education</h3>
                      <p className="text-sm text-gray-600">
                        Recognized programs with industry-relevant curriculum and experienced faculty members
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-3">
                        <Globe className="h-6 w-6 text-[#272153]" />
                      </div>
                      <h3 className="font-semibold mb-2">International Recognition</h3>
                      <p className="text-sm text-gray-600">
                        Dual award programs with UK and Australian universities for global employability
                      </p>
                    </div>
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-3">
                        <DollarSign className="h-6 w-6 text-[#272153]" />
                      </div>
                      <h3 className="font-semibold mb-2">Scholarships Available</h3>
                      <p className="text-sm text-gray-600">
                        2024 intake scholarships offered for various programs to support international students
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Programs & Fees Tab */}
            <TabsContent value="programs" className="space-y-6">
              {/* Foundation Studies */}
              <Card>
                <CardHeader>
                  <CardTitle>Foundation Studies</CardTitle>
                  <CardDescription>1 Year Programs - Centre for Pre-University Studies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Application Fee</TableHead>
                          <TableHead>Registration Fee</TableHead>
                          <TableHead>Tuition Fee</TableHead>
                          <TableHead>Total Fees</TableHead>
                          <TableHead>2024 Scholarship</TableHead>
                          <TableHead>Fees After Scholarship</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            Foundation in Science (leading to Medicine & Pharmacy)
                          </TableCell>
                          <TableCell>1 Year</TableCell>
                          <TableCell>RM 3,000</TableCell>
                          <TableCell>RM 1,800</TableCell>
                          <TableCell>RM 25,000</TableCell>
                          <TableCell>RM 30,200</TableCell>
                          <TableCell className="text-green-600">RM 10,600</TableCell>
                          <TableCell className="font-semibold">RM 19,600</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Foundation in Business</TableCell>
                          <TableCell>1 Year</TableCell>
                          <TableCell>RM 3,000</TableCell>
                          <TableCell>RM 1,800</TableCell>
                          <TableCell>RM 11,320</TableCell>
                          <TableCell>RM 16,520</TableCell>
                          <TableCell className="text-green-600">RM 20</TableCell>
                          <TableCell className="font-semibold">RM 16,500</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Medicine Programs */}
              <Card>
                <CardHeader>
                  <CardTitle>Faculty of Medicine</CardTitle>
                  <CardDescription>Comprehensive Medical Programs & Postgraduate Studies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Total Fees</TableHead>
                          <TableHead>2024 Scholarship</TableHead>
                          <TableHead>Fees After Scholarship</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            Bachelor of Medicine & Bachelor of Surgery (MBBS)
                          </TableCell>
                          <TableCell>5 Years</TableCell>
                          <TableCell>RM 448,350</TableCell>
                          <TableCell className="text-green-600">RM 8,000</TableCell>
                          <TableCell className="font-semibold">RM 440,350</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Master of Medical Science (Anatomy)</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>RM 58,900</TableCell>
                          <TableCell className="text-green-600">RM 15,700</TableCell>
                          <TableCell className="font-semibold">RM 43,200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Master of Medical Science</TableCell>
                          <TableCell>1.5 Years</TableCell>
                          <TableCell>RM 58,900</TableCell>
                          <TableCell className="text-green-600">RM 15,700</TableCell>
                          <TableCell className="font-semibold">RM 43,200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Master of Medical Science in Aesthetic Medicine</TableCell>
                          <TableCell>1.5 Years</TableCell>
                          <TableCell>RM 80,800</TableCell>
                          <TableCell className="text-green-600">RM 10,000</TableCell>
                          <TableCell className="font-semibold">RM 70,800</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Postgraduate Certificate in Aesthetic Medicine</TableCell>
                          <TableCell>1 Year</TableCell>
                          <TableCell>RM 35,800</TableCell>
                          <TableCell className="text-green-600">RM 3,000</TableCell>
                          <TableCell className="font-semibold">RM 32,800</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Master of Science in Public Health</TableCell>
                          <TableCell>1.5 Years</TableCell>
                          <TableCell>RM 58,900</TableCell>
                          <TableCell className="text-green-600">RM 15,700</TableCell>
                          <TableCell className="font-semibold">RM 43,200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Master of Science in Public Health (ODL)</TableCell>
                          <TableCell>1.5 Years</TableCell>
                          <TableCell>RM 41,700</TableCell>
                          <TableCell className="text-green-600">RM 7,800</TableCell>
                          <TableCell className="font-semibold">RM 33,900</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Dentistry Programs */}
              <Card>
                <CardHeader>
                  <CardTitle>Faculty of Dentistry</CardTitle>
                  <CardDescription>Professional Dental Programs with Clinical Training</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Total Fees</TableHead>
                          <TableHead>2024 Scholarship</TableHead>
                          <TableHead>Fees After Scholarship</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Doctor of Dental Surgery (DDS)</TableCell>
                          <TableCell>5 Years</TableCell>
                          <TableCell>RM 455,650</TableCell>
                          <TableCell className="text-green-600">RM 33,000</TableCell>
                          <TableCell className="font-semibold">RM 422,650</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Doctor in Restorative Dentistry</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>RM 336,600</TableCell>
                          <TableCell className="text-green-600">RM 2,000</TableCell>
                          <TableCell className="font-semibold">RM 334,600</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Doctor in Periodontology</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>RM 336,600</TableCell>
                          <TableCell className="text-green-600">RM 2,000</TableCell>
                          <TableCell className="font-semibold">RM 334,600</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Master of Orofacial Sciences</TableCell>
                          <TableCell>1 Year</TableCell>
                          <TableCell>RM 86,950</TableCell>
                          <TableCell className="text-green-600">RM 0</TableCell>
                          <TableCell className="font-semibold">RM 86,950</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Diploma in Dental Technology</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>RM 68,060</TableCell>
                          <TableCell className="text-green-600">RM 20,160</TableCell>
                          <TableCell className="font-semibold">RM 47,900</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Diploma in Dental Surgery Assistant</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>RM 66,500</TableCell>
                          <TableCell className="text-green-600">RM 17,600</TableCell>
                          <TableCell className="font-semibold">RM 48,900</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    <strong>Note:</strong> Doctor in Restorative Dentistry, Doctor in Periodontology, Master of
                    Orofacial Sciences, and Doctor of Dental Surgery (DDS) programs are subject to additional bench
                    fees.
                  </p>
                </CardContent>
              </Card>

              {/* Health Sciences Programs */}
              <Card>
                <CardHeader>
                  <CardTitle>Faculty of Health Sciences, Nursing & Education</CardTitle>
                  <CardDescription>Comprehensive Allied Health & Nursing Programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="nursing" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                      <TabsTrigger value="nursing">Nursing</TabsTrigger>
                      <TabsTrigger value="physiotherapy">Physiotherapy</TabsTrigger>
                      <TabsTrigger value="medical-imaging">Medical Imaging</TabsTrigger>
                      <TabsTrigger value="environmental">Environmental Health</TabsTrigger>
                    </TabsList>

                    <TabsContent value="nursing">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Doctor of Philosophy (PhD) in Nursing</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 92,010</TableCell>
                              <TableCell className="font-semibold">RM 57,850</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Master of Nursing</TableCell>
                              <TableCell>2 Years</TableCell>
                              <TableCell>RM 58,900</TableCell>
                              <TableCell className="font-semibold">RM 43,200</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Science (Hons) Nursing</TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 120,000</TableCell>
                              <TableCell className="font-semibold">RM 79,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Science (Hons) Nursing Sciences (ODL) (D2D)
                              </TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 64,830</TableCell>
                              <TableCell className="font-semibold">RM 42,200</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Nursing (Hons) Public Health</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 52,500</TableCell>
                              <TableCell className="font-semibold">RM 52,300</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Nursing</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 69,700</TableCell>
                              <TableCell className="font-semibold">RM 47,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Paramedical Science</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 69,700</TableCell>
                              <TableCell className="font-semibold">RM 47,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Advanced Diploma in Midwifery</TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 33,200</TableCell>
                              <TableCell className="font-semibold">RM 32,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Advanced Diploma in Paediatric Nursing</TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 33,200</TableCell>
                              <TableCell className="font-semibold">RM 32,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Post Basic Certificate in Renal Nursing</TableCell>
                              <TableCell>0.5 Year</TableCell>
                              <TableCell>RM 23,000</TableCell>
                              <TableCell className="font-semibold">RM 14,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Post Basic Certificate in Critical Care Nursing
                              </TableCell>
                              <TableCell>0.5 Year</TableCell>
                              <TableCell>RM 32,200</TableCell>
                              <TableCell className="font-semibold">RM 14,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Post Basic Certificate in Gerontology Nursing
                              </TableCell>
                              <TableCell>0.5 Year</TableCell>
                              <TableCell>RM 32,200</TableCell>
                              <TableCell className="font-semibold">RM 14,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Post Basic Certificate in Perioperative Nursing
                              </TableCell>
                              <TableCell>0.5 Year</TableCell>
                              <TableCell>RM 32,200</TableCell>
                              <TableCell className="font-semibold">RM 14,600</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    <TabsContent value="physiotherapy">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Master of Physiotherapy</TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 54,640</TableCell>
                              <TableCell className="font-semibold">RM 46,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Physiotherapy (Hons) **</TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 121,340</TableCell>
                              <TableCell className="font-semibold">RM 111,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Physiotherapy (Hons) (ODL)</TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 85,140</TableCell>
                              <TableCell className="font-semibold">RM 66,700</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Sport Science (Honours)</TableCell>
                              <TableCell>3.5 Years</TableCell>
                              <TableCell>RM 108,900</TableCell>
                              <TableCell className="font-semibold">RM 100,200</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Physiotherapy</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 69,700</TableCell>
                              <TableCell className="font-semibold">RM 47,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    <TabsContent value="medical-imaging">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Medical Imaging (Honours)</TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 111,340</TableCell>
                              <TableCell className="font-semibold">RM 69,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Medical Imaging (Honours) (ODL)</TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 69,612</TableCell>
                              <TableCell className="font-semibold">RM 44,700</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Medical Imaging (Radiography)</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 69,700</TableCell>
                              <TableCell className="font-semibold">RM 47,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    <TabsContent value="environmental">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Environment Health and Safety (Hons)
                              </TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 111,340</TableCell>
                              <TableCell className="font-semibold">RM 69,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Environmental Health (ODL)</TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 60,500</TableCell>
                              <TableCell className="font-semibold">RM 44,700</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Environmental Health</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 69,700</TableCell>
                              <TableCell className="font-semibold">RM 47,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Occupational and Safety</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 69,700</TableCell>
                              <TableCell className="font-semibold">RM 47,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Education Programs</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Program</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Total Fees</TableHead>
                            <TableHead>Fees After Scholarship</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Diploma in Early Childhood Education</TableCell>
                            <TableCell>2.5 Years</TableCell>
                            <TableCell>RM 56,700</TableCell>
                            <TableCell className="font-semibold">RM 40,900</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Diploma in Education (TESL)</TableCell>
                            <TableCell>2.5 Years</TableCell>
                            <TableCell>RM 52,000</TableCell>
                            <TableCell className="font-semibold">RM 40,900</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pharmacy & Biomedical Sciences */}
              <Card>
                <CardHeader>
                  <CardTitle>Faculty of Pharmacy & Biomedical Sciences</CardTitle>
                  <CardDescription>Professional Pharmacy & Biomedical Programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="pharmacy" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="pharmacy">Pharmacy</TabsTrigger>
                      <TabsTrigger value="biomedical">Biomedical Sciences</TabsTrigger>
                    </TabsList>

                    <TabsContent value="pharmacy">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">PhD in Pharmacy</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 89,130</TableCell>
                              <TableCell className="font-semibold">RM 60,850</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Master in Pharmacy</TableCell>
                              <TableCell>2 Years</TableCell>
                              <TableCell>RM 58,900</TableCell>
                              <TableCell className="font-semibold">RM 43,200</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Pharmacy (Hons)</TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 201,220</TableCell>
                              <TableCell className="font-semibold">RM 142,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Science (Honours) in Pharmaceuticals Technology
                              </TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 92,040</TableCell>
                              <TableCell className="font-semibold">RM 69,100</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Pharmacy</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 69,700</TableCell>
                              <TableCell className="font-semibold">RM 47,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    <TabsContent value="biomedical">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor in Biomedical Sciences (Honours) **
                              </TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 121,340</TableCell>
                              <TableCell className="font-semibold">RM 111,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Biomedical Sciences (Honours) (ODL)
                              </TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 85,140</TableCell>
                              <TableCell className="font-semibold">RM 66,700</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Science Biotechnology (Honours)</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 92,250</TableCell>
                              <TableCell className="font-semibold">RM 69,100</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Medical Laboratory Technology</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 69,700</TableCell>
                              <TableCell className="font-semibold">RM 47,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Engineering, Built Environment & IT */}
              <Card>
                <CardHeader>
                  <CardTitle>Faculty of Engineering, Built Environment & Information Technology</CardTitle>
                  <CardDescription>Professional Engineering & Technology Programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="engineering" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="engineering">Engineering</TabsTrigger>
                      <TabsTrigger value="built">Built Environment</TabsTrigger>
                      <TabsTrigger value="it">Information Technology</TabsTrigger>
                    </TabsList>

                    <TabsContent value="engineering">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Doctor of Philosophy in Engineering</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 92,010</TableCell>
                              <TableCell className="font-semibold">RM 57,850</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Master in Engineering</TableCell>
                              <TableCell>2 Years</TableCell>
                              <TableCell>RM 58,900</TableCell>
                              <TableCell className="font-semibold">RM 43,200</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Electrical & Electronic Engineering with Honours **
                              </TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 134,000</TableCell>
                              <TableCell className="font-semibold">RM 95,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Mechanical Engineering with Honours **
                              </TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 136,000</TableCell>
                              <TableCell className="font-semibold">RM 95,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Diploma in Electrical and Electronic Engineering
                              </TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 61,500</TableCell>
                              <TableCell className="font-semibold">RM 41,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Mechanical Engineering</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 61,500</TableCell>
                              <TableCell className="font-semibold">RM 41,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    <TabsContent value="built">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Civil Engineering with Honours **
                              </TableCell>
                              <TableCell>4 Years</TableCell>
                              <TableCell>RM 123,500</TableCell>
                              <TableCell className="font-semibold">RM 95,400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Science (Honours) in Architectural Technology
                              </TableCell>
                              <TableCell>3.5 Years</TableCell>
                              <TableCell>RM 112,270</TableCell>
                              <TableCell className="font-semibold">RM 76,200</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Quantity Surveying (Honours)</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 109,170</TableCell>
                              <TableCell className="font-semibold">RM 73,100</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Civil Engineering</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 61,500</TableCell>
                              <TableCell className="font-semibold">RM 41,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Quantity Surveying</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 61,700</TableCell>
                              <TableCell className="font-semibold">RM 41,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Architectural Technology</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 61,700</TableCell>
                              <TableCell className="font-semibold">RM 41,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    <TabsContent value="it">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Arts (Honours) in Creative Multimedia Design
                              </TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 86,920</TableCell>
                              <TableCell className="font-semibold">RM 66,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Information Technology (Hons)</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 78,270</TableCell>
                              <TableCell className="font-semibold">RM 64,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Information Technology (Hons) - Online
                              </TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 51,150</TableCell>
                              <TableCell className="font-semibold">RM 39,200</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Information Technology</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 56,700</TableCell>
                              <TableCell className="font-semibold">RM 40,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Business & Hospitality Programs */}
              <Card>
                <CardHeader>
                  <CardTitle>Faculty of Business, Accounting, Finance, Law & Humanity</CardTitle>
                  <CardDescription>Professional Business & Accounting Programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="business" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="business">Business & MBA</TabsTrigger>
                      <TabsTrigger value="accounting">Accounting & Finance</TabsTrigger>
                    </TabsList>

                    <TabsContent value="business">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Doctor of Philosophy in Management</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 85,150</TableCell>
                              <TableCell className="font-semibold">RM 57,850</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Doctor of Business Administration</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 95,150</TableCell>
                              <TableCell className="font-semibold">RM 67,850</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Master of Business Administration</TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 42,120</TableCell>
                              <TableCell className="font-semibold">RM 32,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Master of Business Administration (ODL)</TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 39,590</TableCell>
                              <TableCell className="font-semibold">RM 24,300</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Master of Business Administration (Financial Technology)
                              </TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 59,580</TableCell>
                              <TableCell className="font-semibold">RM 32,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Master of Business Administration (Hospital Management)
                              </TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 59,580</TableCell>
                              <TableCell className="font-semibold">RM 32,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Master of Business Administration (Hospital Management) (ODL)
                              </TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 39,590</TableCell>
                              <TableCell className="font-semibold">RM 24,300</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Master of Business Administration (Islamic Finance)
                              </TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 59,580</TableCell>
                              <TableCell className="font-semibold">RM 32,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Master of Business Administration (Strategic Leadership)
                              </TableCell>
                              <TableCell>1 Year</TableCell>
                              <TableCell>RM 59,580</TableCell>
                              <TableCell className="font-semibold">RM 32,600</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Business Administration</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 62,120</TableCell>
                              <TableCell className="font-semibold">RM 62,120</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Hospital Management (Hons) **</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 76,470</TableCell>
                              <TableCell className="font-semibold">RM 64,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Business Administration</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 51,000</TableCell>
                              <TableCell className="font-semibold">RM 40,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Human Resource Management</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 56,500</TableCell>
                              <TableCell className="font-semibold">RM 40,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Marketing</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 56,700</TableCell>
                              <TableCell className="font-semibold">RM 40,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>

                    <TabsContent value="accounting">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Program</TableHead>
                              <TableHead>Duration</TableHead>
                              <TableHead>Total Fees</TableHead>
                              <TableHead>Fees After Scholarship</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Bachelor of Accounting (Honours) **</TableCell>
                              <TableCell>3 Years</TableCell>
                              <TableCell>RM 78,270</TableCell>
                              <TableCell className="font-semibold">RM 64,900</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bachelor of Science (Honours) in Islamic Finance **
                              </TableCell>
                              <TableCell>3.5 Years</TableCell>
                              <TableCell>RM 81,580</TableCell>
                              <TableCell className="font-semibold">RM 65,200</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Diploma in Accounting</TableCell>
                              <TableCell>2.5 Years</TableCell>
                              <TableCell>RM 56,700</TableCell>
                              <TableCell className="font-semibold">RM 40,900</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Hospitality Programs */}
              <Card>
                <CardHeader>
                  <CardTitle>Centre for Hospitality & Tourism Management</CardTitle>
                  <CardDescription>Professional Hospitality & Tourism Programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Total Fees</TableHead>
                          <TableHead>Fees After Scholarship</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Bachelor of Hospitality Management (Honours)</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>RM 86,920</TableCell>
                          <TableCell className="font-semibold">RM 66,900</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Diploma in Hotel Management</TableCell>
                          <TableCell>2.5 Years</TableCell>
                          <TableCell>RM 57,700</TableCell>
                          <TableCell className="font-semibold">RM 41,900</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Diploma in Restaurant Management</TableCell>
                          <TableCell>2.5 Years</TableCell>
                          <TableCell>RM 57,700</TableCell>
                          <TableCell className="font-semibold">RM 41,900</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Postgraduate Research Programs */}
              <Card>
                <CardHeader>
                  <CardTitle>Centre for Postgraduate Studies, Research & Innovation</CardTitle>
                  <CardDescription>Research & Postgraduate Certificate Programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Total Fees</TableHead>
                          <TableHead>Fees After Scholarship</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Doctor of Philosophy by Research</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>RM 98,010</TableCell>
                          <TableCell className="font-semibold">RM 57,850</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Master of Science by Research</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>RM 58,900</TableCell>
                          <TableCell className="font-semibold">RM 43,200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Postgraduate Diploma in Management</TableCell>
                          <TableCell>9 Months</TableCell>
                          <TableCell>RM 31,200</TableCell>
                          <TableCell className="font-semibold">RM 19,600</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Postgraduate Certificate in Leadership</TableCell>
                          <TableCell>7 Months</TableCell>
                          <TableCell>RM 31,200</TableCell>
                          <TableCell className="font-semibold">RM 14,600</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Postgraduate Certificate in Teaching and Learning
                          </TableCell>
                          <TableCell>7 Months</TableCell>
                          <TableCell>RM 31,200</TableCell>
                          <TableCell className="font-semibold">RM 14,600</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* APEL.Q Program */}
              <Card>
                <CardHeader>
                  <CardTitle>APEL.Q (Accreditation of Prior Experiential Learning)</CardTitle>
                  <CardDescription>Recognition of Work Experience for MBA Entry</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Program</TableHead>
                          <TableHead>Application Fee</TableHead>
                          <TableHead>Registration Fee</TableHead>
                          <TableHead>Tuition Fee</TableHead>
                          <TableHead>Total Fee</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Master of Business Administration (via APEL.Q)</TableCell>
                          <TableCell>RM 5,000</TableCell>
                          <TableCell>RM 3,500</TableCell>
                          <TableCell>RM 34,500</TableCell>
                          <TableCell className="font-semibold">RM 43,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    <strong>Note:</strong> APEL.Q allows working professionals with significant work experience to
                    pursue an MBA without a traditional bachelor's degree.
                  </p>
                </CardContent>
              </Card>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>** Dual Award Programmes:</strong> These programs are offered in collaboration with
                  international universities, allowing students to earn degrees from both MAHSA University and the
                  partner institution.
                </p>
              </div>
            </TabsContent>

            {/* English Programs Tab */}
            <TabsContent value="english" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>English Language Programs</CardTitle>
                  <CardDescription>
                    Improve your English proficiency before starting your degree program
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    MAHSA University does not currently offer dedicated English language programs. International
                    students are expected to meet the English language requirements for their chosen program through
                    recognized tests such as IELTS or TOEFL.
                  </p>
                  <p>
                    Contact Yaz Education for guidance on English language preparation and meeting admission
                    requirements.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Initial Fees Tab */}
            <TabsContent value="initial-fees" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Administrative Fees for International Students</CardTitle>
                  <CardDescription>Fees applicable to all international students (2024)</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Application Fee</TableCell>
                        <TableCell className="text-right">
                          <Badge variant="secondary">Varies by Program</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Registration Fee</TableCell>
                        <TableCell className="text-right">
                          <Badge variant="secondary">Varies by Program</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Tuition Fee</TableCell>
                        <TableCell className="text-right">
                          <Badge variant="secondary">Varies by Program</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Total Yearly Fees</TableCell>
                        <TableCell className="text-right">
                          <Badge variant="secondary">Varies by Program</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Important Notes:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          All fees must be paid before the start of the academic year/semester or by a payment structure
                          as approved by the Bursar.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          Registration and Application Fees are neither refundable nor transferrable under any
                          circumstances.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          Total Yearly Fees for international students are inclusive of visa renewal charges unless in
                          the event of late submission.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          Initial payment of RM 3,000 for Registration Fee, Application Fee and partial Tuition Fee is
                          not refundable.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Tuition fee is not refundable after commencement of programme intake.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>The 2024 Intake Scholarship quantum will be deducted by year.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>
                          This fee structure is valid till 31st December 2024. MAHSA University reserves the right to
                          make changes without prior notice.
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>How to pay your fees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Accepted Payment Methods:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Telegraphic Transfer (T/T) or Bank Draft</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Online payments through MAHSA Website (iPAY 88)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>E-wallet payments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>Alipay or cash payments at Centre for Student Application and Registration (STAR)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Submission of Payment Proof:</h4>
                      <p className="text-sm text-gray-700">
                        Students are required to submit receipts of payments. This includes original bank-in slips in
                        the case of conventional banking or printouts of online successful transfer with reference
                        numbers to STAR (Centre for Student Application and Registration).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campus Locations</CardTitle>
                  <CardDescription>Programs offered at different campuses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">MAHSA University City Campus</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        <MapPin className="inline h-4 w-4 mr-1" />
                        MAHSA AVENUE, Jalan Ilmu, Off Jalan University, 59100 Kuala Lumpur
                      </p>
                      <p className="text-sm">
                        <strong>Note:</strong> Some programs marked with * are offered at the City Campus location.
                      </p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Main Campus</h4>
                      <p className="text-sm text-gray-600">
                        Most programs are offered at the main MAHSA University campus in Selangor.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Banking Details for International Students</CardTitle>
                  <CardDescription>Use these details for telegraphic transfers and bank drafts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Beneficiary Name</p>
                        <p className="font-semibold">Malaysian Allied Health Sciences Academy Sdn. Bhd.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Beneficiary Bank</p>
                        <p className="font-semibold">CIMB Bank Bhd</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Account Number</p>
                        <p className="font-semibold">80-0048814-2</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Swift Code</p>
                        <p className="font-semibold">CIBBMYKL</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Bank Address</p>
                      <p className="font-semibold">
                        Wisma UOA II, No. 6, Changkat Semantan, Damansara Heights, 50490 Kuala Lumpur, Malaysia
                      </p>
                      <p className="text-sm text-gray-600 mt-1">Tel: +603 - 2095 8823</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact MAHSA University</CardTitle>
                  <CardDescription>Get in touch with the university directly</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-[#272153] mt-1" />
                      <div>
                        <p className="font-medium">Official Website</p>
                        <a
                          href="https://www.mahsa.edu.my"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          www.mahsa.edu.my
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-[#272153] mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+603 - Contact via website</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#272153] mt-1" />
                      <div>
                        <p className="font-medium">Main Campus Address</p>
                        <p className="text-gray-600">Selangor, Malaysia</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help with Your Application?</CardTitle>
                  <CardDescription>Contact Yaz Education for personalized assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our team at Yaz Education is here to help you navigate the application process, understand the fee
                    structure, and ensure you meet all requirements for admission to MAHSA University.
                  </p>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Yaz Education on WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
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
