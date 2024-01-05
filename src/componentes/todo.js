import { useState } from "react"

export default function Todo({item, actualizar, eliminar}){
    // {item} es un prop, solo que aquí lo desestructuramos para
    // ir directamente al nombre de esa propiedad 'variable': item

    const [editar, setEditar] = useState(false);

    function FormEditar(){

        const [nuevoValor, setNuevoValor] = useState(item.title);

        function manejarSubmit(evento){
            evento.preventDefault();
        }

        function manejarCambio(evento){
            const valor = evento.target.value;
            setNuevoValor(valor);
        }

        function manejarClickActualizar(){
            actualizar(item.id, nuevoValor);
         // pasamos una prop: actualizar y la mandamos llamar como si fuera una función

            setEditar(false);// cambiamos el estado de setEditar
        }
        return (
            <form 
                className="todoActualizarForm"
                onSubmit={manejarSubmit}>

              <input 
                type="text" 
                className="todoInput"
                onChange={manejarCambio}
                value={nuevoValor}/>
              <button 
                className="botones"
                onClick={manejarClickActualizar}>Actualizar</button>  
            </form>  
        );
    }

    function ElementoTodo(){
        return (
            <div className="todoInfo">
                <span className="todoTitulo">{item.title}</span>
                <button 
                    className="botones"
                    onClick={()=> setEditar(true)}>Editar
                </button>

                <button
                    className="botonEliminar" 
                    onClick={(evento) => eliminar(item.id)}>Eliminar</button>
            </div>
        );
    }//     item.title, aquí le decimos que busque dentro de 
    //                  la propiedad item a la propiedad title

    return (
        <div className="todo">
            {editar ? <FormEditar /> : <ElementoTodo />}
        </div>
    );
}// editar ? <FormEditar /> : <ElementoTodo />
// IF = si editar es true (podemos editar) y se abre el componente <FormEditar />
// ELSE = en caso contrario, solo podemos ver el elemento usando <ElementoTodo />