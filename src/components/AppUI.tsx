import React from 'react';

import {TodoCounter} from './TodoCounter'
import {TodoCreateButton} from './TodoCreateButton'
import {TodoItem} from './TodoItem'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoContext} from './TodoContext'
import {Modal} from './Modal'
import {TodoForm} from './TodoForm'

function AppUI() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,}:any = React.useContext(TodoContext);

    return(

    <React.Fragment>

      <TodoCounter />   

      <TodoSearch/>

          <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
  
          {searchedTodos.map((todo: { text: any; completed: any; }) => (
              <TodoItem 
              key={todo.text}
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal >

            <TodoForm />

          </Modal>
        )}

      <TodoCreateButton 
        setOpenModal={setOpenModal}
      />  

    </React.Fragment>
  );
}

export { AppUI }