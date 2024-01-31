import { useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState("");

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const startEditing = (note) => {
    setEditNote(note);
  };

  const updateNote = (id, text) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, text } : note))
    );
    setEditNote("");
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <div className="notes-section">
        <Notes
          notes={notes}
          deleteNote={deleteNote}
          startEditing={startEditing}
        />
        <AddNote addNote={addNote} />
      </div>
      {editNote && (
        <EditNote
          editNote={editNote}
          updateNote={updateNote}
          cancelUpdate={() => setEditNote("")}
        />
      )}
    </div>
  );
}

export default App;
