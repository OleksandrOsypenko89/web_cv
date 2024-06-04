import "./About.css";

export const About = () => {

    /**
     * https://drive.google.com/file/d/--------------id-------------------/view?usp=drive_link
     */
    const _ID_PDF = '14wKUaSKvqmTsxjg615EKosomSGgmEYNy';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `https://drive.usercontent.google.com/u/0/uc?id=${_ID_PDF}&export=download`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return (
        <section className="about" id="about">

            <figure className="about-banner" data-aos="fade-right" data-aos-delay="300" data-aos-once="true">
                <img src={"/images/photo/about-banner.png"} alt="A man in a alice blue shirt with a thinking expression"
                     className="w-100"/>
            </figure>

            <div className="about-content section-content">

                <p className="section-subtitle">About me</p>

                <h2 className="h3 section-title">Need a Developer? I can Help You!</h2>

                <p className="section-text">
                    I'm a Full Stack Developer with experience in developing and maintaining web projects that includes
                    the use of Java, Spring, React, and SQL. My passion for programming is backed by a strong foundation
                    in Java development and a deep understanding of object-oriented principles. I'm always eager to
                    learn new technologies, tools, and approaches that help create efficient, clean, and maintainable
                    code. I have experience in solving complex problems and implementing innovative solutions that
                    contribute to the success of projects.

                    I am eager for professional growth and ready for new challenges in a dynamic environment. If you are
                    looking for a specialist who has a passion for programming and is capable of implementing advanced
                    solutions, I will be happy to join your team.
                </p>

                <button className="btn btn-primary" onClick={handleDownload}>
                    Download cv
                </button>

            </div>

        </section>
    )
}