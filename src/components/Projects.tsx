import { forwardRef } from "react";
import playerPict from '../assets/player-audio-mini.webp';

const Projects = forwardRef<HTMLDivElement[]>((_props,refs) => {

    if (!(refs && 'current' in refs && refs.current)) return null;

    return (
      <section className="projects">
        <div className="projects__title" ref={el => refs.current![2] = el!}>
            <h3>Projets</h3>
            <div className="under-line"></div>
        </div>
        <div className="project" ref={el => refs.current![0] = el!}>
            <div className="inside-project player">
                <div className="infos-container">
                    <h4>1er projet : Player Audio</h4>
                    <a href="https://toops61.github.io/MaulaveStephane/#/AudioPlayer" target="_blank" rel="noreferer">
                        <p className="player-link">Lien</p>
                    </a>
                    <h5>Technologies utilisées : </h5>
                    <p>React (Create React App), Redux toolkit, Sass.</p>
                    <h5>Objectifs : </h5>
                    <p>Créer un lecteur audio avec plusieurs options et une gestion dynamique des morceaux.</p>
                    <p className="difficulties">...difficultés rencontrées</p>
                </div>
                <div className="screenshot-container">
                    <img src={playerPict} alt="player audio" />
                </div>
            </div>
        </div>
        <div className="project" ref={el => refs.current![1] = el!}>
            <div className="infos-container">
                <h4>2eme projet</h4>
            </div>
            <div className="screenshot-container"></div>
            
        </div>
      </section>
    )
  })

export default Projects;