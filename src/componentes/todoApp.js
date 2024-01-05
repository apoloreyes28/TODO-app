// Este es el componente principal

import { useState } from "react";
import Todo from "./todo";

import './todoApp.css';

export default function TodoApp(){
/*
Hook 'gancho': es una función que nos va permitir actualizar "cambiar" información
de nuestras variables (elementos, componentes) o del estado de nuestra aplicación, 
para que cuando suceda un evento "acción", React pueda modificar la interfaz de
acuerdo a los valores asignados (introducidos) por el usuario, etc.
*/
    const [titulo, setTitulo] = useState('');
/*
useState() es una función que nos permite definir un estado inicial para después 
empezar a manipuarlo. useState nos va regresar un arreglo de 2 elementos por lo
tanto debemos desestructurar un arreglo [], estos elementos se parecen a el 
Getter y Setter de la POO.

titulo = Getter: solo nos devuelve (retorna, alamacena) el valor del estado.

setTitulo = Setter: es una función que obtiene "recibe" el valor de ese estado
para después cambiarlo (modificarlo).
*/

    const [todos, setTodos] = useState([]);
    /*
    esta función sirve para guardar el estado que se vaya creando y 
    lo inicializamos como un arreglo vacío ya que con cada tarea 'to do' que 
    vayamos agregando a la lista de tareas (arreglo) se va ir guardando en los []
    */

    /*
    function manejarClick(evento){
        evento.preventDefault();// evita el comportamiento predeterminado
        setTitulo('Polo');
    }// onClick : es un evento y sirve para modificar "actualizar" el estado.
    */

    function manejarCambio(evento){
        const valor = evento.target.value;

        setTitulo(valor);
    }// onChange : es un evento y sirve para mirar ó estar atento a los cambios del estado. 

    function manejarSubmit(evento){
        evento.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(), // nos genera una id 'número' aleatorio
            title: titulo,
            completed: false
        };

        // 1° hacemos una copia
        const temp = [... todos];
        
        // 2° con unshift la agregamos al inicio del arreglo
        temp.unshift(newTodo); 

        // 3° llamamos a la función: setTodos() para modificar el valor
        setTodos(temp);

        setTitulo('');// esto deja vacío el input de la lista de tareas...

    }// onSubmit : es un evento y sirve para guardar el valor introducido por 
     //            el usuario, ya sea que de un click en el elemento ó de un ENTER.

    function manejarActualizar(id, valor){
        const temp = [...todos];
        const item = temp.find(item => item.id === id);// buscamos el id
        item.title = valor;
        setTodos(temp);
    }

    function manejarEliminar(id){
        const temp = todos.filter((item) => item.id !== id);
        setTodos(temp);
    }

    return (
    <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={manejarSubmit}>
        <input onChange={manejarCambio} className="todoInput" value={titulo} />
        <input 
            // onClick={manejarClick}
            onClick={manejarSubmit}
            type="submit" 
            value="Crear" 
            className="buttonCreate" />
        </form>

        <div className="todosContainer">
        {
        // todos, es la referencia a nuestro estado (en donde almacenamos los datos)
        todos.map(item => ( 
        // esto es un callback, item es un arreglo de objetos el cual tiene las
        // propiedades de newTodo

        // map, nos permite recorrer todos los elementos del arreglo y además nos va 
        // regresar una operación, con la cual podemos mostrar en la pantalla.
        <Todo key={item.id} item={item} actualizar={manejarActualizar} eliminar={manejarEliminar}/>
        ))
        }
        </div>
    </div>
    ); 
}