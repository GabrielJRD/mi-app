import { useState } from 'react';
import './Miapp.css';

const App = () => {
  
  const [Contador, setContador] = useState(0);

  return (
  <>
  <h1> Hola Mundo</h1>
  <p>Gabriel Jesus</p>
  <h3>Contador: { Contador }</h3>
  <button id= "btn-incrementa" className ="btns" onClick={() => setContador(Contador+1)}>Incrementa</button>
  <button id = "btn-decrementa" className ="btns" onClick={() => setContador(Contador-1)}>Decrementa</button>
  <button id = "btn-reinicia" className ="btns" onClick={() => setContador(0)}>Reinicia</button>
  </>
  
  )
}

export default App;
