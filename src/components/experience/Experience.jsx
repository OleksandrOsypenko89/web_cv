import {useState} from "react";
import "./Experience.css";

export const Experience = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const projectsCards = (title, link, text) => {
        return (
            <li>
                <a href={link} className={"project-card"}>
                    <p className={"h4 section-title"} style={{margin: "20px"}}>{title}</p>

                    <div className="section-text" style={{margin: "20px"}}>
                        {text}
                    </div>
                </a>
            </li>
        )
    }

    return (
        <section className="experience" id="experience">

            <ul className="project-list">

                <li className="project-content section-content">
                    <div style={{display: "inline-block"}}>

                        <p className="section-subtitle">My Experience</p>

                        <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>

                        <p className="section-text">
                            Throughout my career, I have gained significant experience in developing high quality
                            software. I strive to create code that not only performs its functions, but also remains
                            understandable and maintainable for other developers. In my work, I always follow the
                            principles of clean code, which includes the use of clear variables, proper structuring, and
                            detailed documentation.
                        </p>

                    </div>
                </li>

                <li className={`experience-box ${isActive ? '' : 'active'}`}>

                    <ul className="projects-list">

                        {projectsCards(
                            "INTERVIEW SIMULATOR",
                            "https://github.com/OleksandrOsypenko89/Interview",
                            "In this project the possibility of new user registration is realized. The ability to log in to a personal cabinet. Algorithm that asks random questions that are in the database, viewing statistics, admin panel and feedback."
                        )}

                        {projectsCards(
                            "JIRA RUSH",
                            "https://github.com/OleksandrOsypenko89/project-final",
                            "I added internalization functionality and a test container to the project. I put confidential information in a separate file and wrote tests to check for errors.  Created a docker-compose file to create a container the application."
                        )}

                        {projectsCards(
                            "TASK LIST",
                            "https://github.com/OleksandrOsypenko89/Task-list/tree/master",
                            "Implemented a task list with a database connection. The user can create new tasks, modify or delete existing ones. All content is stored in the database."
                        )}

                        {projectsCards(
                            "TELEGRAM BOT",
                            "https://github.com/OleksandrOsypenko89/SupplierMonitoringTelegramBot",
                            "The bot works by allowing a company employee to log in to the system with their corporate number and see the carrier's data and current tasks to be performed."
                        )}

                        {projectsCards(
                            "HIBERNATE FINAL",
                            "https://github.com/OleksandrOsypenko89/HibernateFianal",
                            "I implemented a back end structure based on an existing database. Additionally, optimization of frequently executed queries with redis was done. The program displays the execution time of sql and redis queries."
                        )}

                        {projectsCards(
                            "ISLAND",
                            "https://github.com/OleksandrOsypenko89/Island",
                            "Multi-threaded logic and interaction of threads with each other are implemented."
                        )}

                        {projectsCards(
                            "CRYPTO ANALYSER",
                            "https://github.com/OleksandrOsypenko89/CryptoAnalyser",
                            "The program reads the text and encrypts it using the Caesar cipher. The program is also able to decrypt the text when it receives the cipher code."
                        )}


                        <li>
                            <button className="load-more">
                                <a href="https://github.com/OleksandrOsypenko89?tab=repositories">More on my GitHub</a>
                            </button>
                        </li>

                    </ul>
                </li>

            </ul>
        </section>
    )
}