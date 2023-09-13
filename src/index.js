import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

function App(props) {
    return (
       <h1>¡{props.saludo}, {props.nombre}!</h1>
    );
}

function withSaludo(WrappedComponent) {
    return function WrappedComponentWithSaludo(saludo){
        return function ComponenteDeVerdad(props) {
            return (
                <>
                    <WrappedComponent {...props} saludo={saludo}/>
                    <p>Estaños acompañando al wrappedComponent</p>
                </>
            );
        };
    };
}
/*
function withWhatever(WrappedComponent){
    return function ComponenteDeVerdad(props) {
        return (
            <>
                <WrappedComponent {...props}/>
                <p>Estaños acompañando al wrappedComponent</p>
            </>
        );
    };
}
*/

//const AppWithWhatever = withWhatever(App);
const AppWithSaludo = withSaludo(App)('Saudos');

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<AppWithWhatever saludo="HEy" nombre="Oscar" />);
root.render(<AppWithSaludo saludo="HEy" nombre="Oscar" />);
//root.render(<App />);
