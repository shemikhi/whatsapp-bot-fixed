"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export function InquiryForm({ isArabic = false }: { isArabic?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const inquiryTypes = [
    {
      value: "university",
      labelEn: "University registration/inquiries",
      labelAr: "للتسجيل/ الاستفسار عن الجامعات",
    },
    {
      value: "english",
      labelEn: "English language institute registration/inquiries",
      labelAr: "للتسجيل / الاستفسار عن المعاهد للغة الانجليزية",
    },
    {
      value: "consultation",
      labelEn: "Educational consultations",
      labelAr: "الاستشارات التعليمية",
    },
    {
      value: "accommodation",
      labelEn: "Assistance in finding accommodation",
      labelAr: "مساعدة في ايجاد سكن",
    },
    {
      value: "summer",
      labelEn: "Inquiry about the summer camp",
      labelAr: "الاستعلام عن المخيم الصيفي",
    },
    {
      value: "attestation",
      labelEn: "Certificate attestation",
      labelAr: "تصديق الشهادات",
    },
    {
      value: "advisor",
      labelEn: 'Consult advisor "Yazan"',
      labelAr: 'التحدث مع المستشار "يزن"',
    },
    {
      value: "other",
      labelEn: "Others",
      labelAr: "اخرى",
    },
  ]

  if (isSubmitted) {
    return (
      <Card className={isArabic ? "text-right" : ""}>
        <CardHeader>
          <CardTitle className="text-green-600">
            {isArabic ? "تم إرسال استفسارك بنجاح!" : "Inquiry Submitted Successfully!"}
          </CardTitle>
          <CardDescription>
            {isArabic
              ? "شكرًا لك على التواصل معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن."
              : "Thank you for reaching out. Our team will get back to you as soon as possible."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <CheckCircle2 className="h-16 w-16 text-green-600" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={isArabic ? "text-right" : ""}>
      <CardHeader>
        <CardTitle>{isArabic ? "نموذج الاستفسار" : "Inquiry Form"}</CardTitle>
        <CardDescription>
          {isArabic
            ? "يرجى ملء النموذج أدناه وسنتواصل معك في أقرب وقت ممكن."
            : "Please fill out the form below and we'll get back to you as soon as possible."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{isArabic ? "الاسم الكامل" : "Full Name"}</Label>
              <Input id="name" required placeholder={isArabic ? "أدخل اسمك الكامل" : "Enter your full name"} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{isArabic ? "رقم الهاتف" : "Phone Number"}</Label>
              <Input id="phone" required placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">{isArabic ? "البلد" : "Country"}</Label>
              <Input id="country" required placeholder={isArabic ? "أدخل بلدك" : "Enter your country"} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>{isArabic ? "نوع الاستفسار" : "Inquiry Type"}</Label>
            <RadioGroup defaultValue="university" className="space-y-2">
              {inquiryTypes.map((type) => (
                <div key={type.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={type.value} id={type.value} />
                  <Label htmlFor={type.value} className={isArabic ? "mr-2" : "ml-2"}>
                    {isArabic ? type.labelAr : type.labelEn}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{isArabic ? "رسالتك" : "Your Message"}</Label>
            <Textarea
              id="message"
              required
              placeholder={isArabic ? "اكتب رسالتك هنا..." : "Type your message here..."}
              rows={5}
            />
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isArabic ? "جاري الإرسال..." : "Submitting..."}
              </>
            ) : isArabic ? (
              "إرسال الاستفسار"
            ) : (
              "Submit Inquiry"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
