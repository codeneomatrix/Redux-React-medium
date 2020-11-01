import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'
import rootReducer from './reducers'
//import {agregarTarea} from './actions'
import { Provider } from 'react-redux'

// Creamos el store al pasar el reducer raiz
const store = createStore(rootReducer)

// creamos nuestro creador de acciones fusionado llamado fusion_agregarTarea
// const fusion_agregarTarea = tarea => store.dispatch(agregarTarea(tarea))

// Mostramos el estado inicial
// console.log(store.getState())

// Cada vez que el estado cambie, lo mostramos
// Tenga en cuenta que subscribe() devuelve una función para anular el registro del listener
// let unsubscribe = store.subscribe(() =>
//  console.log(store.getState())
//)

// Enviamos algunas acciones
// fusion_agregarTarea ("Tarea 1_fusionada");
// fusion_agregarTarea ("Tarea 2_fusionada");

// Anulamos el monitoreo de las actualizaciones al estado
// unsubscribe()

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
