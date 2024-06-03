import {useEffect, useState} from "react";
import "./Header.css";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isTheme, setIsTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === "light_theme" : true;
    });

    useEffect(() => {
        if (isTheme) {
            document.body.classList.add('light_theme');
            document.body.classList.remove('dark_theme');

            localStorage.setItem('theme', 'light_theme');
        } else {
            document.body.classList.add('dark_theme');
            document.body.classList.remove('light_theme');

            localStorage.setItem('theme', 'dark_theme');
        }
    }, [isTheme]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light_theme') {
            document.body.classList.add('light_theme');
            document.body.classList.remove('dark_theme');
        } else {
            document.body.classList.add('dark_theme');
            document.body.classList.remove('light_theme');
        }
    }, []);

    const handleThemeToggle = () => {
        setIsTheme(prevTheme => {
            const newTheme = !prevTheme;
            const themeClass = newTheme ? 'dark_theme' : 'light_theme';

            localStorage.setItem('theme', themeClass);

            return newTheme;
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <header className={`header ${isScrolled ? 'active' : ''}`}>
            <div className="container">

                <h1 className="h1 logo">
                    <a href="https://osypenko.site">Oleksandr<span>.</span></a>
                </h1>

                <div className="navbar-actions">

                    <button className={`theme-btn ${isTheme ? 'active' : ''}`} aria-label="Change Theme"
                            title="Change Theme" onClick={handleThemeToggle}>
                        <span className="icon"></span>
                    </button>

                </div>

                <button className={`nav-toggle-btn ${isActive ? 'active' : ''}`}
                        onClick={handleToggle} aria-label="Toggle Menu" title="Toggle Menu">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </button>

                <nav className={`navbar ${isActive ? 'active' : ''}`}>
                    <ul className="navbar-list">

                        <li>
                            <a href={"#home"} className="navbar-link" onClick={handleToggle}>Home.</a>
                        </li>

                        <li>
                            <a href={"#about"} className="navbar-link" onClick={handleToggle}>About.</a>
                        </li>

                        <li>
                            <a href={"#skills"} className="navbar-link" onClick={handleToggle}>Skills.</a>
                        </li>

                        <li>
                            <a href={"#experience"} className="navbar-link" onClick={handleToggle}>Experience.</a>
                        </li>

                        <li>
                            <a href={"#contact"} className="navbar-link" onClick={handleToggle}>Contact.</a>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    )
}