import { Link } from "react-router"

export default function Nav(){

    const navLinks = [
        {path: "/", name: "Explore"},
        {path: "lifestyle", name: "Lifestyle"},
        {path: "/food", name: "Food"},
        {path: "/home", name: "Home"},
        {path: "/travel", name: "Travel"}
    ]

    return(
        <nav className="nav-section">
            <button className="nav-section__burger-menu"></button>
            <ul className="nav-list">
                {navLinks.map((link) => {
                    return(
                        <li key={link.name} className="nav-list__link">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    )
                })}
                <li className="nav-list__link">
                    <button>More <span>&#8628;</span></button>
                </li>
            </ul>
        </nav>
    )
}