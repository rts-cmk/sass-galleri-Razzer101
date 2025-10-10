import { useState } from "react"
import { Link } from "react-router"

export default function Nav(){

    const navLinks = [
        {path: "/", name: "Explore"},
        {path: "/lifestyle", name: "Lifestyle"},
        {path: "/food", name: "Food"},
        {path: "/home", name: "Home"},
        {path: "/travel", name: "Travel"}
    ]

    const [toggleDisplay, setToggleDisplay] = useState("none")

    return(
        <nav className="nav-section">
            <button onClick={() =>setToggleDisplay(toggleDisplay === "none" ? "grid" : "none")} className="nav-section__burger-menu">&#9776;</button>
            <ul className={`nav-section__list nav-section__list--${toggleDisplay}`}>
                {navLinks.map((link) => {
                    return(
                        <li key={link.name} className="nav-section__link">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    )
                })}
                <li className="nav-section__link">
                    <button>More <span>&#8628;</span></button>
                </li>
            </ul>
        </nav>
    )
}