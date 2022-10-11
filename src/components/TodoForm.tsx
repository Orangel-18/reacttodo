import React from "react";
import { TodoContext } from "./TodoContext";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {addTodo,setOpenModal,}:any = React.useContext(TodoContext);

    const onChange = (event:any) => {
        //@ts-ignore
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event:any) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    };

    return (
        <form onSubmit={onAdd} className="p-8 text-center glass3">
            <label className="text-white text-lg mb-3">Ingresa una tarea que tengas pendiente</label>

            <input 
            className="block w-full h-4 rounded-md p-4 text-center"
            value={newTodoValue}
            onChange={onChange}
            placeholder="ToDo"
            />

            <div className="text-white text-center flex justify-around p-2">   

                <button
                    className="w-24 h-11 border-white rounded-md glass2"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="w-24 h-11 border-white rounded-md glass2"
                    onClick={onAdd}
                    type="submit"
                >
                    Agregar
                </button>

            </div>
        </form>
    );
}

export {TodoForm}