import React from 'react';
import {TodoHeader} from "../../ui/TodoHeader";
import {TodoCounter} from "../../ui/TodoCounter";
import {TodoSearch} from "../../ui/TodoSearch";
import {TodoList} from "../../ui/TodoList";
import {TodosError} from "../../ui/TodosError";
import {TodosLoading} from "../../ui/TodosLoading";
import {EmptyTodos} from "../../ui/EmptyTodos";
import {TodoItem} from "../../ui/TodoItem";
import {CreateTodoButton} from "../../ui/CreateTodoButton";
import {ChangeAlert} from "../../ui/ChangeAlert";
import {useTodos} from "../useTodos";
import {useNavigate} from "react-router-dom";

function HomePage() {

    const { state, stateUpdaters} = useTodos();
    const navigate = useNavigate();

    const {
        loading,error,
        completedTodos,totalTodos,
        searchValue,searchedTodos,
    } = state;

    const {
        setSearchValue,
        completeTodo,deleteTodo
        ,sincronizeTodos
    } = stateUpdaters;

    return (

        <React.Fragment>

            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
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
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onEdit={ () => {
                            navigate(`/edit/${todo.id}`,
                                {
                                    state : { todo }
                                })
                        } }
                        onComplete={ () => completeTodo(todo.id)}
                        onDelete={ () => deleteTodo(todo.id)}
                    />
                )}
            />

            <CreateTodoButton
                onClick={ () => navigate('/new') }
            />

            <ChangeAlert sincronize={sincronizeTodos}/>
        </React.Fragment>
    );
}

export { HomePage };
