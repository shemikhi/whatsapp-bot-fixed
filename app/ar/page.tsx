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

export default function ArabicPage() {
  return (
    <div className="flex min-h-screen flex-col" dir="rtl">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img src="/images/yaz-logo.jpeg" alt="شعار ياز للتعليم" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-[#272153]">ياز للتعليم</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-[#272153]">
              خدماتنا
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#272153]">
              من نحن
            </Link>
            <Link href="/universities" className="text-sm font-medium hover:text-[#272153]">
              الجامعات
            </Link>
            <Link href="/fees" className="text-sm font-medium hover:text-[#272153]">
              الرسوم
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-[#272153]">
              آراء الطلاب
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#272153]">
              اتصل بنا
            </Link>
            <Link href="/" className="text-sm font-medium hover:text-[#272153]">
              English
            </Link>
          </nav>
          <div>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                اتصل بنا
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-100 via-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-10">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#272153] mb-6">
                ابحث عن الجامعة المناسبة{" "}
                <span className="inline-block">
                  لك <span className="text-3xl">🎓</span> في ماليزيا
                </span>
              </h1>
              <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed mb-8">
                توفر ياز للتعليم إرشادات خبيرة للطلاب الذين يسعون للحصول على تعليم عالي الجودة في ماليزيا. دعنا نساعدك
                في رحلتك التعليمية.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-3xl bg-white p-2 rounded-full shadow-lg mb-8">
                <div className="relative">
                  <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="ابحث عن الجامعات، البرامج، الرسوم..."
                    className="pr-12 py-6 text-lg rounded-full border-none"
                  />
                  <Button className="absolute left-1 top-1/2 -translate-y-1/2 bg-[#272153] hover:bg-[#373163] rounded-full px-6 py-6">
                    بحث
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#272153] hover:bg-[#373163] rounded-full">
                  <Link href="#services">
                    خدماتنا <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-600/10 rounded-full bg-transparent"
                >
                  <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                    واتساب
                  </Link>
                </Button>
              </div>
            </div>

            {/* Education Level Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-12">
              <Link href="/universities?level=foundation" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">السنة التحضيرية</div>
                </div>
              </Link>
              <Link href="/universities?level=a-level" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">المستوى A</div>
                </div>
              </Link>
              <Link href="/universities?level=diploma" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">الدبلوم</div>
                </div>
              </Link>
              <Link href="/universities?level=bachelor" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">البكالوريوس</div>
                </div>
              </Link>
              <Link href="/universities?level=master" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">الماجستير</div>
                </div>
              </Link>
              <Link href="/universities?level=phd" className="group">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="text-[#272153] font-medium group-hover:text-[#373163]">الدكتوراه</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  خدماتنا
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">حلول تعليمية شاملة</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  نقدم مجموعة واسعة من الخدمات لمساعدة الطلاب على تحقيق أهدافهم التعليمية في ماليزيا وخارجها.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <GraduationCap className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">القبول الجامعي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    إرشادات خبيرة حول اختيار الجامعة وعملية التقديم ومتطلبات القبول للمؤسسات الماليزية والدولية.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <BookOpen className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">برامج الدراسة في الخارج</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    دعم شامل للطلاب الراغبين في الدراسة في الخارج، بما في ذلك المساعدة في التأشيرة والسكن والتوجيه قبل
                    المغادرة.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <Users className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">الإرشاد المهني</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    إرشاد مهني مخصص لمساعدة الطلاب على اتخاذ قرارات مستنيرة بشأن مساراتهم الأكاديمية والمهنية.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <LocateFixed className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">المساعدة في التأشيرة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    دعم كامل مع طلبات تأشيرة الطالب والوثائق والتحضير للمقابلة للدراسة في ماليزيا.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <Star className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">إرشادات المنح الدراسية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    معلومات ومساعدة في طلبات المنح الدراسية للمساعدة في تمويل تعليمك في ماليزيا ودوليًا.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#272153]/10 flex items-center justify-center mb-4 dark:bg-[#272153]/30">
                    <MapPin className="h-6 w-6 text-[#272153]" />
                  </div>
                  <CardTitle className="text-[#272153]">خدمات السكن</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    المساعدة في العثور على خيارات سكن مناسبة وبأسعار معقولة بالقرب من مؤسستك التعليمية المختارة في
                    كوالالمبور وخارجها.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] flex items-center justify-center order-2 lg:order-1">
                <div className="bg-[#272153] text-white p-8 rounded-xl text-center">
                  <div className="text-5xl font-bold mb-2">KL</div>
                  <div className="text-xl">كوالالمبور</div>
                  <div className="mt-4 text-sm">عاصمة التعليم في ماليزيا</div>
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  من نحن
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#272153]">
                  لماذا تختار ياز للتعليم؟
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  مع سنوات من الخبرة في قطاع التعليم، ساعدنا آلاف الطلاب على تحقيق أحلامهم الأكاديمية في ماليزيا
                  والخارج.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="ml-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>مستشارون خبراء بمعرفة عميقة بنظام التعليم الماليزي</span>
                  </li>
                  <li className="flex items-center">
                    <div className="ml-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>شراكات مع أفضل الجامعات والكليات في ماليزيا</span>
                  </li>
                  <li className="flex items-center">
                    <div className="ml-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>إرشادات مخصصة تناسب أهدافك الأكاديمية</span>
                  </li>
                  <li className="flex items-center">
                    <div className="ml-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>دعم شامل من التقديم إلى التخرج</span>
                  </li>
                  <li className="flex items-center">
                    <div className="ml-2 h-4 w-4 text-[#272153]">✓</div>
                    <span>معدل نجاح عالٍ في القبول الجامعي</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="#contact">اتصل بنا اليوم</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="universities"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-bl from-blue-50 via-purple-50 to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  الجامعات الشريكة
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">
                  أفضل الجامعات الماليزية
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  نتعاون مع المؤسسات التعليمية الرائدة في ماليزيا لتزويدك بأفضل الفرص.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-8 mb-10">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="ابحث عن الجامعات، البرامج، الرسوم..."
                  className="pr-10 py-6 text-lg rounded-lg border-gray-300 shadow-sm"
                />
              </div>
              <p className="text-center mt-2 text-gray-500">
                <Link href="/universities" className="text-[#272153] hover:underline">
                  عرض جميع الجامعات والبرامج
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
                      alt="شعار جامعة تايلورز"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة تايلورز</span>
                </div>
              </Link>

              <Link href="/universities/newcastle-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/newcastle-university.png"
                      alt="شعار جامعة نيوكاسل للطب ماليزيا"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة نيوكاسل</span>
                </div>
              </Link>

              <Link href="/universities/asia-pacific-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/apu-logo.png"
                      alt="شعار جامعة آسيا باسيفيك"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة آسيا باسيفيك</span>
                </div>
              </Link>

              <Link href="/universities/help-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/help-university.png"
                      alt="شعار جامعة هيلب"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة هيلب</span>
                </div>
              </Link>

              <Link href="/universities/imu" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/imu.png"
                      alt="شعار الجامعة الطبية الدولية"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    الجامعة الطبية الدولية
                  </span>
                </div>
              </Link>

              <Link href="/universities/infrastructure-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/infrastructure-university.png"
                      alt="شعار جامعة البنية التحتية"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    جامعة البنية التحتية
                  </span>
                </div>
              </Link>

              {/* Second Row */}
              <Link href="/universities/uow-malaysia" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/uow-malaysia.png"
                      alt="شعار جامعة ولونغونغ ماليزيا"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    جامعة ولونغونغ ماليزيا
                  </span>
                </div>
              </Link>

              <Link href="/universities/msu" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/msu.png"
                      alt="شعار جامعة الإدارة والعلوم"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    جامعة الإدارة والعلوم
                  </span>
                </div>
              </Link>

              <Link href="/universities/multimedia-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/mmu-logo.png"
                      alt="شعار جامعة الوسائط المتعددة"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    جامعة الوسائط المتعددة
                  </span>
                </div>
              </Link>

              <Link href="/universities/sunway-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/sunway-university.png"
                      alt="شعار جامعة صنواي"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة صنواي</span>
                </div>
              </Link>

              <Link href="/universities/ucsi-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/ucsi-university.png"
                      alt="شعار جامعة يو سي إس آي"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة يو سي إس آي</span>
                </div>
              </Link>

              <Link href="/universities/university-of-cyberjaya" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/cyberjaya-university.png"
                      alt="شعار جامعة سايبرجايا"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة سايبرجايا</span>
                </div>
              </Link>

              {/* Third Row */}
              <Link href="/universities/utp" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/utp.png"
                      alt="شعار جامعة بتروناس التكنولوجية"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    جامعة بتروناس التكنولوجية
                  </span>
                </div>
              </Link>

              <Link href="/universities/unimy" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/unimy.png"
                      alt="شعار جامعة يونيمي"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة يونيمي</span>
                </div>
              </Link>

              <Link href="/universities/curtin-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/curtin-university.png"
                      alt="شعار جامعة كيرتن ماليزيا"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">
                    جامعة كيرتن ماليزيا
                  </span>
                </div>
              </Link>

              <Link href="/universities/monash-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/monash-university.png"
                      alt="شعار جامعة موناش"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة موناش</span>
                </div>
              </Link>

              <Link href="/universities/swinburne-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/swinburne-university.png"
                      alt="شعار جامعة سوينبيرن"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة سوينبيرن</span>
                </div>
              </Link>

              <Link href="/universities/heriot-watt-university" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/heriot-watt-university.png"
                      alt="شعار جامعة هيريوت وات"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة هيريوت وات</span>
                </div>
              </Link>

              <Link href="/universities/universiti-kuala-lumpur" className="group">
                <div className="flex flex-col items-center gap-3 transition-all transform hover:scale-105">
                  <div className="h-20 w-32 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md">
                    <img
                      src="/images/universities/unikl-logo.png"
                      alt="شعار جامعة كوالالمبور"
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-center group-hover:text-[#272153]">جامعة كوالالمبور</span>
                </div>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-[#272153] hover:bg-[#373163] rounded-full">
                <Link href="/universities">
                  عرض جميع الجامعات <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[800px] mx-auto">
                أقامت شركتنا الاستشارية علاقات قوية مع هذه الجامعات والعديد من الجامعات الأخرى في جميع أنحاء ماليزيا.
                يمكننا مساعدتك في التنقل خلال عملية التقديم والعثور على المؤسسة المثالية لأهدافك الأكاديمية.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#272153]/5 dark:bg-[#272153]/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  اكتشف ماليزيا
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">
                  ادرس في كوالالمبور الجميلة
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  استمتع بتعليم عالمي المستوى في واحدة من أكثر مدن جنوب شرق آسيا حيوية وتعددًا ثقافيًا.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/kl-city-center.jpg"
                  alt="وسط مدينة كوالالمبور"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 text-sm text-center font-medium">وسط المدينة الحديث</p>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/kl-university-campus.jpg"
                  alt="حرم جامعي في كوالالمبور"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 text-sm text-center font-medium">حرم جامعي عالمي المستوى</p>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/kl-culture.jpg"
                  alt="تجربة ثقافية في كوالالمبور"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2 text-sm text-center font-medium">تجربة ثقافية غنية</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 dark:text-gray-400 max-w-[800px] mx-auto">
                توفر كوالالمبور للطلاب مزيجًا فريدًا من البنية التحتية الحديثة، وتكاليف المعيشة المعقولة، وبيئة آمنة. تضم
                المدينة العديد من الجامعات المصنفة عالميًا وتوفر جودة حياة ممتازة للطلاب الدوليين.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#272153] text-[#272153] hover:bg-[#272153]/10 rounded-full bg-transparent"
                >
                  <Link href="#contact">تعرف على المزيد عن حياة الطلاب في كوالالمبور</Link>
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
                  آراء الطلاب
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">ماذا يقول طلابنا</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  استمع إلى الطلاب الذين حققوا أهدافهم التعليمية بنجاح بمساعدتنا.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="/images/student-1.jpg" alt="طالب" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#272153]">أحمد م.</CardTitle>
                      <CardDescription>طالب دولي من الأردن</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "جعلت ياز للتعليم حلمي بالدراسة في ماليزيا حقيقة. كان توجيههم طوال عملية التقديم لا يقدر بثمن،
                    وساعدوني في الحصول على منحة دراسية في جامعة مرموقة في كوالالمبور."
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="/images/student-2.jpg" alt="طالبة" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#272153]">سارة ل.</CardTitle>
                      <CardDescription>طالبة ماليزية محلية</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "ساعدتني خدمات الإرشاد المهني في ياز على اختيار البرنامج المناسب لاهتماماتي وأهدافي المهنية. نهجهم
                    الشخصي واهتمامهم بالتفاصيل أحدث فرقًا كبيرًا في رحلتي التعليمية."
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="/images/student-3.jpg" alt="طالب" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#272153]">محمد ك.</CardTitle>
                      <CardDescription>طالب دراسات عليا من الإمارات</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "كنت أعاني مع طلب التأشيرة حتى وجدت ياز للتعليم. وجهني فريقهم المتخصص خلال كل خطوة، وأنا الآن أكمل
                    درجة الماجستير بنجاح في ماليزيا."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-blue-50 to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#272153]/10 px-3 py-1 text-sm text-[#272153] dark:bg-[#272153]/30">
                  اتصل بنا
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#272153]">تواصل معنا</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  هل لديك أسئلة حول خدماتنا؟ تواصل معنا اليوم واتخذ الخطوة الأولى نحو نجاحك التعليمي.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
              <Card className="transition-all hover:shadow-lg border-[#272153]/20">
                <CardHeader>
                  <CardTitle className="text-[#272153]">معلومات الاتصال</CardTitle>
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
                      60102282144+ (واتساب)
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
                    <p className="text-gray-500 dark:text-gray-400">وسط مدينة كوالالمبور، ماليزيا</p>
                  </div>
                  <div className="pt-4">
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 rounded-full" size="lg">
                      <Link href="https://wa.me/60102282144" target="_blank" rel="noopener noreferrer">
                        التواصل عبر واتساب
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <InquiryForm isArabic={true} />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 border-[#272153]/20">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <img src="/images/yaz-logo.jpeg" alt="شعار ياز للتعليم" className="w-8 h-8 object-contain" />
            <p className="text-center text-sm leading-loose text-gray-500 md:text-right">
              © 2024 ياز للتعليم. جميع الحقوق محفوظة.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-[#272153]">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#272153]">
              شروط الخدمة
            </Link>
            <Link href="/" className="text-sm font-medium hover:text-[#272153]">
              English
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
