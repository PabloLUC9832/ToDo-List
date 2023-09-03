import React, {useState} from 'react';
import {AppUI} from "./AppUI";
import {TodoProvider} from "../TodoContext";

/*
localStorage.removeItem('TODOS_V1');
const defaultToDos = [
  {text:'Limpiar',completed:false},
  {text:'Cocinar',completed:false},
  {text:'Acomodar',completed:true},
  {text:'Respirar',completed:true},
  {text:'Leer',completed:false},
  {text:'Caminar',completed:false},
  {text:'Caminar 2',completed:false},
  {text:'Canción',completed:false},
  {text:'Música',completed:false},
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));
*/

function App() {

    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
