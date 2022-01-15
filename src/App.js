
import './App.css'
import Titulodos from './components/Titulodos'


//módulo sería App.js y componente la función que está dentro, ej function App() { }
//acá estoy creando un componente dentro de un módulo en vez de importarlo desde otro módulo (Titulo.jsx)
//componentes son funciones. Nombre empieza con mayúscula

export function Titulo () { //cuando uso export en index.js tengo que hacer destructuring para importar
  return (
    <div>
      Soy un componente dentro del módulo
    </div>
  )
}

//si uso arrow function sería const App= ()=> { }
export default function App () { 

  return ( //acá se trabajan los componentes con jsx: js+xml que es como html)
  //<Titulo /> == Titulo() en js plano
    <div className="App">
      <Titulo />
      <Titulodos />
        <p>Pablo</p>
        <input /> 
    </div>
  )
}

//export default App 
//export default se usa para 1 solo componente dentro del módulo 
//puede ser export App también. se usa para más de 1 componente dentro del módulo