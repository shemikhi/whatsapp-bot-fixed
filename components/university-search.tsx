"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

interface SearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function UniversitySearch({ onSearch, placeholder = "Search universities, programs, fees..." }: SearchProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input type="search" placeholder={placeholder} className="pl-10 w-full" value={query} onChange={handleSearch} />
    </div>
  )
}
