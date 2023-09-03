
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import reduxLogo from '../assets/redux-logo.svg';
import sassLogo from '../assets/Sass_Logo.svg';

export default function Libraries({setMoreLibraries}:{setMoreLibraries:(state:boolean) => void}) {
  return (
    <div className="modal">
        <div className="inside-modal">
            <button className="close-btn" onClick={() => setMoreLibraries(false)}></button>
            <p>Frameworks / Librairies : </p>
            <div className="logos">
                <div className="logo">
                    <div className="logo__image react">
                        <img src={reactLogo} alt="React" />
                    </div>
                    <p>React</p>
                </div>
                <div className="logo">
                    <div className="logo__image vite">
                        <img src={viteLogo} alt="Vite" />
                    </div>
                    <p>Vite</p>
                </div>
                <div className="logo">
                    <div className="logo__image redux">
                        <img src={reduxLogo} alt="Redux" />
                    </div>
                    <p>Redux</p>
                </div>
                <div className="logo">
                    <div className="logo__image sass">
                        <img src={sassLogo} alt="Sass" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}