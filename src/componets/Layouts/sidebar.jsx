
import Logo from "../../assets/icons/logo.webp";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Utensils, PlusCircle, ChevronRight ,ChevronLeft } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="bg-slate-800 w-64 min-h-screen p-5 fixed z-10">

      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src={Logo}
          alt="Meal Mall Logo"
          className="w-15 h-15 rounded-lg"
        /><h1 className="text-white text-2xl font-bold">
          Meal Mall
        </h1>
      </div>
      <div className="absolute right-0 top-25 bg-slate-900 p-1 rounded-full border-1 border-white">
        <ChevronRight color="white" size={15} className="cursor-pointer"/>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-3">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
         <LayoutDashboard size={20} />
        Dashboard
        </NavLink>

        <NavLink
          to="/meal-list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
         <Utensils size={20} />
          Meal Card
        </NavLink>

        <NavLink
          to="/meal-create"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          <PlusCircle size={20} />
          Create Meal
        </NavLink>

      </nav>

    </div>
  );
};
