import {useEffect, useState} from "react";
import "./Footer.css";

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY >= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="footer">
                <div className="container">

                    <p className="h1 logo">
                        <a href={"#top"}>
                            Java Fullstack Developer<span>.</span>
                        </a>
                    </p>

                    <p className="copyright">
                        &copy; 2024. All rights reserved
                    </p>

                </div>
            </footer>

            <a href={"#top"} className={`go-top ${isVisible ? 'active' : ''}`} title="Go to Top" onClick={scrollToTop}>
                <ion-icon name="arrow-up"></ion-icon>
            </a>

        </>
    )
}