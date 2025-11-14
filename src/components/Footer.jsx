import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer(){
    return(
        <footer className="footer-section">
            <ul className="footer-list">
                <li className="footer-list__link"><Facebook /></li>
                <li className="footer-list__link"><Twitter /></li>
                <li className="footer-list__link"><Instagram /></li>
                <li className="footer-list__link"><Youtube /></li>
                <li className="footer-list__link"><Linkedin /></li>
            </ul>
        </footer>
    )
}