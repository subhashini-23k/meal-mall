
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export default function Dashboard() {
    return (
        <div className="h-full flex bg-orange-50">

            <Sidebar />

            <div className="flex-1  flex flex-col">
                <Topbar />

                <main className="p-5 flex-1 h-screen mt-15 ml-20">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}
