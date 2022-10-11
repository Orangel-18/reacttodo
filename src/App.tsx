import React from 'react';
import './App.css';
import {AppUI} from './components/AppUI'
import {TodoProvider} from './components/TodoContext'


const deftodos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
