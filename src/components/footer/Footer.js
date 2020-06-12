import React from "react";
import { Link } from "react-router-dom";
  
const Footer = () => {
    return (
        <footer>
            <ul className="footer-options">
                <li className="footer-link">
                    <Link to="https://www.facebook.com/">
                        <img  
                            src="/facebook.png"
                            width="50"
                            alt="Facebook icon"
                        />
                    </Link>
                </li>
                <li className="footer-link">
                    <Link to="https://www.instagram.com/">
                        <img  
                            src="/instagram.png"
                            width="50"
                            alt="Instagram icon"
                        />
                    </Link> 
                </li>
            </ul>
            <span>Copyright &copy; Holidaze 2020</span>
        </footer>
    )
}

export default Footer;