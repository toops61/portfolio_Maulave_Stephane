import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {

  const [titleText, setTitleText] = useState('');
  const [indexTitle, setIndexTitle] = useState(0);
  const [titleAppeared, setTitleAppeared] = useState(false);

  const titleArray = "Portfolio".split("");

  const appRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  /* const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null); */

  const projectRefs = useRef<HTMLDivElement[]>([]);

  const observer = new IntersectionObserver(
    entries => {
      entries.map(entry => {
        switch (entry.target) {
          case aboutRef.current:            
            if (entry.intersectionRatio === 1) {
              aboutRef.current?.classList.add('appears');
              observer.unobserve(entry.target);
            } 
            break;
          default:
            break;
        }
      })
    },{
      threshold:1
    }
  );

  useEffect(() => {
    const duration = (Math.random() + 0.5) * 400;
    setTimeout(() => {
      if (titleText.length < titleArray.length) {
        setTitleText(titleText + titleArray[indexTitle]);
        setIndexTitle(indexTitle + 1);
      } else {
        nameRef?.current?.classList.add('appears');
        setTitleAppeared(true);
      }
    }, duration);
  }, [titleText]);

  useEffect(() => {
    aboutRef.current && observer.observe(aboutRef.current);
    nameRef.current && observer.observe(nameRef.current);
  }, [titleAppeared])
  
  //cleanup function
  useEffect(() => {    
    return () => {
      console.log('clean');
      observer && observer.disconnect();
    }
  },[])

  useEffect(() => {
    projectRefs.current && console.log(projectRefs);
  }, [projectRefs])
  

  return (
    <main className="App" ref={appRef}>
      <div className="github-link"><a href="https://github.com/toops61" target="_blank" rel="noreferrer"></a></div>
      <div className="title-container">
        <h1>{titleText}</h1>
      </div>
      <section className="name-container" ref={nameRef}>
        <h2>Maulavé Stéphane</h2>
        <div className="under-line"></div>
      </section>
      {titleAppeared ? <>
        <About ref={aboutRef} appRef={appRef} />
        <Projects ref={projectRefs?.current} appRef={appRef} />
      </> : <></>}
      
    </main>
  )
}

export default App
