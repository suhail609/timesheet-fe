"use client"

import { useState, useMemo } from "react"

interface UsePaginationProps<T> {
  data: T[]
  itemsPerPage?: number
}

export function usePagination<T>({ data, itemsPerPage = 10 }: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const paginatedData = useMemo(() => {
    return data.slice(startIndex, endIndex)
  }, [data, startIndex, endIndex])

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const resetPagination = () => {
    setCurrentPage(1)
  }

  return {
    currentPage,
    totalPages,
    paginatedData,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    resetPagination,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
    totalItems: data.length,
    startIndex: startIndex + 1,
    endIndex: Math.min(endIndex, data.length),
  }
}
