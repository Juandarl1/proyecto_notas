import {Nota} from "./Nota";

export const Listanota = ({notes}) => {
  return (
    <div className='Listanota'>
      {notes.map((note)=>(
      <Nota id={note.id} text={note.text} date={note.date} />
      ))}

  
    </div>
  );
};


