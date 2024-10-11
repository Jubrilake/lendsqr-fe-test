import * as React from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
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
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between pt-6">
        <div className="w-fit">
          <div className="flex items-center justify-center text-sm font-medium">
            Showing {table.getState().pagination.pageIndex + 1} -{" "}
            {table.getFilteredRowModel().rows.length < table.getPageCount()
              ? table.getFilteredRowModel().rows.length
              : table.getPageCount()}{" "}
            out of {table.getFilteredRowModel().rows.length} entries
          </div>

          <div className="flex-1 text-sm text-muted-foreground text-right">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
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
                    className="h-8 border-0 w-8 p-0"
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
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
