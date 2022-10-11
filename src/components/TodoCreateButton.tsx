import React from 'react';

function TodoCreateButton(props:any){
    const onClickButton = () => {
        // @ts-ignore
        props.setOpenModal(openModal => !openModal);
    }
    return(
        <button 
        className='glass w-14 h-10 sm:w-18 sm:h-9 my-4 text-center'
        onClick={onClickButton}
        >

            <img className='mx-auto w-5' src="/add_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            
        </button>
    );
}

export { TodoCreateButton};