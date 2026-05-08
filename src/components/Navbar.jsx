import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex gap-5 p-5 bg-gray-900 text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/accordion">Accordion</NavLink>
            {/* <NavLink to="/advanceAcc">Advance Accordion</NavLink> */}
            <NavLink to="/todolist">ToDo List</NavLink>
            <NavLink to="/progressbar">Progress Bar</NavLink>
            <NavLink to="/autocomplete">AutoComplete Box</NavLink>
        </nav>
    )
}