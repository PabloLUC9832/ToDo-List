import React from "react";
import './TodoForm.css'
import {useTodos} from "../../routes/useTodos";
import {useNavigate} from "react-router-dom";
function TodoForm(props) {

    const navigate =  useNavigate();
    const [newTodoValue,setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        navigate('/');
        props.submitEvent(newTodoValue);
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
            <textarea placeholder="Comprar manzanas" value={newTodoValue}
            onChange={onChange} required/>
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}>Cancelar</button>

                <button type="submit" className="TodoForm-button TodoForm-button--add"
                >{props.submitText}</button>

            </div>

        </form>
    );
}

export { TodoForm };