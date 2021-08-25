import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import './App.css';

function App() {
  let name = 'Pamela';
  let estaciones = ['Spring', 'Summer', 'Autumn', 'Winter'];
  return (
    <div className="App">
      <header className="App-header">
      <section>
      <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor= 'nombre'>Nombre</label>
        <input type= 'text' id='nombre' ></input>
        <h1> {name} </h1>
        <ul>
          {estaciones.map((elemento, index) => (
          <li key= {index} >{elemento}</li>))}
        </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
      <section>
        <Componente msg= 'Hola, soy el primer componente desde una props'/>
        <hr/>
        <Propiedades 
        cadena= 'Esto es una cadena' 
        boolean={true}
        number={19}
        arreglo ={[1,2,3]}
        objeto= {{nombre: 'Pamela', apellido:'Pereyra'}}
        elementoReact= {<i>Esto es un elemento i de React i de italica</i>}
        funcion= {(num)=>num*num}
        componenteReact= {<Componente msg= 'Soy una llamada a un componente dentro de una props'/>}
        />
        <hr/>
        <br></br>
      </section>
      <hr/>
      <Estado/>
      <hr/>
      <RenderizadoCondicional/>
    </header>  
    </div>
  );
}

export default App;
