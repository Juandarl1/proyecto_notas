import { useState } from "react";

const Agregarnota=({mantenernota})=>{
    const [notaTexto,setNotaTexto]=useState('');

    const handleChange=(event)=>{
        setNotaTexto(event.target.value);
    }

    const mantenerclickGuardado=()=>{
        mantenernota(notaTexto)
    }
    return(
        <div className="nota_nueva">
            <textarea 
            rows='8' 
            cols='10' 
            placeholder='Agrega tu nota...' 
            value={notaTexto}
            onChange={handleChange}></textarea>
            <div className='nota-footer'>
                <small>200 caracteres</small>
                <button className="Guardar" onClick={mantenerclickGuardado}>guardar</button>
        </div>
    </div>
    )}

export default Agregarnota;