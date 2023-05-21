import React from 'react';
import {MdSearch} from 'react-icons/md'


export const Barra = ({mantenerBusquedatexto})=>{
    return(
        <section className="barra-busqueda">
            <MdSearch className='search-icons' size='1.3em'/> 
            <input onChange={(event)=>mantenerBusquedatexto(event.target.value)}
            type="text" 
            placeholder="Buscar nota"/>
        </section>
    )
}
