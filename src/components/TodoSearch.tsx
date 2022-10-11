import React from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch(){

    const {searchValue, setSearchValue}:any = React.useContext(TodoContext);

    const estado = React.useState();

    const onSearchValueChange = (event:any) => {
        setSearchValue(event.target.value);
    };

    return(
        <input 
        className=" text-black rounded-md text-center w-64 p-2 m-3" 
        type="text" 
        placeholder="Buscar" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};