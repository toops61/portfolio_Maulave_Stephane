import { forwardRef,useState } from "react";

const Projects = forwardRef<HTMLDivElement[],{appRef:React.RefObject<HTMLDivElement>}>(({appRef},refs) => {

    const [more, setMore] = useState(false);

    const addrefFunc = (ref:HTMLDivElement) => !refs?.includes(ref) && refs?.push(ref);

    return (
      <section className="projects">
        <div className="projects__title">
            <h3>Projets</h3>
            <div className="under-line"></div>
        </div>
        <div className="project" ref={el => el && addrefFunc(el)}>
            <p>1er projet</p>
        </div>
        <div className="project" ref={el => el && addrefFunc(el)}>
            <p>2eme projet</p>
        </div>
      </section>
    )
  })

export default Projects;