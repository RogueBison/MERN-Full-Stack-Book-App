import { useAuthContext } from "./hooks/useAuthContext";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";

import HeaderLanding from "./components/headerLanding";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import All from "./pages/books/All";
import Single from "./pages/books/Single";
import NoPage from "./pages/NoPage";
import Basket from "./pages/Basket";
import Signup from "./pages/account/Signup";
import Login from "./pages/account/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NewProdForm from "./pages/admin/NewProdForm";
import EditProdForm from "./pages/admin/EditProdForm";

function HeaderSelection() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return <Header />;
  } else {
    return <HeaderLanding />;
  }
}

export default function App() {
  const { user } = useAuthContext();

  return (
    <div id="page-container" className="bg-neutral-200 min-h-screen text-lg">
      <BrowserRouter>
        <HeaderSelection />
        <main className="container mx-auto flex flex-col items-center min-h-screen">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/books/All" element={<All />} />
            <Route path="/books/Single/:id" element={<Single />} />
            <Route
              path="/account/Signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/account/Login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<NoPage />} />

            {/* Protected Admin Routes */}
            <Route
              path="/admin/AdminDashboard"
              element={
                user ? <AdminDashboard /> : <Navigate to="/account/Login" />
              }
            />
            <Route
              path="/admin/NewProdForm"
              element={
                user ? <NewProdForm /> : <Navigate to="/account/Login" />
              }
            />
            <Route
              path="/admin/EditProdForm/:id"
              element={
                user ? <EditProdForm /> : <Navigate to="/account/Login" />
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
