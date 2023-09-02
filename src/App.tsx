import { useEffect, useState } from "react";

function App() {

  const [titleText, setTitleText] = useState('');
  const [indexTitle, setIndexTitle] = useState(0);
  const [textAppeared, setTextAppeared] = useState(false);

  const titleArray = "Portfolio".split("");

  useEffect(() => {
    const duration = (Math.random() + 0.5) * 400;
    setTimeout(() => {
      if (titleText.length < titleArray.length) {
        setTitleText(titleText + titleArray[indexTitle]);
        setIndexTitle(indexTitle + 1);
      } else {
        setTextAppeared(true);
      }
    }, duration);
  }, [titleText]);


  return (
    <main className="App">
      <div className="title-container">
        <h1>{titleText}</h1>
      </div>
      {textAppeared ? <section>
        <div className="name-container">
          <h2>Maulavé Stéphane</h2>
          <div className="under-line"></div>
        </div>
        <div className="about">
          <h3>A propos</h3>
          <p>Formation chez Open Classrooms en 2021</p>
          <p>Développeur Frontend chez <a href="https://www.seiprascore.com/">Seipra Score</a></p>
        </div>
      </section> : <></>}
    </main>
  )
}

export default App
