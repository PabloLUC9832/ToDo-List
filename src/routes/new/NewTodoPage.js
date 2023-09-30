import React from "react";
import {TodoForm} from "../../ui/TodoForm";

function NewTodoPage() {

    return (
        <TodoForm
            label="Escribe un nuevo TODO"
            submitText="Añadir"
            submitEvent={ () => console.log("añadir") }
        />
    );

}

export { NewTodoPage };