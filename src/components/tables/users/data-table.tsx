/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { IoFilter } from "react-icons/io5";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FilterForm from "./UserFilter";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<
    { id: string; value: any }[]
  >([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const handleFilter = (filters: Record<string, any>) => {
    const newColumnFilters = Object.entries(filters)
      .filter(([value]) => value !== undefined && value !== "")
      .map(([id, value]) => ({ id, value }));
    setColumnFilters(newColumnFilters);
  };

  // Get unique organizations from the data
  const organizations = React.useMemo(() => {
    // @ts-expect-error ignore
    return Array.from(new Set(data.map((item) => item.organization)));
  }, [data]);

  return (
    <>
      <div className="flex justify-end mb-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-primary text-white font-worksans text-sm font-medium flex items-center justify-center gap-2 px-4 py-6 rounded-md">
              <span>Filter</span>
              <IoFilter />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 mr-5">
            <FilterForm
              onFilter={handleFilter}
              organizations={organizations}
              initialFilters={Object.fromEntries(
                columnFilters.map((filter) => [filter.id, filter.value])
              )}
            />
          </PopoverContent>
        </Popover>
        {/* <UserFilter /> */}
      </div>
      <div className="rounded-md border shadow-md border-gray-100 bg-white p-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  const isMobileHidden = index >= 2; // Only show the first two columns and action column on mobile
                  const isActionColumn = header.column.id === "actions"; // Assuming the column for actions is named "actions"

                  return (
                    <TableHead
                      key={header.id}
                      className={`border-b border-gray-100 ${
                        isMobileHidden && !isActionColumn
                          ? "hidden lg:table-cell"
                          : "table-cell"
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    const isMobileHidden = index >= 2;
                    const isActionColumn = cell.column.id === "actions";

                    return (
                      <TableCell
                        className={`align-baseline ${
                          isMobileHidden && !isActionColumn
                            ? "hidden lg:table-cell"
                            : "table-cell"
                        }`}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex flex-wrap items-center justify-between pt-6 gap-4">
          {/* First Section - Showing Entries */}
          <div className="w-full lg:w-fit flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left">
            <div className="text-sm font-medium">
              Showing {table.getState().pagination.pageIndex + 1} -{" "}
              {table.getFilteredRowModel().rows.length < table.getPageCount()
                ? table.getFilteredRowModel().rows.length
                : table.getPageCount()}{" "}
              out of {table.getFilteredRowModel().rows.length} entries
            </div>

            <div className="text-sm text-muted-foreground text-right mt-2 lg:mt-0 lg:ml-4">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
          </div>

          {/* Second Section - Pagination Controls */}
          <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-end items-center space-x-2">
            <Button
              variant="outline"
              className="h-8 w-8 p-0 lg:flex hidden"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-1">
              {(() => {
                const pageCount = table.getPageCount();
                const currentPage = table.getState().pagination.pageIndex;
                const range = 2;
                const pagesToShow = [];

                if (currentPage > 0) {
                  pagesToShow.push(0);
                }

                if (currentPage > range + 1) {
                  pagesToShow.push("...");
                }

                for (
                  let i = Math.max(0, currentPage - range);
                  i <= Math.min(pageCount - 1, currentPage + range);
                  i++
                ) {
                  pagesToShow.push(i);
                }

                if (currentPage < pageCount - range - 1) {
                  pagesToShow.push("...");
                }

                if (currentPage < pageCount - 1) {
                  pagesToShow.push(pageCount - 1);
                }

                return pagesToShow.map((item, index) => {
                  return typeof item === "number" ? (
                    <Button
                      key={index}
                      onClick={() => table.setPageIndex(item)}
                      variant={item === currentPage ? "default" : "outline"}
                      className="h-8 w-8 p-0"
                    >
                      {item + 1}
                    </Button>
                  ) : (
                    <span key={index} className="h-8 p-0 flex items-center">
                      {item}
                    </span>
                  );
                });
              })()}
            </div>

            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-8 w-8 p-0 lg:flex hidden"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
