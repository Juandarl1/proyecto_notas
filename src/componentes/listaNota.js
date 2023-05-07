import {Nota} from "./Nota";
import Agregarnota from "./agregarNota";

export const Listanota = ({notes,mantenernota}) => {
  return (
    <div className='Listanota'>
      {notes.map((note)=>(
      <Nota id={note.id} text={note.text} date={note.date} />
      ))}

      <Agregarnota mantenernota={mantenernota}/>
    </div>
  );
};


