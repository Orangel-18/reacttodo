import React from "react";

function TodoList(props:any){
    return(
        <section>
            <ul className="text-center">
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};