import {MdDeleteForever} from 'react-icons/md'


export const Nota=({id,text,date, mantenerborrarnota})=>{
    return (<div className='nota-lista'>
        <span>{text}</span>
        <div className='nota-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={()=>mantenerborrarnota(id)}className='delete-icon' size='1.3rem'/>
        </div>
    </div>
    );
};
