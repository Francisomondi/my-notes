
import NotesList from './components/NotesList';
import { useState } from 'react'
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is the first note',
      date: '18th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the second note',
      date: '11th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the third note',
      date: '15th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the fourth note',
      date: '17th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the fifth note',
      date: '13th feb 2020'
    },
    {
      id: nanoid(),
      text: 'this is the odd note',
      date: '03th feb 2020'
    },

  ]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  )

}

export default App;