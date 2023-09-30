import React from "react";
import './TodoForm.css'
import {useTodos} from "../../routes/useTodos";
import {useNavigate} from "react-router-dom";
function TodoForm(props) {

    const navigate =  useNavigate();
    const [newTodoValue,setNewTodoValue] = React.useState(props.defaulTodoText||'');
    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');
    }

    const onCancel = (event) => {
        navigate('/');
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla oara el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    {props.submitText}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };