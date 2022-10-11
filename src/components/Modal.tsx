import React from "react";
import ReactDOM from "react-dom";

function Modal({children}:any) {
    return ReactDOM.createPortal(
        <div className="ModalBackground glass2">
            {children}
        </div>,
        // @ts-ignore
        document.getElementById('modal'),
    );
}

export {Modal};