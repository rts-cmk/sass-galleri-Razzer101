import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer(){
    return(
        <footer className="footer-section">
            <ul className="footer-list">
                <li className="footer-list__link"><Facebook /></li>
                <li className="footer-list__link"><Twitter /></li>
                <li className="footer-list__link"><Instagram /></li>
            </ul>
        </footer>
    )
}