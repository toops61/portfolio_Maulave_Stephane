import { useEffect, useRef, useState } from "react";
import ocLogo from './assets/Logo_OpenClassrooms.png';
import seipraLogo from './assets/seipra.webp';
import sqlLogo from './assets/MySQL.svg';
import tsLogo from './assets/Typescript_logo.svg';

function App() {

  const [titleText, setTitleText] = useState('');
  const [indexTitle, setIndexTitle] = useState(0);

  const titleArray = "Portfolio".split("");

  const nameRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = (Math.random() + 0.5) * 400;
    setTimeout(() => {
      if (titleText.length < titleArray.length) {
        setTitleText(titleText + titleArray[indexTitle]);
        setIndexTitle(indexTitle + 1);
      } else {
        nameRef?.current?.classList.add('appears');
        aboutRef?.current?.classList.add('appears');
      }
    }, duration);
  }, [titleText]);


  return (
    <main className="App">
      <div className="github-link"><a href="https://github.com/toops61" target="_blank" rel="noreferrer"></a></div>
      <div className="title-container">
        <h1>{titleText}</h1>
      </div>
      <section className="name-container" ref={nameRef}>
        <h2>Maulavé Stéphane</h2>
        <div className="under-line"></div>
      </section>
      <section className="about" ref={aboutRef}>
        <h3>A propos</h3>
        <div className="about-container">
          <div className="oc-logo">
            <img src={ocLogo} alt="Open Classrooms" />
          </div>
          <p>Formation développeur web chez Open Classrooms en 2021</p>
        </div>
        <div className="about-container">
          <div className="seipra-logo">
            <img src={seipraLogo} alt="Seipra Score" />
          </div>
          <p>Développeur Frontend chez <a href="https://www.seiprascore.com/" target="_blank" rel="noreferrer">Seipra Score</a> depuis 2021</p>
        </div>
        <div className="about-container">
          <p>Languages / Libriaries : </p>
          <div className="logo html"></div>
          <div className="logo css"></div>
          <div className="logo js"></div>
          <div className="logo typescript"><img src={tsLogo} alt="TypeScript" /></div>
          <div className="logo sql"><img src={sqlLogo} alt="My SQL" /></div>
        </div>
        <div className="about-container">
          <p>Frameworks / Libriaries : </p>
        </div>
      </section>
    </main>
  )
}

export default App
