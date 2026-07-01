'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Trash2, Send } from 'lucide-react'

interface Comment {
  id: string
  name: string
  message: string
  created_at: string
}

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [fetchingComments, setFetchingComments] = useState(true)
  const supabase = createClient()

  // Fetch comments on mount
  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      setFetchingComments(true)
      const { data, error } = await supabase
        .from('comments')
        .select('id, name, message, created_at')
        .order('created_at', { ascending: false })
        .limit(50)

      if (error) throw error
      setComments(data || [])
    } catch (error) {
      console.error('Error fetching comments:', error)
    } finally {
      setFetchingComments(false)
    }
  }

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('comments')
        .insert([{ name, message }])
        .select()

      if (error) throw error
      
      if (data) {
        setComments([data[0], ...comments])
        setName('')
        setMessage('')
      }
    } catch (error) {
      console.error('Error adding comment:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteComment = async (id: string) => {
    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', id)

      if (error) throw error
      setComments(comments.filter(c => c.id !== id))
    } catch (error) {
      console.error('Error deleting comment:', error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <section id="comments" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#272153] mb-2 text-center">Student Comments</h2>
          <p className="text-center text-gray-600 mb-8">Share your feedback and experiences with Yaz Education</p>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="bg-white rounded-lg shadow-md p-6 mb-8 border border-[#272153]/10">
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#272153] mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#272153]"
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#272153] mb-2">Your Comment</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your experience or feedback..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#272153] resize-none"
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              disabled={loading || !name.trim() || !message.trim()}
              className="w-full bg-[#272153] hover:bg-[#272153]/90 text-white flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {loading ? 'Posting...' : 'Post Comment'}
            </Button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {fetchingComments ? (
              <div className="text-center py-8 text-gray-500">Loading comments...</div>
            ) : comments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No comments yet. Be the first to share your feedback!</div>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white rounded-lg shadow-sm p-5 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-[#272153]">{comment.name}</h3>
                      <p className="text-sm text-gray-500">{formatDate(comment.created_at)}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete comment"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-gray-700">{comment.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
