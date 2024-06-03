import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {Stats} from "./components/stats/Stats";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Experience} from "./components/experience/Experience";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import "./style/App.css";
import "./style/Media.css"

export default function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <main>
            <Header/>
            <article className="container">
                <Home/>
                <Stats/>
                <About/>
                <Skills/>
                <Experience/>
                <Contact/>
            </article>
            <Footer/>
        </main>
    )
}