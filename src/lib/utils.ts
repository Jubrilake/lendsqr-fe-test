import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
// import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// buttonVariants.ts
export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-[#39CDCC] text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// numberFormatter.ts
export const formatNumberWithCommas = (value: number | string): string => {
  const number = typeof value === "string" ? parseFloat(value) : value;
  return number.toLocaleString("en-US");
};


// Utility function to format the date with abbreviated month (e.g., Oct)
// dateUtils.ts

// dateUtils.ts

export const formatDate = (dateString: string): string => {
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error(`Invalid date string: ${dateString}`);
    return "Invalid date"; // or any default value you prefer
  }

  // Define options for formatting
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  // Use Intl.DateTimeFormat to format the date
  return new Intl.DateTimeFormat('en-US', options).format(date);
};


// Utility function to get styles based on the status
export const statusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-100 text-green-700";
    case "inactive":
      return "bg-gray-100 text-gray-700";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "blacklisted":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};
