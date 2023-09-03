
import sqlLogo from '../assets/MySQL.svg';
import tsLogo from '../assets/Typescript_logo.svg';
import cLogo from '../assets/Csharp_Logo.png';
import pythonLogo from '../assets/Python-logo.svg';

export default function Languages({setMoreLanguages}:{setMoreLanguages:(state:boolean) => void}) {
  return (
    <div className="modal">
        <div className="inside-modal">
            <button className="close-btn" onClick={() => setMoreLanguages(false)}></button>
            <h4>Languages : </h4>
            <div className="logos">
                <div className="logo">
                    <div className="logo__image html"></div>
                    <p>HTML</p>
                </div>
                <div className="logo">
                    <div className="logo__image css"></div>
                    <p>CSS</p>
                </div>
                <div className="logo">
                    <div className="logo__image js"></div>
                    <p>JavaScript</p>
                </div>
                <div className="logo">
                    <div className="logo__image typescript">
                        <img src={tsLogo} alt="TypeScript" />
                    </div>
                    <p>TypeScript</p>
                </div>
                <div className="logo">
                    <div className="logo__image sql">
                        <img src={sqlLogo} alt="My SQL" />
                    </div>
                </div>
                <div className="logo">
                    <div className="logo__image csharp">
                        <img src={cLogo} alt="C Sharp" />
                    </div>
                    <p>C Sharp</p>
                </div>
                <div className="logo">
                    <div className="logo__image python">
                        <img src={pythonLogo} alt="Python" />
                    </div>
                    <p>Python</p>
                </div>
            </div>
        </div>
    </div>
  )
}