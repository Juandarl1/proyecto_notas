import {MdDeleteForever} from 'react-icons/md'


export const Nota=()=>{
    return (<div className='nota-lista'>
        <span>Hola esta es mi primera nota</span>
        <div className='nota-footer'>
            <small>13/04/2023</small>
            <MdDeleteForever className='delete-icon' size='1.3rem'/>
        </div>
    </div>
    );
};
