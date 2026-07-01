import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FeesPage() {
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
            <Link href="/#universities" className="text-sm font-medium hover:text-[#272153]">
              Universities
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-[#272153]">
              Testimonials
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
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#272153] mb-4">
            International Student Fee Structure - 2024
          </h1>
          <p className="text-gray-500 max-w-[800px]">
            Comprehensive fee information for international students interested in studying at University of Cyberjaya.
          </p>
        </div>

        <div className="space-y-10">
          {/* Administrative Fees */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">Administrative Fees</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 pr-4">International Student Processing Fee</td>
                    <td className="py-3 font-medium">RM 1,500.00 (Non-refundable)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Visa Application Fee (EMGS)</td>
                    <td className="py-3 font-medium">RM 2,200.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Registration Fee</td>
                    <td className="py-3 font-medium">RM 2,000.00 (Non-refundable)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* English Program */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">English Program</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Level</th>
                    <th className="py-3 px-4 text-left">Duration</th>
                    <th className="py-3 px-4 text-left">Tuition Fee (RM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">English Enhancement Program (EEP)</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4">3 Months</td>
                    <td className="py-3 px-4">2,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4" rowSpan={4}>
                      IELTS Preparatory Program (IPP)
                    </td>
                    <td className="py-3 px-4">Level 1</td>
                    <td className="py-3 px-4">3 Months</td>
                    <td className="py-3 px-4">2,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Level 2</td>
                    <td className="py-3 px-4">3 Months</td>
                    <td className="py-3 px-4">2,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Level 3</td>
                    <td className="py-3 px-4">3 Months</td>
                    <td className="py-3 px-4">2,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Level 4</td>
                    <td className="py-3 px-4">3 Months</td>
                    <td className="py-3 px-4">2,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              IPP prepares students for the IELTS examination. The fees above do not include the fees to be paid to the
              external examining body. Students are required to pay the examination fee directly to the external body.
            </p>
          </section>

          {/* Foundation Studies */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">Foundation Studies</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Duration</th>
                    <th className="py-3 px-4 text-left">Administrative Fee (RM)</th>
                    <th className="py-3 px-4 text-left">Resource Fee (RM)</th>
                    <th className="py-3 px-4 text-left">Tuition Fee (RM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Foundation in Science leading to Medicine & Pharmacy</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">3,000</td>
                    <td className="py-3 px-4">2,400</td>
                    <td className="py-3 px-4">25,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Foundation in Allied Science</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">3,000</td>
                    <td className="py-3 px-4">2,400</td>
                    <td className="py-3 px-4">25,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Foundation in Arts</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">3,000</td>
                    <td className="py-3 px-4">2,400</td>
                    <td className="py-3 px-4">18,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Diploma Programs */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">Diploma Programs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Duration</th>
                    <th className="py-3 px-4 text-left">Administrative Fee (RM)</th>
                    <th className="py-3 px-4 text-left">Resource Fee (RM)</th>
                    <th className="py-3 px-4 text-left">Tuition Fee (RM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Business Administration</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">50,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Accounting</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">50,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Information Technology</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">5,400</td>
                    <td className="py-3 px-4">55,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Psychology</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">55,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Occupational Safety & Health</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">55,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Cosmetics</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">55,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Graphic Design</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,200</td>
                    <td className="py-3 px-4">45,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in 3D Animation</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,200</td>
                    <td className="py-3 px-4">45,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Digital Creative Content</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,200</td>
                    <td className="py-3 px-4">45,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Early Childhood Education</td>
                    <td className="py-3 px-4">2.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">55,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Medical and Health Science</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">7,200</td>
                    <td className="py-3 px-4">65,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Diploma in Nursing</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">7,200</td>
                    <td className="py-3 px-4">67,400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Bachelor's Degree Programs */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">Bachelor's Degree Programs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Duration</th>
                    <th className="py-3 px-4 text-left">Administrative Fee (RM)</th>
                    <th className="py-3 px-4 text-left">Resource Fee (RM)</th>
                    <th className="py-3 px-4 text-left">Tuition Fee (RM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Business Administration (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">75,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of International Business Management (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">75,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Occupational Safety & Health (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">90,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Psychology (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">76,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Information Technology (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">76,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Arts in Graphic Design (Advertising) (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">85,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Multimedia in 3D Animation (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">85,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor in Creative Multimedia (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">85,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Education in Early Childhood Education (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">76,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor Of Education in Teaching English as A Second Language (Hons)</td>
                    <td className="py-3 px-4">3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">76,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Accounting and Finance (Hons)</td>
                    <td className="py-3 px-4">3.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">10,250</td>
                    <td className="py-3 px-4">76,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Biomedical Engineering Technology (Hons)</td>
                    <td className="py-3 px-4">4 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">12,000</td>
                    <td className="py-3 px-4">84,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Dietetics (Hons)</td>
                    <td className="py-3 px-4">4 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">12,000</td>
                    <td className="py-3 px-4">165,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Nursing (Hons)</td>
                    <td className="py-3 px-4">4 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">12,000</td>
                    <td className="py-3 px-4">100,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Physiotherapy (Hons)</td>
                    <td className="py-3 px-4">4 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">12,000</td>
                    <td className="py-3 px-4">120,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Pharmacy (Hons)</td>
                    <td className="py-3 px-4">4 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">12,000</td>
                    <td className="py-3 px-4">150,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Homeopathic Medical Science (Hons)</td>
                    <td className="py-3 px-4">5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">15,000</td>
                    <td className="py-3 px-4">76,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Bachelor of Medicine & Bachelor of Surgery (MBBS)</td>
                    <td className="py-3 px-4">5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">15,000</td>
                    <td className="py-3 px-4">450,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Postgraduate Programs */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">Postgraduate Programs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Duration</th>
                    <th className="py-3 px-4 text-left">Administrative Fee (RM)</th>
                    <th className="py-3 px-4 text-left">Resource Fee (RM)</th>
                    <th className="py-3 px-4 text-left">Tuition Fee (RM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Clinical Pharmacy (By Coursework)</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">3,000</td>
                    <td className="py-3 px-4">45,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Science in Public Health (Global Health)</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">3,000</td>
                    <td className="py-3 px-4">50,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Business Administration (MBA)</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">3,000</td>
                    <td className="py-3 px-4">35,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Business Administration (MBA - ODL)</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">5,000</td>
                    <td className="py-3 px-4">1,800</td>
                    <td className="py-3 px-4">35,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Business Data Science</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">3,000</td>
                    <td className="py-3 px-4">45,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master in Islamic Finance</td>
                    <td className="py-3 px-4">1 Year</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">3,000</td>
                    <td className="py-3 px-4">45,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Physiotherapy</td>
                    <td className="py-3 px-4">1.5 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">4,500</td>
                    <td className="py-3 px-4">35,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Clinical Psychology</td>
                    <td className="py-3 px-4">23 Months</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">5,750</td>
                    <td className="py-3 px-4">82,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Science in Occupational Safety and Health Management</td>
                    <td className="py-3 px-4">2 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">50,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Pharmaceutical Sciences (By Research)</td>
                    <td className="py-3 px-4">Min 2 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">32,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Science (By Research)</td>
                    <td className="py-3 px-4">Min 2 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">35,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Master of Medical Sciences (By Research)</td>
                    <td className="py-3 px-4">Min 2 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">27,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Doctor of Pharmacy (PharmD)</td>
                    <td className="py-3 px-4">2 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">6,000</td>
                    <td className="py-3 px-4">52,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Doctor of Philosophy (PhD)</td>
                    <td className="py-3 px-4">Min 3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">37,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Doctor of Philosophy (PhD) in Medical Sciences</td>
                    <td className="py-3 px-4">Min 3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">35,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Doctor of Philosophy (PhD) in Pharmaceutical Sciences</td>
                    <td className="py-3 px-4">Min 3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">52,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Doctor of Philosophy (PhD) in Management</td>
                    <td className="py-3 px-4">Min 3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">40,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Doctor of Business Administration</td>
                    <td className="py-3 px-4">Min 3 Years</td>
                    <td className="py-3 px-4">8,000</td>
                    <td className="py-3 px-4">9,000</td>
                    <td className="py-3 px-4">50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Terms & Conditions */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">Terms & Conditions</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Payments can be made by telegraphic transfer or bank draft payable to 'UOC SDN. BHD.'</li>
              <li>
                Please note that International Student Processing, Registration, & Administrative Fees for International
                Students are NON-REFUNDABLE at any circumstances.
              </li>
              <li>Initial payment is RM 3,700.00 (International Student Processing & Visa Application Fees).</li>
              <li>
                Initial payment for the MBBS program is RM 14,000.00 (International Student Processing, Registration,
                Visa Application, Administration, and Part of the 1st Semester Tuition Fees).
              </li>
              <li>
                The information provided in this fee structure is correct at the time of printing and UoC reserves the
                right to make any changes that are deemed necessary.
              </li>
              <li>
                All fees are to be paid before the start of the academic year or in accordance with the payment
                structure as approved by the university failing which the UoC has the right to terminate the students.
              </li>
              <li>All fees are payable in Malaysian Ringgit (MYR).</li>
              <li>
                Students shall refer to the 'International Student Financial Handbook Policy' for additional Terms &
                Conditions and must abide by the terms and conditions stated therein.
              </li>
            </ol>
          </section>

          {/* Banking Details */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">Banking Details</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Beneficiary Name:</p>
                  <p>UOC SDN. BHD.</p>
                </div>
                <div>
                  <p className="font-medium">Beneficiary Bank:</p>
                  <p>Malayan Banking Berhad</p>
                </div>
                <div>
                  <p className="font-medium">Account No:</p>
                  <p>5686 - 0302 - 8978</p>
                </div>
                <div>
                  <p className="font-medium">Swift Code:</p>
                  <p>MBBEMYKL</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-medium">Bank Address:</p>
                <p>
                  No. P1-13, Shaftsbury Square, Lot No. 2350 Cyber 6, Persiaran Multimedia, 63000, Cyberjaya, Selangor,
                  Malaysia.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Details */}
          <section>
            <h2 className="text-2xl font-bold text-[#272153] mb-4">Contact Details</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">International Student Recruitment Department</p>
              <p>Contact No: +603 8313 7000</p>
              <p>
                Email:{" "}
                <a href="mailto:isr@cyberjaya.edu.my" className="text-[#272153] hover:underline">
                  isr@cyberjaya.edu.my
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-500">Updated on 12th January 2024</p>
            </div>
          </section>

          <div className="mt-8 flex justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/#contact">Contact Yaz Education for Assistance</Link>
            </Button>
          </div>
        </div>
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
