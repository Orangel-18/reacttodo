import React from 'react';
import { TodoContext } from './TodoContext';

function TodoCounter () {

    const {totalTodos, completedTodos}:any = React.useContext(TodoContext);

    return (
        <h2 className='text-3xl font-semibold m-2 p-3'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export {TodoCounter}