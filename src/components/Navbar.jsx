import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex gap-5 p-5 border-b-gray-900">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/accordion">Accordion</NavLink>
            <NavLink to="/advanceAcc">Advance Accordion</NavLink>
        </nav>
    )
}