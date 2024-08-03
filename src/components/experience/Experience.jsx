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

                        <h2 className="h3 section-title">My Experience</h2>

                        <p className="section-text">
                            <strong>Professional experience:</strong> Throughout my career, I have worked on various projects, gaining significant experience in developing high-quality software that meets modern standards and user needs.<br/>
                            <strong>Collaboration:</strong> I strive to create code that not only performs its functions, but also remains understandable and convenient for other developers, which contributes to effective teamwork and quick problem solving.<br/>
                            <strong>Results:</strong> By adhering to these principles, my projects are of high quality, easy to maintain, and extensible, which greatly increases team efficiency.
                        </p>

                        <div className={`project-toggle ${isActive ? 'active' : ''}`}>
                            <button className={`toggle-btn ${isActive ? '' : 'active'}`}
                                    onClick={handleToggle}
                                    translate={"no"}>
                                Experience
                            </button>

                            <button className={`toggle-btn ${isActive ? 'active' : ''}`}
                                    onClick={handleToggle}
                                    translate={"no"}>
                                Projects
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
                                <h3 style={{color: "var(--color-primary)"}}>Service for replacing paper analogues of material accounting and revising the
                                    production plan:</h3>
                                <strong>Development and implementation:</strong> I was actively involved in the development
                                of a service
                                that allows replacing paper analogues of material accounting on the production line.
                                This included the creation of a digital system for accurate and convenient material
                                accounting, which increased efficiency and reduced errors.
                                <br/>
                                <strong>Production plan viewer functionality:</strong> Added functionality that allows
                                employees to view
                                the production plan in real time, which ensured better coordination and planning of work
                                processes.
                                <br/>
                                <strong>Informing about delays:</strong> Implemented a function to automatically inform line workers
                                about the causes of delays in case of accidents or other difficulties. This included the
                                development of an alert system that immediately notifies the responsible employees of
                                problems that have arisen, thereby reducing response and troubleshooting time.
                                <br/>
                                <strong>Results:</strong> Thanks to the implemented changes, a significant reduction in equipment
                                downtime was achieved, employee productivity was increased, and the number of production
                                errors was reduced.
                            </p>
                        </li>

                    </ul>


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