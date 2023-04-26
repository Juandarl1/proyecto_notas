import {MdDeleteForever} from 'react-icons/md'


export const Nota=()=>{
    return (<div classname='nota'>
        <span>Hola esta es mi primera nota</span>
        <div classname='nota-footer'>
            <small>13/04/2023</small>
            <MdDeleteForever className='delete-icon' size='1.3rem'/>
        </div>
    </div>
    );
};

//  default Nota;