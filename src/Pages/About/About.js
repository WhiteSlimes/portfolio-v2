import "./About.scss";
import 'font-awesome/css/font-awesome.min.css';
import {info} from "../../Info/Info";


const iconClass = "fa fa-circle";

function About(){
    const firstName = info.firstName.toLowerCase()
    return(
        <div className="about">
            <section className="terminal shadowed">
                <div className="haut">
                    <i className={iconClass + " red"}/>
                    <i className={iconClass + " amber"}/>
                    <i className={iconClass + " green"}/>
                </div>
                <div className="bas">
                    <p><span>{firstName}{info.lastName.toLocaleLowerCase()} $</span> cat about {firstName}</p>
                    <p><span>about {firstName}<span className="blackgreen">(main)</span> $ </span>{info.bio}</p>
                </div>
            </section>
            <section className="skills">
                <h2>Mes compétences</h2>
                <div className="container">
                    <ul>
                        {info.skills.map((skill, index) => 
                        <li key={index}>
                            <span>
                                <div className="text-center">
                                    <i className={skill.icon}>
                                        <p>{skill.text}</p>
                                    </i>
                                </div>
                            </span>
                        </li>
                        )}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default About