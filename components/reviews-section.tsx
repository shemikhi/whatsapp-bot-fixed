'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Star } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface Review {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
  country?: string
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
    rating: 5,
  })

  const supabase = createClient()

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('comments')
        .select('id, name, message, rating, created_at, country')
        .eq('approved', true)
        .order('created_at', { ascending: false })
        .limit(6)

      if (error) throw error
      setReviews(data || [])
    } catch (error) {
      console.error('Error fetching reviews:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    try {
      setSubmitting(true)
      const { error } = await supabase
        .from('comments')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            country: formData.country,
            message: formData.message,
            rating: formData.rating,
            approved: true,
          },
        ])

      if (error) throw error

      // Reset form
      setFormData({
        name: '',
        email: '',
        country: '',
        message: '',
        rating: 5,
      })

      // Refresh reviews
      fetchReviews()
      alert('Thank you for your review!')
    } catch (error) {
      console.error('Error submitting review:', error)
      alert('Failed to submit review. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#272153] sm:text-4xl md:text-5xl">
              Student Reviews & Feedback
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Read what students and families say about their experience with Yaz Education
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">Loading reviews...</p>
              </div>
            ) : reviews.length > 0 ? (
              reviews.map((review) => (
                <Card key={review.id} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                          {review.name}
                        </CardTitle>
                        {review.country && (
                          <CardDescription className="text-sm">
                            {review.country}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                    <div className="pt-2">{renderStars(review.rating)}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{review.message}</p>
                    <p className="text-xs text-gray-400 mt-3">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
              </div>
            )}
          </div>

          {/* Review Form */}
          <Card className="bg-gradient-to-br from-[#272153]/5 to-transparent border-[#272153]/20">
            <CardHeader>
              <CardTitle className="text-[#272153]">Share Your Review</CardTitle>
              <CardDescription>Tell us about your experience with Yaz Education</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name *</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Country</label>
                  <Input
                    placeholder="Your country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 cursor-pointer transition-colors ${
                            star <= formData.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300 hover:text-yellow-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Your Review *</label>
                  <Textarea
                    placeholder="Share your experience with Yaz Education..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 min-h-24"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#272153] hover:bg-[#272153]/90 text-white rounded-full"
                  size="lg"
                >
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
