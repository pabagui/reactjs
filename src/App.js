import logo from './logo.svg';
import './App.css';

function App() {

  //const condition = true
 // const condition = false si quiero redefinir la condición

  //con js vanilla se escribe todo lo de abajo:
  /*
  let resultado = null

  if (condition) {
    resultado = 'verdadero'   
  } else {
    resultado = 'falso' 
  }

  console.log('el resultado es:'+resultado)
*/

//con sugar syntax se resume en lo siguiente con templates literales dentro del ${}:

// condicion ? resultado 1 : resultado 2 es cuando uso if-else, condicion && accion es cuando uso "and", condicion || acciones  es cuando uso "or"

//ejemplo:
//console.log(`el resultado es ${condition ? 'verdadero' : 'falso'}`)


//operadores útiles de js:

//1-spread operator para meter un array dentro de otro. es como push
/*
let a = 'a'
let array = ['b' , 'c' , 'd']
let newArray = [a , array]

console.log(newArray)
let newNewArray = [a , ...array] //... es el spread operator
console.log(newNewArray)
*/

//2-propiedades dinámicas
/*
const apellido = 'aguila'
const obj = {
  nombre: 'pablo',
  edad: 36,
  ['id_'+apellido]: 'herrera' //en react se usa para ir dinámicamente capturando el valor y reflejarlo en la salida
} 

console.log(obj)
*/

//3-destructuring y deep matching
/*
const obj = {
  nombre: 'pablo',
  apellido: 'aguila'
} 

//esto es lo que se usa en js vanilla para obtener propiedades de un objeto:
//let nombre = obj.nombre
//let apellido = obj.apellido

//const {nombre=nombre, apellido=apellido} = obj 
// {} se usa para extraerle algo a un objeto, el primer "apellido" es el nombre que le doy a la constante donde guardo lo que extraigo y el segundo "apellido" es el valor de la propiedad a guardar. se usa duplicado porque es útil para hacer destructuring

const {nombre, apellido} = obj
 //constante se llama igual que el valor puedo escribirlo 1 vez dentro del {}, esto es destructuring

const {nombre: primerNombre} = obj //siquiero renombrar la constante porque me hace más sentido uso deep matching con ":" para no hacer nomber=nombre

console.log(primerNombre)
//console.log(apellido)
*/

//4-ASIGNACIÓN EN DESESTRUCTURACIÓN: sirve para agregar un campo que no existe
const obj = {
  nombre: 'pablo',
  apellido: 'aguila',
  //edad: 30
} 
const {nombre: primerNombre, edad=35} = obj //si edad no está definido dentro del objeto se asigna 35 por defecto, si está definido se muestra 30
console.log(edad)

//esta parte es la única que no se toca:
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
