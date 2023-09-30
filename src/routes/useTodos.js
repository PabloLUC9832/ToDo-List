import React, {createContext} from "react";
import {useLocalStorage} from "./useLocalStorage";

function useTodos(props) {

    const  {item: todos,saveItem: saveTodos,loading,error, sincronizeItem : sincronizeTodos}
        = useLocalStorage('TODOS_V2',[]);
    const [searchValue,setSearchValue] = React.useState('');

    const completedTodos= todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
            id,
        });
        saveTodos(newTodos);
    };

    const getTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        return todos[todoIndex];
    }

    const completeTodo = (id) => {
        const newTodos = [...todos];
        const  todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].completed =true;
        saveTodos(newTodos);
    };

    const editTodo = (id,newText) => {
        const newTodos = [...todos];
        const  todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    };


    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    };

    const state = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        getTodo,
    };

    const stateUpdaters = {
        setSearchValue,
        addTodo,
        completeTodo,
        editTodo,
        deleteTodo,
        sincronizeTodos,
    };


    return { state, stateUpdaters };
}

function newTodoId(todoList) {

    if (!todoList.length){
        return 1;
    }
    const idList = todoList.map(todo => todo.id);
    const idMax = Math.max(...idList);
    return idMax+1;
}

export { useTodos };
