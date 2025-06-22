"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Check, X, Edit } from "lucide-react"

interface InlineEditCellProps {
  value: string | number
  onSave: (value: string | number) => void
  type?: "text" | "number" | "textarea" | "select"
  options?: { value: string; label: string }[]
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function InlineEditCell({
  value,
  onSave,
  type = "text",
  options = [],
  placeholder,
  disabled = false,
  className = "",
}: InlineEditCellProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value.toString())
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setEditValue(value.toString())
  }, [value])

  useEffect(() => {
    if (isEditing) {
      if (type === "textarea" && textareaRef.current) {
        textareaRef.current.focus()
        textareaRef.current.select()
      } else if (inputRef.current) {
        inputRef.current.focus()
        inputRef.current.select()
      }
    }
  }, [isEditing, type])

  const handleSave = () => {
    if (type === "number") {
      const numValue = Number.parseFloat(editValue)
      if (!isNaN(numValue)) {
        onSave(numValue)
      }
    } else {
      onSave(editValue)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(value.toString())
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && type !== "textarea") {
      e.preventDefault()
      handleSave()
    } else if (e.key === "Escape") {
      handleCancel()
    }
  }

  if (disabled) {
    return <span className={className}>{value}</span>
  }

  if (!isEditing) {
    return (
      <div className={`group flex items-center gap-2 ${className}`}>
        <span className="flex-1 truncate">{value}</span>
        <Button
          variant="ghost"
          size="sm"
          className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0"
          onClick={() => setIsEditing(true)}
        >
          <Edit className="h-3 w-3" />
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1">
      {type === "select" ? (
        <Select value={editValue} onValueChange={setEditValue}>
          <SelectTrigger className="h-8 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : type === "textarea" ? (
        <Textarea
          ref={textareaRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="min-h-[60px] text-xs"
          rows={2}
        />
      ) : (
        <Input
          ref={inputRef}
          type={type}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="h-8 text-xs"
          step={type === "number" ? "0.5" : undefined}
          min={type === "number" ? "0" : undefined}
          max={type === "number" ? "24" : undefined}
        />
      )}
      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-green-600" onClick={handleSave}>
        <Check className="h-3 w-3" />
      </Button>
      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-600" onClick={handleCancel}>
        <X className="h-3 w-3" />
      </Button>
    </div>
  )
}
