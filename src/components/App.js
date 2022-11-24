import { useState } from 'react';
import '../styles/App.scss';

function App() {  
  //Variables de estado
  let [numberOfErrors, setNumberOffErrors] = useState(0);

  const [lastLetter, setLastLetter] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  //Función
  function handleError(){
    if (numberOfErrors <= 12){
      setNumberOffErrors(numberOfErrors += 1); 
      console.log(numberOfErrors);
    }
  } 

  const handleInputLetter = (event) => {
    const alphaExp = /^[a-zA-Z\u00C0-\u017F\s]+$/g;
    if(event.target.value.match(alphaExp) || event.target.value === ''){
      setLastLetter(event.target.value);
      console.log('válido')
    }else{
      console.log('no válido');
    }
  }

  return (
    <div className="page">
    <header>
      <h1 className="header__title">Juego del ahorcado</h1>
    </header>
    <main className="main">
      <section>
        <div className="solution">
          <h2 className="title">Solución:</h2>
          <ul className="letters">
            <li className="letter">k</li>
            <li className="letter">a</li>
            <li className="letter"></li>
            <li className="letter">a</li>
            <li className="letter">k</li>
            <li className="letter">r</li>
            <li className="letter"></li>
            <li className="letter">k</li>
            <li className="letter">e</li>
            <li className="letter">r</li>
          </ul>
          <button onClick={handleError}>Incrementar</button>
        </div>
        <div className="error">
          <h2 className="title">Letras falladas:</h2>
          <ul className="letters">
            <li className="letter">f</li>
            <li className="letter">q</li>
            <li className="letter">h</li>
            <li className="letter">p</li>
            <li className="letter">x</li>
          </ul>
        </div>
        <form className="form">
          <label className="title" htmlFor="last-letter">Escribe una letra:</label>
          <input
            autoComplete="off"
            className="form__input"
            maxLength="1"
            type="text"
            name="last-letter"
            id="last-letter"
            onChange={handleInputLetter}
          />
        </form>
      </section>
      <section className={`dummy error-${numberOfErrors}`}>
        <span className="error-13 eye"></span>
        <span className="error-12 eye"></span>
        <span className="error-11 line"></span>
        <span className="error-10 line"></span>
        <span className="error-9 line"></span>
        <span className="error-8 line"></span>
        <span className="error-7 line"></span>
        <span className="error-6 head"></span>
        <span className="error-5 line"></span>
        <span className="error-4 line"></span>
        <span className="error-3 line"></span>
        <span className="error-2 line"></span>
        <span className="error-1 line"></span>
      </section>
    </main>
  </div>
  );
}

export default App;
