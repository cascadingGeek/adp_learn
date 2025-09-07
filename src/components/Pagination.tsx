import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) {
  // Generate pagination numbers with ellipsis
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first few pages
      pages.push(1, 2, 3, 4);

      // Add ellipsis and last pages if needed
      if (totalPages > 5) {
        pages.push("...", totalPages - 1, totalPages);
      }
    }

    return pages;
  };

  const handleGoToPage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = parseInt((e.target as HTMLInputElement).value);
      if (value >= 1 && value <= totalPages) {
        onPageChange(value);
        (e.target as HTMLInputElement).value = "";
      }
    }
  };

  return (
    <div className="flex items-center justify-between mt-8">
      {/* Items per page selector */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Show</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
        </select>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-1">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {generatePageNumbers().map((page, index) => (
            <button
              key={`${page}-${index}`}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={page === "..."}
              className={`min-w-[32px] h-8 text-sm rounded-full flex items-center justify-center gap-1 transition-all ${
                page === currentPage
                  ? "bg-indigo-600 text-white px-3"
                  : page === "..."
                  ? "text-gray-400 cursor-default"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label={
                typeof page === "number" ? `Go to page ${page}` : undefined
              }
              aria-current={page === currentPage ? "page" : undefined}
            >
              <span>{page}</span>
              {page === currentPage && <FiChevronRight className="w-3 h-3" />}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Go to page input */}
        <div className="ml-4 flex items-center gap-2 text-sm text-gray-600">
          <span>Go to</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            placeholder={currentPage.toString()}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            onKeyDown={handleGoToPage}
            aria-label="Go to page number"
          />
        </div>
      </div>
    </div>
  );
}
