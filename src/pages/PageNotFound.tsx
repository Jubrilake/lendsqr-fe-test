import { CircleAlert } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="alertBox">
        <div className="alertContent">
          <CircleAlert color="#E4033B" size={50} data-testid="circle-alert" />
          <span className="alertText">
            Page not found:{" "}
            {pathname.length === 6
              ? pathname
              : `${pathname.substring(0, 10)}...`}
          </span>
        </div>

        <button onClick={() => navigate("/")} className="goBackButton">
          GoBack
        </button>
      </div>
    </div>
  );
}
