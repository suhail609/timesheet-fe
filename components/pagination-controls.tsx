"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  totalItems: number
  startIndex: number
  endIndex: number
  onPageChange: (page: number) => void
  onNextPage: () => void
  onPreviousPage: () => void
  hasNextPage: boolean
  hasPreviousPage: boolean
  itemsPerPage?: number
  onItemsPerPageChange?: (itemsPerPage: number) => void
}

export function PaginationControls({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
  onNextPage,
  onPreviousPage,
  hasNextPage,
  hasPreviousPage,
  itemsPerPage = 10,
  onItemsPerPageChange,
}: PaginationControlsProps) {
  const renderPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault()
                onPageChange(i)
              }}
              isActive={currentPage === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }
    } else {
      // Show first page
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink
            onClick={(e) => {
              e.preventDefault()
              onPageChange(1)
            }}
            isActive={currentPage === 1}
            className="cursor-pointer"
          >
            1
          </PaginationLink>
        </PaginationItem>,
      )

      // Show ellipsis if needed
      if (currentPage > 3) {
        pages.push(
          <PaginationItem key="ellipsis1">
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault()
                onPageChange(i)
              }}
              isActive={currentPage === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - 2) {
        pages.push(
          <PaginationItem key="ellipsis2">
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }

      // Show last page
      if (totalPages > 1) {
        pages.push(
          <PaginationItem key={totalPages}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault()
                onPageChange(totalPages)
              }}
              isActive={currentPage === totalPages}
              className="cursor-pointer"
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>,
        )
      }
    }

    return pages
  }

  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="flex items-center space-x-2">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex} to {endIndex} of {totalItems} entries
        </p>
        {onItemsPerPageChange && (
          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">Rows per page:</p>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => onItemsPerPageChange(Number.parseInt(value))}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent side="top">
                {[5, 10, 20, 30, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize.toString()}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault()
                onPreviousPage()
              }}
              className={hasPreviousPage ? "cursor-pointer" : "cursor-not-allowed opacity-50"}
            />
          </PaginationItem>

          {renderPageNumbers()}

          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault()
                onNextPage()
              }}
              className={hasNextPage ? "cursor-pointer" : "cursor-not-allowed opacity-50"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
