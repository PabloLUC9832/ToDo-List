import React, {useState} from 'react';
import {TodoHeader} from "../../ui/TodoHeader";
import {TodoCounter} from "../../ui/TodoCounter";
import {TodoSearch} from "../../ui/TodoSearch";
import {TodoList} from "../../ui/TodoList";
import {TodosError} from "../../ui/TodosError";
import {TodosLoading} from "../../ui/TodosLoading";
import {EmptyTodos} from "../../ui/EmptyTodos";
import {TodoItem} from "../../ui/TodoItem";
import {CreateTodoButton} from "../../ui/CreateTodoButton";
import {Modal} from "../../ui/Modal";
import {TodoForm} from "../../ui/TodoForm";
import {ChangeAlert} from "../../ui/ChangeAlert";
import {useTodos} from "../useTodos";

function HomePage() {

    const { state, stateUpdaters} = useTodos();

    const {
        loading,error,
        completedTodos,totalTodos,
        searchValue,searchedTodos,
        openModal,
    } = state;

    const {
        setSearchValue,addTodo,
        completeTodo,deleteTodo,
        setOpenModal,sincronizeTodos
    } = stateUpdaters;

    return (

        <React.Fragment>

            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                    //loading={loading}
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    //loading={loading}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                onError={ () => <TodosError/> }
                onLoading={ () => <TodosLoading/> }
                onEmptyTodos={ () => <EmptyTodos/> }
                onEmptySearchResults={ (searchText) => <p>Sin resultados para la busqueda: {searchText}</p> }
                render = { todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={ () => completeTodo(todo.text)}
                        onDelete={ () => deleteTodo(todo.text)}
                    />
                )}
            />

            <CreateTodoButton
                setOpenModal={setOpenModal}/>

            {openModal && (
                <Modal>
                    <TodoForm
                        setOpenModal={setOpenModal}
                        addTodo={addTodo}
                    />
                </Modal>
            )}

            <ChangeAlert sincronize={sincronizeTodos}/>
        </React.Fragment>
    );
}

export { HomePage };
