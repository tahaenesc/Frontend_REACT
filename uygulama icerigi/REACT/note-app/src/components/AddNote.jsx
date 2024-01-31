import React, { useState } from "react";

const AddNote = ({addNote}) => {
  const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(text)
        setText("")
    }

  return (
    <div className="add-note">
      <h2>Yeni Not Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Notunuzu girin..."
        />
        <button type="submit">Not Ekle</button>
      </form>
    </div>
  );
};

export default AddNote;
