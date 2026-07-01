'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Trash2, Send, Star } from 'lucide-react'

interface Feedback {
  id: string
  name: string
  email: string
  message: string
  rating: number
  created_at: string
}

export function FeedbackSection() {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5,
  })

  // Load feedback from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('feedback')
    if (stored) {
      try {
        setFeedback(JSON.parse(stored))
      } catch (err) {
        console.log('[v0] Error loading feedback from storage')
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingChange = (newRating: number) => {
    setFormData(prev => ({
      ...prev,
      rating: newRating
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in name and message')
      return
    }

    try {
      setSubmitting(true)
      
      // Create new feedback object
      const newFeedback: Feedback = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        rating: formData.rating,
        created_at: new Date().toISOString(),
      }

      // Add to local state
      const updatedFeedback = [newFeedback, ...feedback]
      setFeedback(updatedFeedback)

      // Save to localStorage
      localStorage.setItem('feedback', JSON.stringify(updatedFeedback))

      // Show success message
      setSuccessMessage('Thank you for your feedback!')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        rating: 5,
      })

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000)
      setSubmitting(false)
    } catch (err) {
      console.error('Error submitting feedback:', err)
      alert('Error submitting feedback. Please try again.')
      setSubmitting(false)
    }
  }

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this feedback?')) return

    try {
      const updatedFeedback = feedback.filter(item => item.id !== id)
      setFeedback(updatedFeedback)
      localStorage.setItem('feedback', JSON.stringify(updatedFeedback))
    } catch (err) {
      console.error('Error deleting feedback:', err)
      alert('Failed to delete feedback')
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#272153]/5 to-transparent">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#272153] mb-4">
              Student Feedback
            </h2>
            <p className="text-gray-600 text-lg">
              Share your experience with Yaz Education
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Feedback Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-[#272153]/10">
                <h3 className="text-xl font-bold text-[#272153] mb-4">
                  Leave Your Feedback
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-[#272153]/20"
                      disabled={submitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-[#272153]/20"
                      disabled={submitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          disabled={submitting}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            size={24}
                            className={`${
                              star <= formData.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Feedback *
                    </label>
                    <Textarea
                      placeholder="Share your thoughts..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-[#272153]/20 min-h-[120px]"
                      disabled={submitting}
                    />
                  </div>

                  {successMessage && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm">
                      {successMessage}
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Send size={18} className="mr-2" />
                    {submitting ? 'Submitting...' : 'Submit Feedback'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Feedback List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-[#272153]/10">
                <h3 className="text-xl font-bold text-[#272153] mb-4">
                  Recent Feedback ({feedback.length})
                </h3>

                {feedback.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    No feedback yet. Be the first to share!
                  </p>
                ) : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {feedback.map((item) => (
                      <div
                        key={item.id}
                        className="border border-[#272153]/10 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold text-[#272153]">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {new Date(item.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors p-1"
                            title="Delete feedback"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="mb-2">
                          {renderStars(item.rating)}
                        </div>

                        <p className="text-gray-700">{item.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
