
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export default function Dashboard() {
    return (
        <div className="h-screen flex bg-slate-200">

            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Topbar />

                <main className="p-5 flex-1">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}
