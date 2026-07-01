'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Trash2, Send, Star } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface Comment {
  id: string
  name: string
  email: string
  message: string
  rating: number
  created_at: string
}

export function FeedbackSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5,
  })

  const supabase = createClient()

  // Fetch comments on mount
  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        console.error('Error fetching comments:', error)
        setComments([])
      } else {
        setComments(data || [])
      }
    } catch (err) {
      console.error('Failed to fetch comments:', err)
      setComments([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }

    try {
      setSubmitting(true)
      const { error } = await supabase.from('comments').insert([
        {
          name: formData.name,
          email: formData.email || null,
          message: formData.message,
          rating: formData.rating,
          approved: true,
        },
      ])

      if (error) {
        console.error('Error submitting comment:', error)
        alert('Failed to submit feedback')
      } else {
        setFormData({ name: '', email: '', message: '', rating: 5 })
        await fetchComments()
      }
    } catch (err) {
      console.error('Failed to submit comment:', err)
      alert('Failed to submit feedback')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this feedback?')) return

    try {
      const { error } = await supabase.from('comments').delete().eq('id', id)

      if (error) {
        console.error('Error deleting comment:', error)
        alert('Failed to delete feedback')
      } else {
        await fetchComments()
      }
    } catch (err) {
      console.error('Failed to delete comment:', err)
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
                          onClick={() =>
                            setFormData({ ...formData, rating: star })
                          }
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

            {/* Comments List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-[#272153]/10">
                <h3 className="text-xl font-bold text-[#272153] mb-4">
                  Recent Feedback ({comments.length})
                </h3>

                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin">
                      <div className="h-8 w-8 border-4 border-[#272153] border-t-transparent rounded-full" />
                    </div>
                  </div>
                ) : comments.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    No feedback yet. Be the first to share!
                  </p>
                ) : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="border border-[#272153]/10 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold text-[#272153]">
                              {comment.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {new Date(comment.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <button
                            onClick={() => handleDelete(comment.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="mb-2">
                          {renderStars(comment.rating)}
                        </div>

                        <p className="text-gray-700">{comment.message}</p>
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
