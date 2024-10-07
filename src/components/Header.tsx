import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Bell, ChevronDown, ChevronUp } from "lucide-react"; // Import Chevron icons
import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import { Input } from "@/ui/input";
import logo from "../assets/logo.svg";
import { profile } from "@/assets";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown

  return (
    <header className="flex h-14 items-center gap-4 shadow-md bg-white px-4 lg:h-[60px] z-100 lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <span>Dashboard</span>
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            >
              <span>Orders</span>
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <span>Products</span>
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <span>Customers</span>
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <span>Analytics</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-[20%] hidden md:block">
        <img
          src={logo}
          alt="Logo"
          className="h-auto w-auto object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="w-full flex-1">
        <form>
          <div className="flex items-center">
            <Input
              type="search"
              placeholder="Search for anything"
              className="w-[70%] appearance-none rounded-l-md pl-8 rounded-r-none shadow-none md:w-1/3 lg:w-2/3"
            />
            <div className="bg-secondary p-3 rounded-r-md">
              <Search className="h-4 w-4 text-muted-foreground text-white" />
            </div>
          </div>
        </form>
      </div>
      <div className="w-[18%] md:w-[7%] flex justify-between items-center">
        <Link className="underline text-sm text-primary" to="#">
          Docs
        </Link>
        <div>
          <Bell className="text-primary" />
        </div>
      </div>
      <DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-x-3">
            <div className="rounded-full overflow-hidden">
              <img src={profile} />
            </div>
            <Button className="p-0" variant="ghost">
              <span className="hidden md:block text-primary font-medium">
                Akerele
              </span>
              {/* Conditional Chevron icon */}
              {isDropdownOpen ? (
                <ChevronUp className="h-4 w-4 ml-1" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-1" />
              )}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
