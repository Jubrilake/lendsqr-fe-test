import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";





import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Users from "./pages/Users";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" && (
        <Routes>   
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
      <main className="min-h-screen w-full">
        <Header />
        <div className="grid w-full md:grid-cols-[250px_1fr]">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
