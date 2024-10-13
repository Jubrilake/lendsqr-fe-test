import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <Sidebar />
      <Outlet />
    </main>
  );
}
