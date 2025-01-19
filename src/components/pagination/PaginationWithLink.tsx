import { type ReactNode, useCallback } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/@core/components/ui/Pagination";
import { cn } from "@/utils/cn";
import { useLocation } from "@tanstack/react-router";

export interface PaginationWithLinksProps {
  pageSizeSelectOptions?: {
    pageSizeSearchParam?: string;
    pageSizeOptions: number[];
  };
  totalCount: number;
  pageSize: number;
  page?: number;
  pageSearchParam?: string;
}

/**
 * Navigate with Nextjs links (need to update your own `pagination.tsx` to use Nextjs Link)
 * 
 * @example
 * ```
 * <PaginationWithLinks
    page={1}
    pageSize={20}
    totalCount={500}
  />
 * ```
 */
export function PaginationWithLinks({
  pageSize,
  totalCount,
  pageSearchParam,
}: PaginationWithLinksProps) {
  const { search: searchParams, pathname } = useLocation();
  const { page = 1 } = searchParams as {
    page: number;
  };

  const totalPageCount = Math.ceil(totalCount / pageSize);

  const buildLink = useCallback(
    (newPage: number) => {
      const key = pageSearchParam || "page";
      if (Object.keys(searchParams)?.length === 0) {
        return {
          to: pathname as any,
          search: {
            [key]: newPage,
          },
        };
      }

      const newSearchParams = {
        ...searchParams,
        [key]: newPage,
      };
      return {
        to: pathname as any,
        search: newSearchParams,
      };
    },
    [searchParams, pathname],
  );

  // const navToPageSize = useCallback(
  //   (newPageSize: number) => {
  //     const key = pageSizeSelectOptions?.pageSizeSearchParam || "pageSize";
  //     const newSearchParams = new URLSearchParams(searchParams || undefined);
  //     newSearchParams.set(key, String(newPageSize));
  //     newSearchParams.delete(pageSearchParam || "page");
  //     router.navigate({
  //       to: pathname,
  //       search: newSearchParams.toString(),
  //     });
  //   },
  //   [searchParams, pathname],
  // );

  const renderPageNumbers = () => {
    const items: ReactNode[] = [];
    const maxVisiblePages = 2;

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={page === i} {...buildLink(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink {...buildLink(1)} isActive={page === 1}>
            1
          </PaginationLink>
        </PaginationItem>,
      );

      if (page > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPageCount - 1, page + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink {...buildLink(i)} isActive={page === i}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }

      if (page < totalPageCount - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      items.push(
        <PaginationItem key={totalPageCount}>
          <PaginationLink
            isActive={page === totalPageCount}
            {...buildLink(totalPageCount)}
          >
            {totalPageCount}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <div className="flex w-full flex-col items-center gap-3 justify-center">
      <Pagination className="flex flex-wrap justify-center">
        <PaginationContent className="max-w-full gap-1 overflow-x-auto px-4 sm:gap-2">
          <PaginationItem>
            <PaginationPrevious
              aria-disabled={page === 1}
              className={cn(
                "p-2 text-sm",
                page === 1 && "pointer-events-none opacity-50",
              )}
              {...buildLink(Math.max(page - 1, 1))}
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              aria-disabled={page === totalPageCount}
              className={cn(
                "p-2 text-sm",
                page === totalPageCount && "pointer-events-none opacity-50",
              )}
              {...buildLink(Math.min(page + 1, totalPageCount))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

// function SelectRowsPerPage({
//   options,
//   setPageSize,
//   pageSize,
// }: {
//   options: number[];
//   setPageSize: (newSize: number) => void;
//   pageSize: number;
// }) {
//   return (
//     <div className="flex items-center gap-4">
//       <span className="whitespace-nowrap text-sm">Rows per page</span>

//       <Select value={String(pageSize)} onValueChange={(value) => setPageSize(Number(value))}>
//         <SelectTrigger>
//           <SelectValue placeholder="Select page size">{String(pageSize)}</SelectValue>
//         </SelectTrigger>
//         <SelectContent>
//           {options.map((option) => (
//             <SelectItem key={option} value={String(option)}>
//               {option}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }
