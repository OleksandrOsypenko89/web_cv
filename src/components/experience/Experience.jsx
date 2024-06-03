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

                        <div className={`project-toggle ${isActive ? 'active' : ''}`}>
                            <button className={`toggle-btn ${isActive ? '' : 'active'}`}
                                    onClick={handleToggle}>Experience
                            </button>

                            <button className={`toggle-btn ${isActive ? 'active' : ''}`}
                                    onClick={handleToggle}>Projects
                            </button>
                        </div>

                    </div>
                </li>

                <li className={`experience-box ${isActive ? 'active' : ''}`}>

                    <ul className="experiences-list" id="experiences">

                        <li className={"project-card"}>
                            <div className="card-banner" style={{margin: "15px"}}>
                                <img src={"/images/experience/michelin.png"} className={"w-100"}
                                     style={{borderRadius: "10px"}} alt="Michelin logo"/>
                            </div>

                            <p className="section-text" style={{margin: "20px"}}>
                                I worked on a service to replace paper-based analogues of
                                keeping records of materials on the line and reviewing the production plan. I
                                also
                                added functionality that informs all line workers about the reasons for the
                                delay in
                                case of accidents or difficulties, which reduces the response time to eliminate
                                them.
                            </p>
                        </li>

                    </ul>


                    <ul className="projects-list">

                        {projectsCards(
                            "INTERVIEW SIMULATOR",
                            "https://github.com/OleksandrOsypenko89/Interview",
                            "A project to prepare for an interview. A database with questions and answers to technical questions and tests has been created for it. The service randomly asks questions and, based on the answers to 15 questions, gives the user the result of the interview."
                        )}

                        {projectsCards(
                            "JIRA RUSH",
                            "https://github.com/OleksandrOsypenko89/project-final",
                            "Added internalization functionality and a test container to the project. I wrote tests for it to check for errors."
                        )}

                        {projectsCards(
                            "TASK LIST",
                            "https://github.com/OleksandrOsypenko89/Task-list/tree/master",
                            "Implemented a task list with a database connection. The user of this application can create new tasks, modify or delete existing ones. All content is stored in the database."
                        )}

                        {projectsCards(
                            "TELEGRAM BOT",
                            "https://github.com/OleksandrOsypenko89/SupplierMonitoringTelegramBot",
                            "The bot experience by allowing a company employee to log in to the system with their corporate number and see the carrier's data and current tasks to be performed."
                        )}

                        {projectsCards(
                            "HIBERNATE FINAL",
                            "https://github.com/OleksandrOsypenko89/HibernateFianal",
                            "Optimization of frequently repeated database queries so that they are stored in Redis (in-memory key-value storage), as a result, the program runs faster."
                        )}

                        {projectsCards(
                            "ISLAND",
                            "https://github.com/OleksandrOsypenko89/Island",
                            "Multi-threaded logic and interaction of threads with each other are implemented."
                        )}

                        {projectsCards(
                            "CRYPTO ANALYSER",
                            "https://github.com/OleksandrOsypenko89/CryptoAnalyser",
                            "The program reads the text and encrypts it with Caesar's cipher. The program is also capable of decrypting when it receives the encryption digit."
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