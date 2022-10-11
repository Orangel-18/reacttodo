import React from 'react';
import {TodoContext, TodoProvider} from './TodoContext';
import {useRef, useEffect} from 'react';

function TodoItem(props:any){

    const [iconItem, setIconItem]:any = React.useState('/check_box_outline_blank_FILL0_wght400_GRAD0_opsz24.svg');   

    const ref = useRef(null);

    useEffect(() => {
       
        const onIconClick = () => {
  
            if (iconItem == '/check_box_outline_blank_FILL0_wght400_GRAD0_opsz24.svg') {
                setIconItem('/select_check_box_FILL0_wght400_GRAD0_opsz24.svg');
            } else {
                setIconItem('/check_box_outline_blank_FILL0_wght400_GRAD0_opsz24.svg')
            }
    
        };
    
        const element:any = ref.current;
    
        element!.addEventListener('click', onIconClick);
    
        return () => {
          element.removeEventListener('click', onIconClick);
        };
      }, []);


    return(
        <li className='glass w-72 sm:w-1/2 h-fit m-4 p-1.5 inline-block'>

            <p className='inline-block m-2 text-lg'>

                <i className='inline-block w-3 mr-4 ml-2 cursor-pointer'
                    onClick={props.onComplete}
                    
                > 
                    <img src={iconItem} ref={ref} alt="" />
                </i>

                {props.text}

                <i className='inline-block w-3 mr-4 ml-2 cursor-pointer'
                    onClick={props.onDelete}
                >
                    <img src="/close_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                </i>

            </p>

        </li>
    );
}

export { TodoItem };