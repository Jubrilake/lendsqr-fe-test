import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { formatDate, statusStyles } from "@/lib/utils";
import { IoFilter } from "react-icons/io5";
import { UserDataType } from "./users.model";
import UserActionsDropdown from "@/components/usersSection/UserActionDropDown";
import { parseISO, isWithinInterval, startOfDay, endOfDay } from "date-fns";
import { DateRange } from "react-day-picker";

const dateRangeFilter: FilterFn<UserDataType> = (
  row,
  columnId,
  value: DateRange
) => {
  if (!value || !value.from || !value.to) return true;
  const cellValue = row.getValue(columnId) as string;
  const dateValue = parseISO(cellValue);
  return isWithinInterval(dateValue, {
    start: startOfDay(value.from),
    end: endOfDay(value.to),
  });
};

export const columns: ColumnDef<UserDataType>[] = [
  {
    accessorKey: "organization",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-x-2 text-light_gray font-semibold cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <h1>ORGANIZATION</h1>
          <IoFilter />
        </div>
      );
    },
    cell: ({ getValue }) => {
      const organization = getValue() as string;
      return (
        <span>
          {organization.charAt(0).toUpperCase() +
            organization.slice(1).toLowerCase()}
        </span>
      ); // Convert to normal case
    },
  },

  {
    accessorKey: "userName",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-x-2 text-light_gray font-semibold cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <h1>USERNAME</h1> <IoFilter />
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-x-2 text-light_gray font-semibold cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <h1>EMAIL</h1> <IoFilter />
        </div>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-x-2 text-light_gray font-semibold cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <h1>PHONE NUMBER</h1> <IoFilter />
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <div
        className="flex items-center gap-x-2 text-light_gray font-semibold cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <h1>DATE</h1> <IoFilter />
      </div>
    ),
    cell: ({ getValue }) => {
      const date = getValue() as string;
      return <span>{formatDate(date)}</span>;
    },
    filterFn: dateRangeFilter,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <div
        className="flex items-center gap-x-2 text-light_gray font-semibold cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <h1>STATUS</h1> <IoFilter />
      </div>
    ),
    cell: ({ getValue }) => {
      const status = getValue() as string;
      const styles = statusStyles(status);
      return (
        <span className={`px-2 py-1 rounded-full ${styles}`}>{status}</span>
      );
    },
    filterFn: "equals",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return <UserActionsDropdown userId={user.id} />;
    },
  },
];
