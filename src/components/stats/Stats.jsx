import "./Stats.css";

export const Stats = () => {
    return (
        <section className="stats" id="stats">
            <ul className="stats-list">

                <li>
                    <div className="stats-card">

                        <div className="card-icon">
                            <img src={"/images/stats/stats-card_icon-1.png"} alt={"Badge icon"}/>
                        </div>

                        <h2 className="h2 card-title">
                            1,5+ <strong>Years of Experience</strong>
                        </h2>

                    </div>
                </li>

                <li>
                    <div className="stats-card">

                        <div className="card-icon">
                            <img src={"/images/stats/stats-card_icon-2.png"} alt={"Checkmark icon"}/>
                        </div>

                        <h2 className="h2 card-title">
                            20+ <strong>Completed Projects</strong>
                        </h2>

                    </div>
                </li>

            </ul>
        </section>
    )
}