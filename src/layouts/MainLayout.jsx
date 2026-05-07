import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout(){
    return (
        <div>
            <Navbar />
            <div className="p-5">
                <Outlet />
            </div>
        </div>
    )
}