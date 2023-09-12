import React, {useState} from 'react';
import {TodoHeader} from "../TodoHeader";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodosLoading} from "../TodosLoading";
import {TodosError} from "../TodosError";
import {EmptyTodos} from "../EmptyTodos";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";
import {useTodos} from "./useTodos";

function App() {

    const {loading,error,searchedTodos,completeTodo,
        deleteTodo,openModal,setOpenModal,completedTodos,
        totalTodos,searchValue,setSearchValue, addTodo
    } = useTodos();

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

        </React.Fragment>
    );
}

export default App;
