import React from "react";
import {TodoForm} from "../../ui/TodoForm";
import {useTodos} from "../useTodos";
import {useParams} from "react-router-dom";

function EditTodoPage() {

    const params = useParams();
    const id = Number(params.id);

    const { stateUpdaters } = useTodos();
    const { editTodo } = stateUpdaters;

    return(
        <TodoForm
            label="Edición TODO"
            submitText="Editar"
            submitEvent={ (newText) => editTodo(id,newText) }
        />
    );

}

export { EditTodoPage };