import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
