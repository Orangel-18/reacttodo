import React from 'react';
import {useLocalStorage} from './TodoLocalStorage';
// @ts-ignore
const TodoContext = React.createContext();

function TodoProvider(props:any) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      }:any = useLocalStorage('TODOS_V1',[]);

      const [iconItem, setIconItem]:any = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
     
      const [searchValue, setSearchValue] = React.useState('');
      // @ts-ignore
      const completedTodos = todos.filter(todo => todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos: any[] = [];
    
      // @ts-ignore
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        // @ts-ignore
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      };
    
      const addTodo = (text: any) => {
    
        const newTodos = [...todos];
    
        newTodos.push({
          completed: false,
          text,
        });
    
        saveTodos(newTodos);
      };
    
      const completeTodo = (text: any) => {
        // @ts-ignore
        const todoIndex = todos.findIndex(todo => todo.text == text);
    
        const newTodos = [...todos];
    
        newTodos[todoIndex].completed = true;
    
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text: any) => {
        // @ts-ignore
        const todoIndex = todos.findIndex(todo => todo.text == text);
    
        const newTodos = [...todos];
    
        newTodos.splice(todoIndex, 1);
    
        saveTodos(newTodos);
      };
    
      React.useEffect(()=> {
        
      }, [totalTodos]);

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
            iconItem,
            setIconItem,
        }}>

            {props.children}

        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};