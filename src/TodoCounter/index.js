import './TodoCounter.css';
import React from "react";

function TodoCounter({completedTodos,totalTodos,loading}) {

    return(
    <h1 className={`TodoCounter ${!!loading} && "TodoCounter--loading"`}>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
    </h1>
    );
}

export { TodoCounter };