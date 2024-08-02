import "./Home.css";

export const Home = () => {
    return (
        <section className="hero" id="home">

            <figure className="hero-banner" data-aos="fade-up" data-aos-delay="350">

                <picture>
                    <img src={"/images/photo/banner.PNG"} alt="A man in a blue shirt with a happy expression" className="w-100"/>
                </picture>

            </figure>

            <div className="hero-content">

                <h2 className="h2 hero-title">I'M <p translate={"no"}>Oleksandr Osypenko</p></h2>

                <a href={"#contact"} className="btn btn-primary">Get in touch</a>

            </div>

            <a href={"#stats"} className="scroll-down">Scroll</a>

        </section>
    )
}