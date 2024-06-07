import {useState} from "react";
import "./Skills.css";

export const Skills = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <section className="skills" id="skills">

            <div className="skills-content section-content">

                <p className="section-subtitle">My skills</p>

                <h2 className="h3 section-title">What My Programming Skills Included?</h2>

                <ul className="section-text">
                    <li>
                        <strong>- Java:</strong> Backend development using Spring
                        Framework.
                    </li>
                    <li>
                        <strong>- React:</strong> Creating interactive user
                        interfaces.
                    </li>
                    <li>
                        <strong>- SQL:</strong> Database management and query
                        optimization.
                    </li>
                    <li>
                        <strong>- OOP principles:</strong> Deep understanding and
                        application in practice.
                    </li>
                </ul>

                <div className={`skills-toggle ${isActive ? 'active' : ''}`}>
                    <button className={`toggle-btn ${isActive ? '' : 'active'}`}
                            onClick={handleToggle}
                            translate={"no"}>
                        Skills
                    </button>

                    <button className={`toggle-btn ${isActive ? 'active' : ''}`}
                            onClick={handleToggle}
                            translate={"no"}>
                        Tools
                    </button>
                </div>

            </div>

            <div className={`skills-box ${isActive ? 'active' : ''}`}>

                <ul className="skills-list">

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Java / Java Core</div>

                            <div className="card-icon">
                                <img src={"/images/skills/java.svg"} alt="Java logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Spring Boot / Data / MVC / Security</div>

                            <div className="card-icon">
                                <img src={"/images/skills/spring.svg"} alt="Spring logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">JavaScript</div>

                            <div className="card-icon">
                                <img src={"/images/skills/javascript.svg"} alt="JavaScript logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">React</div>

                            <div className="card-icon">
                                <img src={"/images/skills/react.svg"} alt="React logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">HTML5</div>

                            <div className="card-icon">
                                <img src={"/images/skills/html-5.svg"} alt="HTML5 logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">CSS3</div>

                            <div className="card-icon">
                                <img src={"/images/skills/css-3.svg"} alt="CSS3 logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Rest API</div>

                            <div className="card-icon">
                                <img src={"/images/skills/api.svg"} alt="Rest api logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Hibernate</div>

                            <div className="card-icon">
                                <img src={"/images/skills/hibernate.svg"} alt="Hibernate logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">MySQL</div>

                            <div className="card-icon">
                                <img src={"/images/skills/mysql.svg"} alt="MySQL logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">PostgreSQL</div>

                            <div className="card-icon">
                                <img src={"/images/skills/postgresql.svg"} alt="PostgrSQL logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Microsoft SQL Server</div>

                            <div className="card-icon">
                                <img src={"/images/skills/microsoft-sql.svg"} alt="Microsoft SQL Server logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Maven</div>

                            <div className="card-icon">
                                <img src={"/images/skills/maven.svg"} alt="Maven logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Docker</div>

                            <div className="card-icon">
                                <img src={"/images/skills/docker.svg"} alt="Docker logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Git</div>

                            <div className="card-icon">
                                <img src={"/images/skills/git.svg"} alt="Git logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Bootstrap</div>

                            <div className="card-icon">
                                <img src={"/images/skills/bootstrap.svg"} alt="Bootstrap logo"/>
                            </div>
                        </div>
                    </li>

                </ul>

                <ul className="tools-list">

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Intellij IDEA</div>

                            <div className="card-icon">
                                <img src={"/images/skills/intellij-idea.svg"} alt="Intellij IDEA logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">WebStorm</div>

                            <div className="card-icon">
                                <img src={"/images/skills/webstorm.svg"} alt="WebStrom logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">VS Code</div>

                            <div className="card-icon">
                                <img src={"/images/skills/vscode.svg"} alt="VS Code logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Postman</div>

                            <div className="card-icon">
                                <img src={"/images/skills/postman.svg"} alt="Postman logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Notion</div>

                            <div className="card-icon">
                                <img src={"/images/skills/notion.svg"} alt="Notion logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Trello</div>

                            <div className="card-icon">
                                <img src={"/images/skills/trello.svg"} alt="Trello logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Slack</div>

                            <div className="card-icon">
                                <img src={"/images/skills/slack.svg"} alt="Slack logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">MacOS</div>

                            <div className="card-icon">
                                <img src={"/images/skills/macos.svg"} alt="MacOS logo"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="skill-card">
                            <div className="tooltip">Windows</div>

                            <div className="card-icon">
                                <img src={"/images/skills/windows.svg"} alt="Windows logo"/>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>

        </section>
    )
}