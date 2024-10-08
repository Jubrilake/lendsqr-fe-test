import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarLinks, {
  SidebarCategory,
  SidebarLink,
} from "@/data/sidebarLinks";
import { briefCase } from "@/assets";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="hidden shadow-md bg-muted/5 md:block min-h-screen">
      <div className="flex h-full flex-col gap-2">
        <div className="relative flex h-14 items-center px-2 lg:h-[60px] lg:px-1">
          {/* Switch organization dropdown */}
          <button
            onClick={handleDropdownToggle}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-sm font-medium text-muted-foreground hover:text-primary w-full`} // Added class for alignment
          >
            <img src={briefCase} className="h-4 w-4" /> {/* Suitcase icon */}
            <span className="text-sm text-primary">Switch Organization</span>
            {/* Arrow icon depending on dropdown state */}
            {isDropdownOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
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
          <nav className="grid items-start px-2 text-sm font-medium lg:px-1">
            {sidebarLinks.map((category: SidebarCategory, index) => (
              <div key={index}>
                {category.title && (
                  <h3 className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {category.title}
                  </h3>
                )}
                {category.links.map(({ to, label, icon }: SidebarLink) => (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center gap-3 px-3 py-2 transition-all ${
                      location.pathname === to
                        ? "bg-[#39CDCC] bg-opacity-10 text-primary"
                        : "text-primary text-opacity-50 hover:text-primary"
                    }`}
                  >
                    <img src={icon} className="h-4 w-4" /> {label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
