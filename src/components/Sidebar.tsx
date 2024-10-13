import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sidebarLinks from "@/data/sidebarLinks";
import { BriefCase } from "@/assets";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="sidebar" id="custom-scroll">
      <div className="sidebar-wrapper">
        <div className="switch-organization">
          <button onClick={handleDropdownToggle}>
            <BriefCase />
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
            {sidebarLinks.map((category, index) => (
              <div key={index}>
                {category.title && <h3>{category.title}</h3>}
                {category.links.map((navlink) => (
                  <Link
                    key={navlink.to}
                    to={navlink.to}
                    className={`link-flex ${
                      location.pathname === navlink.to ? "active" : "inactive"
                    }`}
                  >
                    {<navlink.icon />} {navlink.label}
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
