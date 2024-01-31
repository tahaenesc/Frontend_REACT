import React, { useState } from "react";

const EditNote = ({cancelUpdate, editNote, updateNote}) => {
  const [text, setText] = useState(editNote.text);

    const handleSubmit = (e) => {
        e.preventDefault()
        updateNote(editNote.id, text)
    }

  return (
    <div className="edit-note">
      <h2>Notu Düzenle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Kaydet</button>
        <button onClick={cancelUpdate}>İptal</button>
      </form>
    </div>
  );
};

export default EditNote;
