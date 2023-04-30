import {Listanota} from "./componentes/listaNota";
import {useState} from "react";
import {nanoid} from 'nanoid';


const App=()=> {
  const [notes,setNotes]= useState([{
    id:nanoid(),
    text:"esta es mi primera nota",
    date:'29/04/2023'
  },
  {
    id:nanoid(),
    text:"esta es mi segunda nota",
    date:'30/04/2023'
  },
  {
    id:nanoid(),
    text:"esta es mi tercera nota",
    date:'01/04/2023'
  }
  ]);
  return (
    
    <div className="App">
      <header>
        <h1>Notas</h1>
      </header>
        
        <Listanota notes={notes}/>

        </div>
    
      
  )
}

export default App;
