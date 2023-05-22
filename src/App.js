import {Listanota} from "./componentes/listaNota";
import {useState, useEffect} from "react";
import {nanoid} from 'nanoid';
import { AiFillFileText } from 'react-icons/ai';
import {Barra} from './componentes/barra';

const App=()=> {
  const [notes,setNotes]= useState([{
    id:nanoid(),
    text:"Para poder agregar una nota, presiona donde dice agrega tu nota..., luego presionala para guardar y listo",
    date:'29/04/2023'
  }
  ]);

  useEffect(()=>{
    const notasGuardadas = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if (notasGuardadas){
      setNotes(notasGuardadas);
    }
  },[]); 
  useEffect(()=>{
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
    );
  }, [notes]);


  

  const addnote=(text)=>{
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    };
    const newNotes=[...notes,newNote];
    setNotes(newNotes);  
  };

  const borrarNota=(id)=>{
    const newNotes=notes.filter((note)=>note.id!==id);
    setNotes(newNotes);
  }

  const [busquedaTexto,SetbusquedaTexto]=useState('');
    
  return (
    
    
    <section className="App">
      <header>
        <h1>Notas</h1>
        <h2><AiFillFileText size={32} className="icon" /></h2>
      </header>
      
        <Barra mantenerBusquedatexto={SetbusquedaTexto}/>
        <
        Listanota notes={notes.filter((note)=>note.text.toLowerCase().includes(busquedaTexto))} 
        mantenernota={addnote}
        mantenerborrarnota={borrarNota}
        />

        </section>
    
      
  )
}

export default App;
