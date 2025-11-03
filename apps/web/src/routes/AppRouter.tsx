import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LugaresPage from "../pages/LugaresPage";
import EspaciosPage from "../pages/EspaciosPage";
import ReservasPage from "../pages/ReservasPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* NAVBAR */}
        <header className="bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Gestor de Reservas</h1>
            <div className="flex gap-4">
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                  }`
                }
                end
              >
                Lugares
              </NavLink>
              <NavLink
                to="/espacios"
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                  }`
                }
              >
                Espacios
              </NavLink>
              <NavLink
                to="/reservas"
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                  }`
                }
              >
                Reservas
              </NavLink>
            </div>
          </nav>
        </header>

        {/* MAIN ROUTES */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
          <Routes>
            <Route path="/" element={<LugaresPage />} />
            <Route path="/espacios" element={<EspaciosPage />} />
            <Route path="/reservas" element={<ReservasPage />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BitListo · Gestor de Reservas IoT
        </footer>
      </div>
    </BrowserRouter>
  );
}
