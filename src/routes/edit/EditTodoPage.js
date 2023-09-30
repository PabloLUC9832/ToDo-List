import React from "react";
import {TodoForm} from "../../ui/TodoForm";

function EditTodoPage() {

    return(
        <TodoForm
            label="Edición TODO"
            submitText="Editar"
            submitEvent={ () => console.log("editar") }
        />
    );

}

export { EditTodoPage };