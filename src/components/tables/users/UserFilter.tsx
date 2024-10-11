"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/ui/popover";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { IoFilter } from "react-icons/io5";

// Define your form schema using Zod
const formSchema = z
  .object({
    organization: z.string().optional(),
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .optional(),
    email: z.string().optional(),
    date: z.string().optional(),
    phoneNumber: z.string().optional(),
    status: z.enum(["Pending", "Active", "Inactive", "Blacklisted"]).optional(),
  })
  .refine(
    (data) => {
      return Object.values(data).some(
        (value) => value !== "" && value !== undefined
      );
    },
    {
      message: "At least one field must be filled.",
      path: [], // specify the path to attach the error message
    }
  );

// Function to get filter data from local storage
const getStoredFilterData = () => {
  const data = localStorage.getItem("filterData");
  return data
    ? JSON.parse(data)
    : {
        organization: "",
        username: "",
        email: "",
        date: "",
        phoneNumber: "",
        status: "Pending",
      }; // Default values if no data found
};

export function FilterForm() {
  // Initialize the form with useForm hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getStoredFilterData(), // Load data from local storage
  });

  // Define the submit handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data); // Handle your form submission
    localStorage.setItem("filterData", JSON.stringify(data)); // Store filter data in local storage
  };

  // Define reset handler
  const onReset = () => {
    form.reset(); // Reset form fields to default values
    localStorage.removeItem("filterData"); // Clear local storage
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center gap-x-2" variant="default">
          Filter <IoFilter />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white shadow-md">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Organization Field */}
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Org1">Organization 1</SelectItem>
                      <SelectItem value="Org2">Organization 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date Field */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number Field */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Status Field */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Blacklisted">Blacklisted</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onReset}
                className="w-full"
              >
                Reset
              </Button>
              <Button
                variant="secondary"
                type="submit"
                className="w-full text-white"
              >
                Filter
              </Button>
            </div>
          </form>
        </FormProvider>
      </PopoverContent>
    </Popover>
  );
}

export default FilterForm;
