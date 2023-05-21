import { useState } from "react";

const Agregarnota=({mantenernota})=>{
    const [notaTexto,setNotaTexto]=useState('');

    const handleChange=(event)=>{
        if (limiteCarateres-event.target.value.length>=0){
            setNotaTexto(event.target.value);
        }
        
    }

    
    // const handleChange=(event)=>{
    //     if (event.target.value.length<=limiteCarateres){
    //         setNotaTexto(event.target.value);
    //     }
        
    // }

    const mantenerclickGuardado=()=>{
        if(notaTexto.trim().length>0){
            mantenernota(notaTexto)
            setNotaTexto('')
        }
        
    }

    const limiteCarateres=200;
    return(
        <div className="nota_nueva">
            <textarea 
            rows='8' 
            cols='10' 
            placeholder='Agrega tu nota...' 
            value={notaTexto}
            onChange={handleChange}></textarea>
            <div className='nota-footer'>
                <small>{limiteCarateres-notaTexto.length} caracteres</small>
                <button className="Guardar" onClick={mantenerclickGuardado}>guardar</button>
        </div>
    </div>
    )}

export default Agregarnota;