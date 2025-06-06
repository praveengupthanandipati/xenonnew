import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo-color.svg";

const Header = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // GSAP animations
    useGSAP(() => {
        // Logo animation
        gsap.from('.navbar-brand', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // Nav items animation with stagger
        gsap.from('.nav-item', {
            y: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.2,
            ease: 'power3.out'
        });
    }, []);

    // Scroll to top whenever route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Scroll event handler
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const isActive = (path) => location.pathname === path ? "active" : "";
    const isDropdownActive = (paths) => paths.includes(location.pathname) ? "active" : "";

    const handleNavLinkClick = () => {
        const offcanvas = document.getElementById('offcanvasNavbar2');
        if (offcanvas && offcanvas.classList.contains('show')) {
            const closeBtn = offcanvas.querySelector('[data-bs-dismiss="offcanvas"]');
            if (closeBtn) closeBtn.click();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={`fixed top-0 w-[95%] md:w-[90%] mx-auto mt-6 ${scrolled ? "scrolledHeader" : ""}`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Offcanvas navbar large">
                    <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
                        <img src={Logo} alt="Plus Quest Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar2"
                        aria-controls="offcanvasNavbar2"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end text-bg-dark"
                        tabIndex="-1"
                        id="offcanvasNavbar2"
                        aria-labelledby="offcanvasNavbar2Label"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                                Menu
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        className={`nav-link ${isActive("/")}`}
                                        aria-current={isActive("/") ? "page" : undefined}
                                        onClick={handleNavLinkClick}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/About"
                                        className={`nav-link ${isActive("/About")}`}
                                        onClick={handleNavLinkClick}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/Products"
                                        className={`nav-link ${isActive("/Products")}`}
                                        onClick={handleNavLinkClick}
                                    >
                                        Phytochemicals
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/Ligands"
                                        className={`nav-link ${isActive("/Ligands")}`}
                                        onClick={handleNavLinkClick}
                                    >
                                        Ligands & Catalysts
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/Contact"
                                        className={`nav-link ${isActive("/Contact")}`}
                                        onClick={handleNavLinkClick}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;