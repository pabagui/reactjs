
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer'



function App () { 

  return ( 
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="¡Hola, bienvenido a K'epe Bags!"/>
    </div>
  )
}

export default App