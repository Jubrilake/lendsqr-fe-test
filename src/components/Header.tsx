import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarLinks, {
  SidebarCategory,
  SidebarLink,
} from "@/data/sidebarLinks";
import { Menu, Search, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/ui/dropdown-menu";
import { briefCase } from "@/assets";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import { Input } from "@/ui/input";
import logo from "../assets/logo.svg";
import { profile, bell } from "@/assets";

const Header: React.FC = () => {
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const location = useLocation();

  const handleOrgDropdownToggle = () => {
    setIsOrgDropdownOpen((prevState) => !prevState);
  };

  const handleCategoryToggle = (categoryTitle: string) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [categoryTitle]: !prevState[categoryTitle],
    }));
  };

  return (
    <header className="flex h-14 items-center gap-4 shadow-md bg-white px-4 lg:h-[60px] z-100 lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col px-0">
          <div className="flex h-full flex-col gap-2">
          <div className="m-auto text-center">
        <img src={logo} alt="Logo" className="h-auto w-auto object-cover" />
      </div>
            <div className="relative flex h-14 items-center px-2 lg:h-[60px] lg:px-2">
              {/* Switch organization dropdown */}
              <button
                onClick={handleOrgDropdownToggle}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-sm font-medium text-muted-foreground hover:text-primary w-full`} // Added class for alignment
              >
                <img src={briefCase} className="h-4 w-4" />{" "}
                {/* Suitcase icon */}
                <span className="text-sm text-primary">
                  Switch Organization
                </span>
                {/* Arrow icon depending on dropdown state */}
                {isOrgDropdownOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {/* Dropdown menu for organizations */}
              {isOrgDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                  <ul>
                    <li>
                      <Link
                        to="/org/1"
                        className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary"
                      >
                        Organization 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/org/2"
                        className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary"
                      >
                        Organization 2
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex-1">
              <nav className="grid items-start text-sm font-medium">
                {sidebarLinks.map((category: SidebarCategory, index) => (
                  <div key={index}>
                    {category.title ? (
                      <div>
                        <button
                          onClick={() => handleCategoryToggle(category.title!)} // Non-null assertion
                          className="flex items-center gap-3 mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-light_gray text-muted-foreground"
                        >
                          <h3 className="ml-5">{category.title}</h3>
                          {openCategories[category.title] ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>
                        {openCategories[category.title] && (
                          <div className="">
                            {category.links.map(
                              ({ to, label, icon }: SidebarLink) => (
                                <Link
                                  key={to}
                                  to={to}
                                  className={`flex items-center gap-3 px-5 py-2 transition-all ${
                                    location.pathname === to
                                      ? "bg-[#39CDCC] relative bg-opacity-10 text-primary before:absolute before:top-0 before:left-0 before:bottom-0 before:w-[3px] before:h-full before:bg-[#39CDCC]"
                                      : "text-primary text-opacity-50 hover:text-primary"
                                  }`}
                                >
                                  <img src={icon} className="h-4 w-4" /> {label}
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      category.links.map(({ to, label, icon }: SidebarLink) => (
                        <Link
                          key={to}
                          to={to}
                          className={`flex items-center gap-3 px-5 py-2 transition-all ${
                            location.pathname === to
                              ? "bg-[#39CDCC] relative bg-opacity-10 text-primary before:absolute before:top-0 before:left-0 before:bottom-0 before:w-[3px] before:h-full before:bg-[#39CDCC]"
                              : "text-primary text-opacity-50 hover:text-primary"
                          }`}
                        >
                          <img src={icon} className="h-4 w-4" /> {label}
                        </Link>
                      ))
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="w-[20%] hidden md:block">
        <img src={logo} alt="Logo" className="h-auto w-auto object-cover" />
      </div>

      <div className="w-full flex-1">
        <form className="lg:w-1/2 w-full">
          <div className="flex items-center">
            <Input
              type="search"
              placeholder="Search for anything"
              className="appearance-none rounded-l-md pl-8 rounded-r-none shadow-none md:w-1/3 lg:w-2/3"
            />
            <div className="bg-secondary p-3 rounded-r-md">
              <Search className="h-4 w-4 text-white" />
            </div>
          </div>
        </form>
      </div>

      <div className="w-[18%] md:w-[7%] lg:flex justify-between items-center hidden">
        <Link className="underline text-sm text-primary" to="#">
          Docs
        </Link>
        <div>
          <img src={bell} alt="Bell" />
        </div>
      </div>

      <DropdownMenu onOpenChange={(open) => setIsOrgDropdownOpen(open)}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-x-3">
            <div className="rounded-full overflow-hidden">
              <img src={profile} alt="Profile" />
            </div>
            <Button className="p-0" variant="ghost">
              <span className="hidden md:block text-primary font-medium">
                Akerele
              </span>
              {isOrgDropdownOpen ? (
                <ChevronUp className="h-4 w-4 ml-1" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-1" />
              )}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
