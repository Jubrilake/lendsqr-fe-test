import { useLocation, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <main className="min-h-screen w-full">
          <Header />
          {/* <div className="flex w-full  md:flex-col"> */}
            <Sidebar />
            <Routes>
              <Route path="/users" element={<Users />} />
              <Route path="/users/:userId" element={<UserDetail />} />
            </Routes>
          {/* </div> */}
        </main>
      )}
    </>
  );
};

export default App;
