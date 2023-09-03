import { forwardRef, useState } from "react";
import ocLogo from '../assets/Logo_OpenClassrooms.png';
import seipraLogo from '../assets/seipra.webp';
import Languages from "./Languages";
import Libraries from "./Libraries";
import { createPortal } from "react-dom";

const About = forwardRef<HTMLDivElement,{appRef:React.RefObject<HTMLDivElement>}>(({appRef},ref) => {
    const [more, setMore] = useState(false);
    const [moreLanguages, setMoreLanguages] = useState(false);
    const [moreLibraries, setMoreLibraries] = useState(false);

    return (
        <section className="about" ref={ref}>
            <div className="about__inside">
                <div className="about__title">
                    <h3>A propos</h3>
                    <div className={"chevron" + (more ? " less" : "")} onClick={() => setMore(!more)}>
                        <div className="inside"></div>
                    </div>
                </div>
                <div className={"about__more" + (more ? " visible" : "")}>
                    <div className="about__container">
                        <div className="oc-logo">
                            <img src={ocLogo} alt="Open Classrooms" />
                        </div>
                        <p>Formation développeur web chez Open Classrooms en 2021</p>
                    </div>
                    <div className="about__container">
                        <div className="seipra-logo">
                        <img src={seipraLogo} alt="Seipra Score" />
                        </div>
                        <p>Développeur Frontend chez <a href="https://www.seiprascore.com/" target="_blank" rel="noreferrer">Seipra Score</a> depuis 2021</p>
                    </div>
                    <div className="buttons-container">
                        <button onClick={() => setMoreLanguages(true)}>Languages</button>
                        <button onClick={() => setMoreLibraries(true)}>Librairies</button>
                    </div>
                </div>
                
            </div>
            {moreLanguages ? createPortal(<Languages setMoreLanguages={setMoreLanguages} />,appRef?.current ? appRef.current : document.body) : <></>}
            {moreLibraries ? createPortal(<Libraries setMoreLibraries={setMoreLibraries} />,appRef?.current ? appRef.current : document.body) : <></>}
        </section>
    )
})

export default About;