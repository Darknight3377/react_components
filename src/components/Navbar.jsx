import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex gap-5 p-5 border-b-gray-900">
            <Link to="/">Home</Link>
            <Link to="/accordion">Accordion</Link>
            <Link to="/advanceAcc">Advance Accordion</Link>
        </nav>
    )
}