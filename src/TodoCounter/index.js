import './TodoCounter.css';
import {TodoContext} from "../TodoContext";
import React from "react";

// const estilos = {
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: '0',
//     padding: '48px',
// };

function TodoCounter() {

    const {completedTodos,totalTodos} = React.useContext(TodoContext);

    return(
    //<h1 style={estilos}>
    <h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
    </h1>
    );
}

export { TodoCounter };