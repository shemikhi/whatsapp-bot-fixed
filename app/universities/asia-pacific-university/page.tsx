import Link from "next/link"
import { ArrowLeft, CheckCircle, GraduationCap, DollarSign, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AsiaaPacificUniversityPage() {
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
        {/* Hero Section */}
        <section className="w-full py-12 bg-gradient-to-br from-purple-100 via-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <Button asChild variant="outline" className="mb-4 bg-transparent">
              <Link href="/universities">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Universities
              </Link>
            </Button>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
              <div className="flex-shrink-0">
                <div className="h-32 w-32 bg-white rounded-full shadow-lg flex items-center justify-center p-4">
                  <img
                    src="/images/universities/apu-logo.png"
                    alt="Asia Pacific University Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#272153] mb-4">
                  Asia Pacific University (APU)
                </h1>
                <p className="text-xl text-gray-600 mb-4">Malaysia's Award-Winning University</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Private University
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Kuala Lumpur
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    English Courses Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-10 w-10 mx-auto mb-2 text-[#272153]" />
                <h3 className="text-2xl font-bold text-[#272153]">50+</h3>
                <p className="text-sm text-gray-600">Programs Available</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-10 w-10 mx-auto mb-2 text-green-600" />
                <h3 className="text-2xl font-bold text-[#272153]">Dual Degree</h3>
                <p className="text-sm text-gray-600">APU & De Montfort UK</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="h-10 w-10 mx-auto mb-2 text-blue-600" />
                <h3 className="text-2xl font-bold text-[#272153]">From RM 2,650</h3>
                <p className="text-sm text-gray-600">Per Semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-2 text-purple-600" />
                <h3 className="text-2xl font-bold text-[#272153]">Flexible</h3>
                <p className="text-sm text-gray-600">Full-time & Online (ODL)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About APU */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold text-[#272153] mb-6">About Asia Pacific University</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-4">
              Asia Pacific University of Technology & Innovation (APU) is Malaysia's Premier Private University known
              for its award-winning education and innovation in technology, business, and design. APU has achieved an
              excellent Tier 5 (Excellent) rating under the SETARA 2017 and 2013 ratings by the Ministry of Higher
              Education (MOHE) Malaysia.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              APU offers a wide range of degrees in Computing, Technology, Business, Finance, Psychology, Media, Design,
              Architecture, VFX, Animation, and Engineering. All APU degree programs are validated by De Montfort
              University (DMU), UK, and students can opt for a Dual Degree from both APU and DMU.
            </p>
          </div>
        </section>

        {/* Programs and Fees */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold text-[#272153] mb-6">Programs & Fees</h2>

          <Tabs defaultValue="foundation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
              <TabsTrigger value="foundation" className="text-xs md:text-sm">
                Foundation
              </TabsTrigger>
              <TabsTrigger value="diploma" className="text-xs md:text-sm">
                Diploma
              </TabsTrigger>
              <TabsTrigger value="certificate" className="text-xs md:text-sm">
                Certificate
              </TabsTrigger>
              <TabsTrigger value="degree" className="text-xs md:text-sm">
                Degree
              </TabsTrigger>
              <TabsTrigger value="english" className="text-xs md:text-sm">
                English
              </TabsTrigger>
            </TabsList>

            {/* Foundation Programs */}
            <TabsContent value="foundation" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#272153] mb-4">APU Foundation Programme – Full-Time</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pathway</TableHead>
                        <TableHead>Full Payment</TableHead>
                        <TableHead>Semester 1</TableHead>
                        <TableHead>Semester 2 & 3</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Computing & Technology</TableCell>
                        <TableCell>RM 27,900</TableCell>
                        <TableCell>RM 15,300</TableCell>
                        <TableCell>RM 6,900 × 2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Business, Finance & Social Sciences</TableCell>
                        <TableCell>RM 27,900</TableCell>
                        <TableCell>RM 15,300</TableCell>
                        <TableCell>RM 6,900 × 2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Architecture & Design</TableCell>
                        <TableCell>RM 28,500</TableCell>
                        <TableCell>RM 15,300</TableCell>
                        <TableCell>RM 7,200 × 2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Engineering</TableCell>
                        <TableCell>RM 19,800</TableCell>
                        <TableCell>RM 11,500</TableCell>
                        <TableCell>RM 4,700 × 2</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#272153] mb-4">
                    APU Foundation in Computing (ODL) – 100% Online
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Payment Type</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Full Programme (2 years)</TableCell>
                        <TableCell>RM 52,600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Yearly Payment</TableCell>
                        <TableCell>RM 27,100 × 2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Semester 1</TableCell>
                        <TableCell>RM 15,300</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Semesters 2–5</TableCell>
                        <TableCell>RM 10,050 × 4</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Diploma Programs */}
            <TabsContent value="diploma" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#272153] mb-4">
                    Diploma Programmes (For O-Levels / IGCSE holders)
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Available in:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ICT</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Software Engineering
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Data Informatics</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Interactive Tech</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Business Administration
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Accounting</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Business Information Tech
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        International Studies
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        Design & Media
                      </span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        Mechatronic Engineering
                      </span>
                    </div>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Payment Type</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Full Payment</TableCell>
                        <TableCell>RM 52,600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Yearly Payment</TableCell>
                        <TableCell>RM 27,100 × 2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Semester 1</TableCell>
                        <TableCell>RM 15,300</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Semesters 2–5</TableCell>
                        <TableCell>RM 10,050 × 4</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certificate Programs */}
            <TabsContent value="certificate" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#272153] mb-4">APIIT Certificate Programmes</h3>
                  <p className="text-sm text-gray-600 mb-4">Certificate in Administrative Skills / ICT</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Payment Type</TableHead>
                        <TableHead>Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Full Payment</TableCell>
                        <TableCell>RM 21,200</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Semester 1</TableCell>
                        <TableCell>RM 12,300</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Semesters 2 & 3</TableCell>
                        <TableCell>RM 4,900 × 2</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Degree Programs */}
            <TabsContent value="degree" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#272153] mb-4">
                    Degree Programmes (Fees include Course Fee + Library Fee)
                  </h3>

                  <div className="space-y-8">
                    {/* Category A */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-[#272153]">
                        Computing, Technology, Business, Finance, Psychology, Media
                      </h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Degree Level</TableHead>
                            <TableHead>Full Payment</TableHead>
                            <TableHead>Semester 1</TableHead>
                            <TableHead>Semester 2</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Level 1 (Year 1)</TableCell>
                            <TableCell>RM 33,600</TableCell>
                            <TableCell>RM 17,500</TableCell>
                            <TableCell>RM 17,500</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Level 2 (Year 2)</TableCell>
                            <TableCell>RM 34,800</TableCell>
                            <TableCell>RM 18,200</TableCell>
                            <TableCell>RM 18,200</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Level 3 (Year 3)</TableCell>
                            <TableCell>RM 36,200</TableCell>
                            <TableCell>RM 18,900</TableCell>
                            <TableCell>RM 18,900</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Category B */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-[#272153]">
                        Design, Architecture, VFX, Animation, Digital Advertising
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">Same fee structure as above category</p>
                    </div>

                    {/* Category C - Engineering */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-[#272153]">
                        Engineering (Mechatronic / Mechanical / Electrical / Petroleum)
                      </h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Degree Level</TableHead>
                            <TableHead>Full Payment</TableHead>
                            <TableHead>Semester 1</TableHead>
                            <TableHead>Semester 2</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Level 1 (Year 1)</TableCell>
                            <TableCell>RM 31,600</TableCell>
                            <TableCell>RM 16,500</TableCell>
                            <TableCell>RM 16,500</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Level 2 (Year 2)</TableCell>
                            <TableCell>RM 32,600</TableCell>
                            <TableCell>RM 17,000</TableCell>
                            <TableCell>RM 17,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Level 3 (Year 3)</TableCell>
                            <TableCell>RM 33,800</TableCell>
                            <TableCell>RM 17,600</TableCell>
                            <TableCell>RM 17,600</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Level 4 (Year 4)</TableCell>
                            <TableCell>RM 35,200</TableCell>
                            <TableCell>RM 18,400</TableCell>
                            <TableCell>RM 18,400</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Optional Add-ons */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#272153] mb-4">Optional Enhancements</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold mb-1">APU–DMU Dual Degree</h4>
                      <p className="text-sm text-gray-600 mb-1">
                        Get degrees from both APU and De Montfort University (UK)
                      </p>
                      <p className="font-medium text-[#272153]">Additional GBP 425 per level</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold mb-1">Digital Marketing Institute (DMI)</h4>
                      <p className="text-sm text-gray-600 mb-1">Professional certification</p>
                      <p className="font-medium text-[#272153]">EUR 220</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold mb-1">Chartered Management Institute (CMI)</h4>
                      <p className="text-sm text-gray-600 mb-1">Professional certification</p>
                      <p className="font-medium text-[#272153]">GBP 160</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* English Language Programs */}
            <TabsContent value="english" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#272153] mb-4">English Language Programmes</h3>
                  <p className="text-gray-600 mb-4">
                    Intensive English Language course with 7 levels to prepare you for university studies.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-lg text-[#272153]">Intensive English Language – 7 Levels</h4>
                        <p className="text-sm text-gray-600 mt-1">4 weeks per level (includes preparation book)</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#272153]">RM 2,650</p>
                        <p className="text-sm text-gray-600">per level</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Miscellaneous Fees */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold text-[#272153] mb-6">Additional Fees & Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#272153] mb-4">Initial Fees (International Students)</h3>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Registration & Admin</TableCell>
                      <TableCell className="text-right">RM 5,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Library Deposit (Refundable)</TableCell>
                      <TableCell className="text-right">RM 500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Engineering Lab Deposit (Refundable)</TableCell>
                      <TableCell className="text-right">RM 500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Personal Bond (Refundable)</TableCell>
                      <TableCell className="text-right">RM 1,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#272153] mb-4">Visa Fees</h3>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Stage 1 – Upon Offer Acceptance</TableCell>
                      <TableCell className="text-right">RM 2,650</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Stage 2 – Upon Visa Approval</TableCell>
                      <TableCell className="text-right">RM 1,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ODL Enrolment (Online)</TableCell>
                      <TableCell className="text-right">RM 2,580</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Annual Visa Renewal</TableCell>
                      <TableCell className="text-right">RM 930 – RM 1,260</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bank Details */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold text-[#272153] mb-6">Bank Transfer Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-[#272153]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#272153] mb-4">For APU Programmes</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-medium">ASIA PACIFIC UNIVERSITY SDN BHD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">USD Account:</span>
                    <span className="font-medium">714413000532</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RM Account:</span>
                    <span className="font-medium">514413500658</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Swift Code:</span>
                    <span className="font-medium">MBBEMYKL</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#272153] mb-4">For APIIT Programmes</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-medium">APIIT SDN BHD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">USD Account:</span>
                    <span className="font-medium">714413000518</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RM Account:</span>
                    <span className="font-medium">514413500575</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Swift Code:</span>
                    <span className="font-medium">MBBEMYKL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose APU */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold text-[#272153] mb-6">Why Choose APU?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#272153] mb-2">Dual Degree Option</h3>
                <p className="text-gray-600 text-sm">
                  Graduate with degrees from both APU and De Montfort University (UK), enhancing your global career
                  prospects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-[#272153] mb-2">Industry-Ready</h3>
                <p className="text-gray-600 text-sm">
                  Curriculum designed with industry input ensuring graduates are equipped with relevant skills for the
                  modern workplace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-[#272153] mb-2">Award-Winning</h3>
                <p className="text-gray-600 text-sm">
                  Tier 5 (Excellent) rating under SETARA 2017 and multiple awards for excellence in education and
                  innovation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-[#272153] mb-2">Flexible Learning</h3>
                <p className="text-gray-600 text-sm">
                  Choose from full-time on-campus or 100% online (ODL) programs to suit your learning style and
                  schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-[#272153] mb-2">Global Recognition</h3>
                <p className="text-gray-600 text-sm">
                  Degrees recognized internationally with strong partnerships and collaborations with leading
                  institutions worldwide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-[#272153] mb-2">State-of-the-Art Facilities</h3>
                <p className="text-gray-600 text-sm">
                  Modern campus with cutting-edge technology labs, design studios, and collaborative learning spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12">
          <Card className="bg-gradient-to-br from-[#272153] to-[#373163] text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey at APU?</h2>
              <p className="text-lg mb-6 text-blue-100">
                Contact Yaz Education today to learn more about admission requirements and application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full"
                >
                  <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                    Contact via WhatsApp
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-[#272153] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
                >
                  <Link href="/#contact">Request Information</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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
