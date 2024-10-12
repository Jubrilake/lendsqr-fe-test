import { Button } from "@/ui/button"
import { Calendar } from "@/ui/calendar"
import { Input } from "@/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { DateRange } from "react-day-picker"

interface FilterFormProps {
  onFilter: (filters: Record<string, any>) => void
  initialFilters: Record<string, any>
  organizations: string[]
}
export default function FilterForm({ onFilter, organizations,initialFilters }: FilterFormProps) {
  const [filters, setFilters] = useState<Record<string, any>>({})
  const [date, setDate] = useState<DateRange>()

  useEffect(() => {
    setFilters(initialFilters)
    setDate(initialFilters.date)
  }, [initialFilters])

  console.log(filters)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'phoneNumber') {
      const numericValue = value.replace(/\D/g, '')
      setFilters(prev => ({
        ...prev,
        [name]: numericValue === '' ? undefined : numericValue
      }))
    } else {
      setFilters(prev => {
        const newFilters = { ...prev, [name]: value }
        if (value === '') delete newFilters[name]
        return newFilters
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev, [name]: value === 'all' ? undefined : value }
      if (value === 'all') delete newFilters[name]
      return newFilters
    })
  }

  const handleDateChange = (range: DateRange) => {
    setDate(range)
    if (range?.from && range?.to) {
      setFilters(prev => ({ ...prev, date: range }))
    } else {
      setFilters(prev => {
        const { date, ...rest } = prev
        return rest
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter(filters)
  }

  const handleReset = () => {
    setFilters({})
    setDate(undefined)
    onFilter({})
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="organization" className="text-sm font-medium">Organization</label>
        <Select onValueChange={(value) => handleSelectChange('organization', value)} value={filters.organization || 'all'}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {organizations.map((org) => (
              <SelectItem key={org} value={org}>{org}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="userName" className="text-sm font-medium">Username</label>
        <Input name="userName" placeholder="User" onChange={handleInputChange} value={filters.userName || ''} />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input name="email" placeholder="Email" onChange={handleInputChange} value={filters.email || ''} />
      </div>
      <div>
        <label htmlFor="date" className="text-sm font-medium">Date Range</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={handleDateChange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</label>
        <Input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} value={filters.phoneNumber || ''} />
      </div>
      <div>
        <label htmlFor="status" className="text-sm font-medium">Status</label>
        <Select onValueChange={(value) => handleSelectChange('status', value)} value={filters.status || 'all'}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Blacklisted">Blacklisted</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={handleReset}>Reset</Button>
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}