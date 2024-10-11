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
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="switch-organization">
          <button onClick={handleDropdownToggle}>
            <img src={briefCase} />
            <span>Switch Organization</span>

            {isDropdownOpen ? (
              <ChevronUp className="chevron-up" />
            ) : (
              <ChevronDown className="chevron-down" />
            )}
          </button>

          {isDropdownOpen && (
            <div className="switch-organization_dropdown">
              <ul>
                <li>
                  <Link to="/org/1" className="link-block">
                    Organization 1
                  </Link>
                </li>
                <li>
                  <Link to="/org/2" className="link-block">
                    Organization 2
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sidebarnav">
          <nav>
            {sidebarLinks.map((category: SidebarCategory, index) => (
              <div key={index}>
                {category.title && <h3>{category.title}</h3>}
                {category.links.map(({ to, label, icon }: SidebarLink) => (
                  <Link
                    key={to}
                    to={to}
                    className={`link-flex ${
                      location.pathname === to ? "active" : "inactive"
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
